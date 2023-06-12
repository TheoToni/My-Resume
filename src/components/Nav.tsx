import { motion } from "framer-motion";
import { useState } from "react";

function Nav() {
  const [toggled, setToggled] = useState(false);
  return (
    <main>
      <nav className=" flex items-center justify-between h-24 pl-5 pr-5">
        <div>
          <h1 className="text-black text-sm font-bold">Resume</h1>
          <h2 className="text-black text-lg font-bold">Antoni Theodorou</h2>
        </div>

        <div className="space-y-1">
          <span className="block h-1 w-8 bg-black"></span>
          <span className="block h-1 w-8 bg-black"></span>
          <span className="block h-1 w-8 bg-black"></span>
        </div>
      </nav>
    </main>
  );
}

export default Nav;
