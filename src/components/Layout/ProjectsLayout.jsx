import { Outlet } from "react-router-dom";

const ProjectsLayout = () => {
    return (
        <section className="max-w-[1280px] mx-auto min-h-screen h-full bg-[#1f1f1f] pt-10 pb-20 px-4 md:px-0">
            {/* Header */}
            <div className="flex gap-x-6 items-center w-full py-4 mb-11">
                <div className="border-t border-[#D9D9D9] flex-grow" />
                <span className="text-white text-xl leading-[30px] tracking-[3%] font-poppins">Client’s Work and Inspiration Designs</span>
                <div className="border-t border-[#D9D9D9] flex-grow" />
            </div>

            <Outlet />
        </section>
    );
};

export default ProjectsLayout;