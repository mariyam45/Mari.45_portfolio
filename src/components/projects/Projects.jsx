import { useEffect, useState } from "react";
import StaggerAnimation from "./components/StaggerAnimation";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

const Projects = () => {
    // State management
    const [projects, setProjects] = useState([]);
    const [imageSize, setImageSize] = useState("square");
    const [filteredProjects, setFilteredProjects] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);
    const [key, setKey] = useState(0);

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
    const getGridClasses = () => {
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
                const response = await fetch("/public/data/graphicDesignProjects.json");

                if (!response.ok) {
                    throw new Error(`Failed to fetch: ${response.status}`);
                }

                const data = await response.json();
                console.log("Fetched data:", data);
                setProjects(data);

                const filtered = data.find((item) => item.imageSize === imageSize)?.data || [];
                console.log("Filtered projects (initial):", filtered);
                setFilteredProjects(filtered);

                setIsLoading(false);
            } catch (error) {
                console.error("Error fetching projects:", error);
                setError(error.message);
                setIsLoading(false);
            }
        };

        fetchProjects();
    }, []);

    // Update filtered projects when imageSize changes
    useEffect(() => {
        if (projects.length > 0) {
            console.log("Updating filtered projects for imageSize:", imageSize);
            const filtered = projects.find((item) => item.imageSize === imageSize)?.data || [];
            console.log("Filtered projects:", filtered);
            setFilteredProjects(filtered);
            setKey(prevKey => prevKey + 1);
        }
    }, [imageSize, projects]);

    // Handle image size change
    const handleImageSizeChange = (size) => {
        console.log("Changing image size to:", size);
        setImageSize(size);
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
                        onClick={() => handleImageSizeChange(button.size)}
                        className={`${button.className} rounded-sm ${imageSize === button.size ? "bg-[#28E98C]" : "bg-[#94ACA1]"
                            }`}
                        aria-label={`Set ${button.size} image layout`}
                    />
                ))}
            </div>
        );
    };

    const [isImageLoaded, setIsImageLoaded] = useState(false);
    // Render project cards
    const renderProjects = () => {

        if (isLoading) {
            return <div className="text-center py-8">Loading projects...</div>;
        }

        if (error) {
            return <div className="text-center text-red-500 py-8">Error: {error}</div>;
        }

        if (filteredProjects.length === 0) {
            return <div className="text-center py-8">No projects found for this layout.</div>;
        }

        return (
            <StaggerAnimation
                key={key}
                classes={`grid ${getGridClasses()} gap-4 md:gap-5 lg:gap-6`}
            >
                {filteredProjects.map((project) => (
                    <motion.div
                        key={project.id}
                        variants={animations.card}
                        className="flex justify-center"
                    >
                        <div
                            className={`border border-[#28E98C] rounded-xl overflow-hidden ${imageSizeClasses[imageSize]}`}
                        >
                            {/* Skeleton Loader */}
                            {!isImageLoaded && (
                                <div className="w-full h-full bg-gray-300 animate-pulse"></div>
                            )}

                            {/* Image */}
                            <img
                                className={`w-full h-full object-cover ${isImageLoaded ? "block" : "hidden"}`}
                                src={project.img}
                                alt={project.name}
                                loading="lazy"
                                onLoad={() => setIsImageLoaded(true)} // Set image as loaded
                            />
                        </div>
                    </motion.div>
                ))}
            </StaggerAnimation>
        );
    };

    return (
        <div className="flex flex-col md:flex-row gap-x-20 space-y-4">
            {/* Projects display */}
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
            <motion.div
                initial={animations.container.initial}
                animate={animations.container.animate}
                className="w-full"
            >
                {renderProjects()}
            </motion.div>
            {/* Size selection buttons */}
            <div className="sticky top-20 self-start hidden md:block">
                {renderSizeButtons()}
            </div>
        </div>
    );
};

export default Projects;