import React from "react";
import About from "./About";
import Banner from "./Banner";
import Contact from "./Contact";
import Projects from "./Projects";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <Projects></Projects>
      <About></About>
      <Contact></Contact>
    </div>
  );
};

export default Home;
