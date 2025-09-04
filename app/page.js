import React from "react";
import Home from "./pages/Home";
import Projects from "./components/Projects";
import Mouse from "./components/Mouse";
import About from "./components/About";
import WhyMe from "./components/WhyMe";
function Page() {
  return (
    <div>
      <Mouse />
      <Home />
      <Projects />
      <About />
      <WhyMe />
    </div>
  );
}

export default Page;
