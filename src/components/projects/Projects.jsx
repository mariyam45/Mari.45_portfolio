import { useEffect, useState, useRef } from "react";
import StaggerAnimation from "./components/StaggerAnimation";
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

    // Animation variants
    const animations = {
        container: {
            initial: { opacity: 0 },
            animate: { opacity: 1, transition: { duration: 1, delay: 0.5 } },
        },
        card: {
            hidden: { y: -20, opacity: 0 },
            visible: { y: 0, opacity: 1, transition: { duration: 0.4 } },
        },
    };

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
                console.log("Fetched data:", data);
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

    // Set up scroll event listener for more reliable section detection
    useEffect(() => {
        if (!portraitRef.current || !squareRef.current || !landscapeRef.current) return;

        const handleScroll = () => {
            const portraitRect = portraitRef.current.getBoundingClientRect();
            const squareRect = squareRef.current.getBoundingClientRect();
            const landscapeRect = landscapeRef.current.getBoundingClientRect();
            
            // Get the middle of the viewport
            const viewportMiddle = window.innerHeight / 2;
            
            // Calculate distance from viewport middle to each section's top
            const portraitDistance = Math.abs(portraitRect.top - viewportMiddle);
            const squareDistance = Math.abs(squareRect.top - viewportMiddle);
            const landscapeDistance = Math.abs(landscapeRect.top - viewportMiddle);
            
            // Find the section closest to the middle of the viewport
            const minDistance = Math.min(portraitDistance, squareDistance, landscapeDistance);
            
            if (minDistance === portraitDistance) {
                setActiveSection("portrait");
            } else if (minDistance === squareDistance) {
                setActiveSection("square");
            } else if (minDistance === landscapeDistance) {
                setActiveSection("landscape");
            }

            // Alternative approach: check if sections are in viewport
            const isInViewport = (element) => {
                const rect = element.getBoundingClientRect();
                return (
                    rect.top <= (window.innerHeight / 2) &&
                    rect.bottom >= (window.innerHeight / 3)
                );
            };

            // Check each section and set active accordingly
            if (isInViewport(squareRef.current)) {
                setActiveSection("square");
            } else if (isInViewport(portraitRef.current)) {
                setActiveSection("portrait");
            } else if (isInViewport(landscapeRef.current)) {
                setActiveSection("landscape");
            }
        };

        // Add scroll event listener
        window.addEventListener('scroll', handleScroll);
        // Initial check
        handleScroll();

        return () => {
            window.removeEventListener('scroll', handleScroll);
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
            sectionRef.current.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
            setActiveSection(section); // Immediately update active section on click
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
                        className={`${button.className} rounded-sm ${activeSection === button.size ? "bg-[#28E98C]" : "bg-[#94ACA1]"
                            } transition-colors duration-300`}
                        aria-label={`Scroll to ${button.size} images`}
                    />
                ))}
            </div>
        );
    };

    // Render project section
    const renderProjectSection = (imageSize) => {
        if (isLoading) {
            return <div className="text-center py-8">Loading projects...</div>;
        }

        if (error) {
            return <div className="text-center text-red-500 py-8">Error: {error}</div>;
        }

        const sectionProjects = projects.find(item => item.imageSize === imageSize)?.data || [];

        if (sectionProjects.length === 0) {
            return <div className="text-center py-8">No projects found for {imageSize} layout.</div>;
        }

        return (
            <StaggerAnimation
                key={imageSize}
                classes={`grid ${getGridClasses(imageSize)} gap-4 md:gap-5 lg:gap-6`}
            >
                {sectionProjects.map((project) => (
                    <motion.div
                        key={project.id}
                        variants={animations.card}
                        className="flex justify-center"
                    >
                        <div
                            className={`border border-[#28E98C] rounded-xl overflow-hidden ${imageSizeClasses[imageSize]}`}
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
            </StaggerAnimation>
        );
    };

    return (
        <div className="flex flex-col md:flex-row gap-x-20 space-y-4" ref={containerRef}>
            {/* Back button and mobile buttons - keeping original layout */}
            <div className="flex justify-between">
                <div>
                    <Link
                        to={"/"}
                        className="inline-flex items-center justify-center gap-2 px-6 py-2.5 text-sm font-medium text-[#28E98C] border-2 border-[#28E98C] rounded-full transition-all duration-300 hover:bg-[#28E98C]/10 focus:outline-none focus:ring-2 focus:ring-[#28E98C] focus:ring-offset-2 focus:ring-offset-gray-900"
                    >
                        <ArrowLeft size={16} />
                        {/* <span>Back</span> */}
                    </Link>
                </div>
                <div className="sticky top-20 self-start md:hidden block">
                    {renderSizeButtons()}
                </div>
            </div>

            {/* Main content with projects */}
            <motion.div
                initial={animations.container.initial}
                animate={animations.container.animate}
                className="w-full"
            >
                {/* Portrait Section */}
                <section 
                    ref={portraitRef} 
                    data-section="portrait"
                    className="mb-20 pt-4"
                    id="portrait-section"
                >
                    <h2 className="text-xl font-medium text-[#28E98C] mb-6">Portrait Projects</h2>
                    {renderProjectSection("portrait")}
                </section>

                {/* Square Section */}
                <section 
                    ref={squareRef} 
                    data-section="square"
                    className="mb-20 pt-4"
                    id="square-section"
                >
                    <h2 className="text-xl font-medium text-[#28E98C] mb-6">Square Projects</h2>
                    {renderProjectSection("square")}
                </section>

                {/* Landscape Section */}
                <section 
                    ref={landscapeRef} 
                    data-section="landscape"
                    className="mb-20 pt-4"
                    id="landscape-section"
                >
                    <h2 className="text-xl font-medium text-[#28E98C] mb-6">Landscape Projects</h2>
                    {renderProjectSection("landscape")}
                </section>
            </motion.div>

            {/* Size selection buttons - keeping original position */}
            <div className="sticky top-20 self-start hidden md:block">
                {renderSizeButtons()}
            </div>
        </div>
    );
};

export default Projects;