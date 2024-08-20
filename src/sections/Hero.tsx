import Card from "../components/Card";
import wave from "/wave.svg";
export default function Hero() {
  return (
    <div>
      <div className="container mx-auto p-4">
        <div className="grid grid-cols-3 gap-4">
          <div className="flex flex-col gap-5 items-center">
            <Card id="1" subheading="This is subheading 1" dir={true}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero, id.
            </Card>
            <Card id="2" subheading="This is subheading 2" dir={true}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero, id.
            </Card>
            <Card id="3" subheading="This is subheading 3" dir={true}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero, id.
            </Card>
          </div>
          <div
            className="flex justify-center items-center
        relative 
        before:inline-block before:box-border before:h-80 before:w-80 before:bg-blood
        before:rounded-full before:border-blood-8 before:absolute 
        before:top-1/2 before:left-1/2 before:transform before:-translate-x-1/2 before:-translate-y-1/2 before:-z-10 before:animate-circle

        after:inline-block after:box-border after:h-96 after:w-96 after:bg-transparent after:rounded-full after:border-8 after:absolute 
        after:top-1/2 after:left-1/2 after:transform after:-translate-x-1/2 after:-translate-y-1/2 after:-z-10
        "
          >
            <img src="/pic.png" alt="my image" className="h-4/6" />
          </div>
          <div className="flex flex-col gap-5 items-center">
            <Card id="4" subheading="This is subheading 4">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero, id.
            </Card>
            <Card id="5" subheading="This is subheading 5">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero, id.
            </Card>
            <Card id="6" subheading="This is subheading 6">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero, id.
            </Card>
          </div>
        </div>
      </div>
      <img src={wave} alt="wave image" className="rotate-180 w-screen" />
    </div>
  );
}
