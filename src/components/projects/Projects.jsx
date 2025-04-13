import { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

const Projects = () => {
    // State management
    const [projects, setProjects] = useState([]);
    const [activeSection, setActiveSection] = useState("portrait");
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    // References for section containers
    const portraitRef = useRef(null);
    const squareRef = useRef(null);
    const landscapeRef = useRef(null);
    const containerRef = useRef(null);

    const imageSizeClasses = {
        portrait: "aspect-[0.8] w-full max-w-xs mx-auto",
        landscape: "aspect-[1.85] w-full",
        square: "aspect-square w-full max-w-sm mx-auto",
    };

    // Get grid column classes based on imageSize
    const getGridClasses = (imageSize) => {
        switch (imageSize) {
            case "landscape":
                return "grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2";
            case "portrait":
                return "grid-cols-1 sm:grid-cols-2 md:grid-cols-3";
            case "square":
            default:
                return "grid-cols-1 sm:grid-cols-2 md:grid-cols-3";
        }
    };

    // Fetch projects data
    useEffect(() => {
        const fetchProjects = async () => {
            try {
                setIsLoading(true);
                const response = await fetch("/graphicDesignProjects.json");

                if (!response.ok) {
                    throw new Error(`Failed to fetch: ${response.status}`);
                }

                const data = await response.json();
                setProjects(data);
                setIsLoading(false);
            } catch (error) {
                console.error("Error fetching projects:", error);
                setError(error.message);
                setIsLoading(false);
            }
        };

        fetchProjects();
    }, []);

    // Efficient section detection with IntersectionObserver
    useEffect(() => {
        if (!portraitRef.current || !squareRef.current || !landscapeRef.current) return;

        const observerOptions = {
            rootMargin: "-20% 0px -20% 0px",
            threshold: 0
        };

        const sectionObserver = new IntersectionObserver((entries) => {
            // Filter for the topmost visible section
            const visibleEntries = entries.filter(entry => entry.isIntersecting);
            
            if (visibleEntries.length > 0) {
                // Find the one closest to the top of viewport
                const sorted = visibleEntries.sort((a, b) => {
                    return a.boundingClientRect.top - b.boundingClientRect.top;
                });
                
                const section = sorted[0].target.dataset.section;
                if (section) {
                    setActiveSection(section);
                }
            }
        }, observerOptions);

        // Observe all sections
        sectionObserver.observe(portraitRef.current);
        sectionObserver.observe(squareRef.current);
        sectionObserver.observe(landscapeRef.current);

        return () => {
            sectionObserver.disconnect();
        };
    }, [isLoading]);

    // Handle button click to scroll to section
    const scrollToSection = (section) => {
        const sectionRefs = {
            portrait: portraitRef,
            square: squareRef,
            landscape: landscapeRef
        };

        const sectionRef = sectionRefs[section];

        if (sectionRef.current) {
            // Simple scroll with offset
            const yOffset = -20;
            const element = sectionRef.current;
            const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;

            window.scrollTo({
                top: y,
                behavior: 'smooth'
            });
            
            setActiveSection(section);
        }
    };

    // Render size selection buttons
    const renderSizeButtons = () => {
        const buttons = [
            { size: "portrait", className: "w-7 h-[38px]" },
            { size: "square", className: "size-7" },
            { size: "landscape", className: "w-7 h-[18px]" },
        ];

        return (
            <div className="flex flex-col gap-6">
                {buttons.map((button) => (
                    <button
                        key={button.size}
                        onClick={() => scrollToSection(button.size)}
                        className={`${button.className} rounded-sm transition-colors duration-200 ${
                            activeSection === button.size 
                                ? "bg-[#28E98C]" 
                                : "bg-[#94ACA1] hover:bg-[#94ACA1]/80"
                        }`}
                        aria-label={`View ${button.size} images`}
                    />
                ))}
            </div>
        );
    };

    // Render project section without stagger animations
    const renderProjectSection = (imageSize) => {
        if (isLoading) {
            return (
                <div className="flex justify-center items-center py-8">
                    <div className="w-8 h-8 border-4 border-[#28E98C]/20 border-t-[#28E98C] rounded-full animate-spin"></div>
                </div>
            );
        }

        if (error) {
            return <div className="text-center text-red-500 py-8">Error: {error}</div>;
        }

        const sectionProjects = projects.find(item => item.imageSize === imageSize)?.data || [];

        if (sectionProjects.length === 0) {
            return <div className="text-center py-8">No projects found for {imageSize} layout.</div>;
        }

        return (
            <div className={`grid ${getGridClasses(imageSize)} gap-4 md:gap-5 lg:gap-6`}>
                {sectionProjects.map((project) => (
                    <motion.div
                        key={project.id}
                        initial={{ opacity: 0 }}
                        whileInView={{ 
                            opacity: 1,
                            transition: { duration: 0.2 }
                        }}
                        viewport={{ once: true, margin: "-50px" }}
                        className="flex justify-center"
                    >
                        <div
                            className={`border border-[#28E98C] rounded-xl overflow-hidden transition-transform duration-200 hover:translate-y-[-2px] ${imageSizeClasses[imageSize]}`}
                        >
                            <img
                                className="w-full h-full object-cover"
                                src={project.img}
                                alt={project.name}
                                loading="lazy"
                            />
                        </div>
                    </motion.div>
                ))}
            </div>
        );
    };

    return (
        <div className="flex flex-col md:flex-row gap-x-20 relative" ref={containerRef}>
            {/* Back button */}
            <div className="sticky top-0 z-10 flex justify-between bg-black/50 backdrop-blur-sm py-4 md:py-0 md:bg-transparent md:backdrop-blur-none">
                <div>
                    <Link
                        to={"/"}
                        className="inline-flex items-center justify-center gap-2 px-6 py-2.5 text-sm font-medium text-[#28E98C] border-2 border-[#28E98C] rounded-full transition-all duration-200 hover:bg-[#28E98C]/10 focus:outline-none focus:ring-2 focus:ring-[#28E98C]"
                    >
                        <ArrowLeft size={16} />
                    </Link>
                </div>
                <div className="md:hidden">
                    {renderSizeButtons()}
                </div>
            </div>

            {/* Main content with projects */}
            <div className="w-full mt-4 md:mt-0">
                <div className="w-full">
                    {/* Portrait Section */}
                    <section
                        ref={portraitRef}
                        data-section="portrait"
                        className="mb-20 pt-4 scroll-mt-12"
                        id="portrait-section"
                    >
                        {renderProjectSection("portrait")}
                    </section>

                    {/* Square Section */}
                    <section
                        ref={squareRef}
                        data-section="square"
                        className="mb-20 pt-4 scroll-mt-12"
                        id="square-section"
                    >
                        {renderProjectSection("square")}
                    </section>

                    {/* Landscape Section */}
                    <section
                        ref={landscapeRef}
                        data-section="landscape"
                        className="mb-20 pt-4 scroll-mt-12"
                        id="landscape-section"
                    >
                        {renderProjectSection("landscape")}
                    </section>
                </div>
            </div>

            {/* Size selection buttons for desktop - fixed position */}
            <div className="sticky top-20 self-start hidden md:block">
                {renderSizeButtons()}
            </div>
        </div>
    );
};

export default Projects;