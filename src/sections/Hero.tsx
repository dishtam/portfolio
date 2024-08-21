import Card from "../components/Card";
import wave from "/wave.svg";

export default function Hero() {
  return (
    <div>
      <div className="container mx-auto p-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="flex flex-col gap-5 items-center">
            <Card id="1" subheading="Education" dir={true}>
              Graduated with a B.Tech in ECE from NIT Silchar with a CGPA of
              8.28.
            </Card>
            <Card id="2" subheading="Programming Skills" dir={true}>
              Proficient in C++, Java, and JavaScript with 4 years of
              experience.
            </Card>
            <Card id="3" subheading="Coding Achievements" dir={true}>
              Highest LeetCode rating of 1680; solved over 1000 DSA problems.
            </Card>
          </div>
          <div
            className="flex justify-center items-center relative 
            before:inline-block before:box-border before:h-60 md:before:h-80 before:w-60 md:before:w-80 before:bg-blood
            before:rounded-full before:border-blood-8 before:absolute 
            before:top-1/2 before:left-1/2 before:transform before:-translate-x-1/2 before:-translate-y-1/2 before:-z-10 before:animate-circle
            after:inline-block after:box-border after:h-72 md:after:h-96 after:w-72 md:after:w-96 after:bg-transparent after:rounded-full after:border-8 after:absolute 
            after:top-1/2 after:left-1/2 after:transform after:-translate-x-1/2 after:-translate-y-1/2 after:-z-10"
          >
            <img src="/pic.png" alt="my image" className="h-3/6 md:h-4/6" />
          </div>
          <div className="flex flex-col gap-5 items-center">
            <Card id="4" subheading="Robotics Accomplishments">
              National finalist in robotics competition at IIT Guwahati.
            </Card>
            <Card id="5" subheading="Leadership Experience">
              Served as General Secretary of the Robotics Club at NIT Silchar.
            </Card>
            <Card id="6" subheading="Software Passion">
              Deep interest in web and software development, continually
              enhancing skills.
            </Card>
          </div>
        </div>
      </div>
      <img src={wave} alt="wave image" className="rotate-180 w-screen" />
    </div>
  );
}
