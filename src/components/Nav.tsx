import { motion } from "framer-motion";
import { useState } from "react";
import { useMediaQuery } from "../util/useMediaQuery";

function Nav() {
  const [toggled, setToggled] = useState(false);
  const matches = useMediaQuery("(min-width: 1280px)");
  return (
    <main>
      <nav className=" flex items-center justify-between bg-slate-950 h-24 pl-5 pr-5 mb-14">
        <div>
          <h1 className="text-white text-sm font-bold">Resume</h1>
          <h2 className="text-white text-lg font-bold">Antoni Theodorou</h2>
        </div>

        {/* HIDE THE NAV LINKS ON MOBILE WITH HOOK  */}
        {matches && (
          <div className="flex gap-12">
            <a className="text-black" href="/">
              About me
            </a>
            <a className="text-black" href="/skills">
              Skills
            </a>
            <a className="text-black" href="/education">
              Education
            </a>
          </div>
        )}
        {/* ONLY SHOW THE HAMBURGER MENU ON MOBILE  */}
        {!matches && (
          <div
            onClick={() => setToggled((prevToggle) => !prevToggle)}
            className="space-y-1 cursor-pointer"
          >
            <span className="block h-1 w-8 bg-white"></span>
            <span className="block h-1 w-8 bg-white"></span>
            <span className="block h-1 w-8 bg-white"></span>
          </div>
        )}

        {toggled && (
          <div className="fixed  bg-white bottom-0 left-0 w-full h-screen flex gap-12 justify-center items-center">
            <div className="flex flex-col gap-8">
              <a className="text-black" href="/">
                About me
              </a>
              <a className="text-black" href="/skills">
                Skills
              </a>
              <a className="text-black" href="/projects">
                Projects
              </a>
              <a className="text-black" href="/education">
                Education
              </a>
            </div>
          </div>
        )}
      </nav>
    </main>
  );
}

export default Nav;
