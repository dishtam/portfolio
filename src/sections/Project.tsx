import ProjectCard from "../components/ProjectCard";
import projects from "../data/project";
import { useState } from "react";
import StackCard from "../components/StackCard";

export default function Project() {
  const [currentSlide, setCurrentSlide] = useState(0);

  function nextSlide() {
    setCurrentSlide((c) => (c + 1) % projects.length);
  }

  function prevSlide() {
    setCurrentSlide((c) => (c === 0 ? projects.length - 1 : c - 1));
  }

  return (
    <div className="w-full bg-gradient-to-br from-[#b34f5d] to-[#f6e9eb] m-0 p-0 box-border">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-20">
        {/* Left Side */}
        <div className=" m-2 md:m-10 p-4 md:p-10 flex justify-center items-center md:gap-10">
          <button
            className="w-fit h-fit p-2 text-base md:text-lg font-bold rounded-full text-white bg-[#60151f] hover:bg-[#aa3948]"
            onClick={prevSlide}
          >
            &lt;
          </button>
          <div className="transition-transform duration-1000 ease-in-out">
            <ProjectCard
              title={projects[currentSlide].title}
              link={projects[currentSlide].link}
              url={projects[currentSlide].url}
            >
              {projects[currentSlide].content}
            </ProjectCard>
          </div>
          <button
            className="h-fit w-fit p-2 text-base md:text-lg rounded-full font-bold text-white bg-[#60151f] hover:bg-[#aa3948]"
            onClick={nextSlide}
          >
            &gt;
          </button>
        </div>
        {/* Right Side */}
        <div className="m-4 md:m-10 p-4 md:p-10 flex justify-center items-center gap-5 md:gap-10">
          <StackCard stack={projects[currentSlide].stack} />
        </div>
      </div>
    </div>
  );
}
