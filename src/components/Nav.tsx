import { motion } from "framer-motion";
import { useState } from "react";
import { useMediaQuery } from "../util/useMediaQuery";

function Nav() {
  const [toggled, setToggled] = useState(false);
  const matches = useMediaQuery("(min-width: 1280px)");

  return (
    <main>
      <nav className="flex items-center justify-between bg-[#0b1120] h-20 pl-5 pr-5 mb-14 xl:pl-10 xl:pr-10">
        <div>
          <h1 className="text-white text-sm ">Resume</h1>
          <h2 className="text-white text-lg  ">Antoni Theodorou</h2>
        </div>

        <a href="https://github.com/TheoToni" target="blank">
          <img height={44} width={44} src="./github.png" alt="Image" />
        </a>

        {/* HIDE THE NAV LINKS ON MOBILE WITH HOOK DESKTOP VIEW HERE  */}
        {matches && (
          <div className="flex gap-12">
            <a className="text-white text-lg" href="/">
              Hello
            </a>
            <a className="text-white text-lg" href="/about">
              About me
            </a>
            <a className="text-white text-lg" href="/projects">
              Projects
            </a>
          </div>
        )}
        {/* ONLY SHOW THE HAMBURGER MENU ON MOBILE  */}
        {!matches && (
          <div
            onClick={() => setToggled((prevToggle) => !prevToggle)}
            className="space-y-1 cursor-pointer"
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
          <div className="fixed  bg-white bottom-0 left-0 w-full h-screen flex gap-12 justify-center  ">
            <div className="flex gap-8 items-stretch mt-44">
              <motion.a
                animate={{ opacity: 1, x: 0 }}
                initial={{ opacity: 0, x: -50 }}
                className="text-black text-lg font-bold"
                href="/"
              >
                Hello
              </motion.a>
              <motion.a
                animate={{ opacity: 1, x: 0 }}
                initial={{ opacity: 0, x: -50 }}
                className="text-black text-lg font-bold"
                href="/about"
              >
                About me
              </motion.a>
              <motion.a
                animate={{ opacity: 1, x: 0 }}
                initial={{ opacity: 0, x: -50 }}
                className="text-black text-lg font-bold"
                href="/projects"
              >
                Projects
              </motion.a>
            </div>
          </div>
        )}
      </nav>
    </main>
  );
}

export default Nav;
