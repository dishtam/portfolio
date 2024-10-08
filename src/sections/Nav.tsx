import { useState } from "react";
import DownloadResume from "../components/DownloadResume";
import { Link } from "react-router-dom";

export default function Nav() {
  const [toggle, setTogle] = useState<boolean>(false);
  return (
    <div>
      <div
        className={`flex justify-between p-8 pb-4 ${
          !toggle ? "shadow-md" : ""
        }`}
      >
        <div className=" flex flex-col before:border before:border-blood text-xl font-semibold">
          ROHIT ROY
        </div>
        {/* For Desktop */}
        <div className="hidden md:flex md:gap-4 md:hover:cursor-pointer">
          <div className="flex flex-col after:content-[''] after:block after:bg-blood after:w-0 after:h-0.5 after:transistion-all after:duration-300 hover:after:w-full">
            <Link to="/">ABOUT</Link>
          </div>
          <div className="flex flex-col after:content-[''] after:block after:bg-blood after:w-0 after:h-0.5 after:transistion-all after:duration-300 hover:after:w-full">
            <Link to="/contact">CONTACT</Link>
          </div>
          <div className="flex flex-col after:content-[''] after:block after:bg-blood after:w-0 after:h-0.5 after:transistion-all after:duration-300 hover:after:w-full">
            <DownloadResume />
          </div>
        </div>
        {/* For Mobile */}
        <div className="md:hidden">
          <i className="fa fa-bars" onClick={() => setTogle(!toggle)}></i>
        </div>
      </div>
      {/* Toggle */}
      {toggle ? (
        <div className="md:hidden flex hover:cursor-pointer shadow-md">
          <div className="flex flex-col p-8 pt-3 pb-2">
            <div className="flex flex-col mb-1 after:content-[''] after:block after:bg-blood after:w-0 after:h-0.5 after:transistion-all after:duration-300 hover:after:w-full">
              <Link to="/">ABOUT</Link>
            </div>
            <div className="flex flex-col mb-1 after:content-[''] after:block after:bg-blood after:w-0 after:h-0.5 after:transistion-all after:duration-300 hover:after:w-full">
              <Link to="/contact">CONTACT</Link>
            </div>
            <div className="flex flex-col after:content-[''] after:block after:bg-blood after:w-0 after:h-0.5 after:transistion-all after:duration-300 hover:after:w-full">
              <DownloadResume />
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
}
