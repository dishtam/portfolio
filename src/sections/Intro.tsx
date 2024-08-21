export default function Intro() {
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 bg-gradient-to-r from-[#b34f5d] to-[#f6e9eb]">
        <div className="mt-10 flex flex-col items-center justify-center">
          <div className="w-80 md:w-96 text-[#50121a] ">
            <h1
              className="font-bold text-xl md:text-3xl flex flex-col-reverse text-white pb-5
             after:text-[#801c2a] after:border-b-8 w-fit"
            >
              ROHIT ROY
            </h1>
            <h4 className="pb-2 font-medium md:text-lg">
              FULL STACK DEVELOPER
            </h4>
            <p className="font-light text-white md:text-base">
              Full stack developer skilled in MERN stack, with expertise in
              Next.js and PostgreSQL, passionate about building dynamic web
              applications.
            </p>
          </div>
          {/* Social media icons */}
          <div className="flex gap-10 pt-8 md:pt-16 text-[#50121a] text-xl md:text-2xl hover:cursor-pointer">
            <a
              href="https://www.instagram.com/__rohit__roy___/"
              target="_blank"
            >
              <i className="fa fa-instagram hover:scale-110"></i>
            </a>
            <a
              href="https://www.facebook.com/profile.php?id=100006742771161"
              target="_blank"
            >
              <i className="fa fa-facebook-f hover:scale-110"></i>
            </a>

            <a
              href="https://www.linkedin.com/in/rohit-roy-nits/"
              target="_blank"
            >
              <i className="fa fa-linkedin hover:scale-110"></i>
            </a>
          </div>
        </div>
        <div className="flex items-center justify-center mt-10 md:mt-0">
          <img src="/img.png" alt="3d image" className="w-64 md:w-auto" />
        </div>
      </div>
    </>
  );
}
