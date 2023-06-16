import { motion } from "framer-motion";
import { useState } from "react";
import { useMediaQuery } from "../util/useMediaQuery";

function Nav() {
  const [toggled, setToggled] = useState(false);
  const matches = useMediaQuery("(min-width: 1280px)");

  return (
    <main>
      <nav className="flex items-center justify-between bg-[#0b1120] h-24 pl-5 pr-5 mb-14">
        <div>
          <h1 className="text-white text-sm font-bold">Resume</h1>
          <h2 className="text-white text-lg font-bold ">Antoni Theodorou</h2>
        </div>

        <a href="https://github.com/TheoToni" target="blank">
          <img height={44} width={44} src="./github.png" alt="Image" />
        </a>

        {/* HIDE THE NAV LINKS ON MOBILE WITH HOOK DESKTOP VIEW HERE  */}
        {matches && (
          <div className="flex gap-12">
            <a className="text-white" href="/">
              About me
            </a>
            <a className="text-white" href="/skills">
              Skills
            </a>
            <a className="text-white" href="/education">
              Education
            </a>
          </div>
        )}
        {/* ONLY SHOW THE HAMBURGER MENU ON MOBILE  */}
        {!matches && (
          <div
            onClick={() => setToggled((prevToggle) => !prevToggle)}
            className="space-y-1 cursor-pointer z-50"
          >
            <motion.span
              animate={{ y: toggled ? -10 : 0, width: toggled ? 0 : 32 }}
              className="block h-1 w-8 bg-white"
            ></motion.span>
            <motion.span className="block h-1 w-8 bg-white"></motion.span>
            <motion.span className="block h-1 w-8 bg-white"></motion.span>
          </div>
        )}
        {/* MOBILE VIEW HERE*/}
        {toggled && !matches && (
          <motion.div
            animate={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: -50 }}
            className="fixed  bg-white bottom-0 left-0 w-full h-[85vh] flex gap-12 justify-center items-center"
          >
            <div className="flex flex-col gap-8">
              <a className="text-black text-lg font-bold" href="/">
                About me
              </a>
              <a className="text-black text-lg font-bold" href="/skills">
                Skills
              </a>
              <a className="text-black text-lg font-bold" href="/projects">
                Projects
              </a>
              <a className="text-black text-lg font-bold" href="/education">
                Education
              </a>
            </div>
          </motion.div>
        )}
      </nav>
    </main>
  );
}

export default Nav;
