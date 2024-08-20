import ProjectCard from "../components/ProjectCard";
import bg from "/bg1.png";
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
    <div className="w-full bg-gradient-to-r to-[#b34f5d] from-[#f6e9eb] m-0 p-0 box-border">
      <div className="grid grid-cols-2 ">
        {/* Left Side */}
        <div className="m-10 p-10 flex justify-center items-center gap-10">
          <button
            className="w-fit h-fit p-2 text-lg font-bold rounded-full text-white bg-[#60151f] hover:bg-[#aa3948]"
            onClick={prevSlide}
          >
            &lt;
          </button>
          <div className="transition-transform duration-1000 ease-in-out">
            <ProjectCard title={projects[currentSlide].title} url={bg}>
              {projects[currentSlide].content}
            </ProjectCard>
          </div>
          <button
            className="h-fit w-fit p-2 rounded-full text-lg font-bold text-white bg-[#60151f] hover:bg-[#aa3948]"
            onClick={nextSlide}
          >
            &gt;
          </button>
        </div>
        {/* Right Side */}
        <div className="m-10 p-10 flex justify-center items-center gap-10">
          <StackCard stack={projects[currentSlide].stack} />
        </div>
      </div>
    </div>
  );
}
