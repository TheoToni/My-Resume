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
      </nav>
    </main>
  );
}

export default Nav;
