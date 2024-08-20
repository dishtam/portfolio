export default function Intro() {
  return (
    <>
      <div className="grid grid-cols-2 bg-gradient-to-r from-[#b34f5d] to-[#f6e9eb]">
        <div className="flex flex-col items-center justify-center">
          <div className="w-96 text-[#50121a] ">
            <h1
              className="font-bold text-3xl flex flex-col-reverse text-white pb-5
             after:text-[#801c2a] after:border-b-8 w-fit"
            >
              ROHIT ROY
            </h1>
            <h4 className="pb-2 font-medium">FULL STACK DEVELOPER</h4>
            <p className="font-light text-white">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus
              delectus ab veritatis blanditiis repellat autem nulla reiciendis
              magni libero minus?
            </p>
          </div>
          {/* Social media icons */}
          <div className="flex gap-10 pt-16 text-[#50121a] text-2xl hover:cursor-pointer">
            <i className="fa fa-instagram hover:scale-110"></i>
            <i className="fa fa-facebook-f hover:scale-110"></i>
            <i className="fa fa-linkedin hover:scale-110"></i>
          </div>
        </div>
        <div>
          <img src="/img.png" alt="3d image" />
        </div>
      </div>
    </>
  );
}
