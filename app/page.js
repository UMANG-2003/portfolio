import React from "react";
import Home from "./pages/Home";
import Projects from "./components/Projects";
import Mouse from "./components/Mouse";
import About from "./components/About";
import WhyMe from "./components/WhyMe";
import Techstack from "./components/Techstack";
function Page() {
  return (
    <div>
      <Mouse />
      <Home />
      <Projects />
      <About />
      <WhyMe />
      <Techstack />
    </div>
  );
}

export default Page;
