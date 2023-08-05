import React from "react";
import Navbar from "./Navbar";
import Description from "./Description";
import Projects from "./Projects";
import Closing from "./Closing";

import projects from "../utils/projects";

function Home() {
  return (
    <div className="antialiased max-w-2xl mb-40 flex flex-col md:flex-row m-auto mt-8 lg:mx-auto">
      <div className="main flex-auto min-w-0 mt-6 flex flex-col px-2 md:px-0">
        <Navbar />
        <Description />
        <Projects projects={projects} />
        <Closing />
      </div>
    </div>
  );
}

export default Home;
