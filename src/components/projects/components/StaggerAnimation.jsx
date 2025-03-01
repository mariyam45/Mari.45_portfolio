import { motion, useAnimation, useInView } from "framer-motion";
import { useEffect, useRef } from "react";

const StaggerAnimation = ({ classes, children, dependencies = [] }) => {
    const ref = useRef(null);
    const inView = useInView(ref, { once: false });
    const animateControl = useAnimation();

    const cardParent = {
        hidden: {
            opacity: 0,
        },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.2 },
        },
    };

    // Reset animation when dependencies change
    useEffect(() => {
        animateControl.set("hidden");

        if (inView) {
            animateControl.start("visible");
        }
    }, [inView, animateControl, ...dependencies]);

    return (
        <motion.div
            ref={ref}
            variants={cardParent}
            initial="hidden"
            animate={animateControl}
            className={classes}
        >
            {children}
        </motion.div>
    );
};

export default StaggerAnimation;