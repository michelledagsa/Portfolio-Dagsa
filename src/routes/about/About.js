import { Footer } from "../../components/index.js";
import Stack from "./Stack.js";
import Education from "./Education.js";
import DownloadResume from "./DownloadResume.js";
import AboutMe from "./AboutMe.js";
import ScrollButton from "../../helpers/ScrollToTop.js";
import { useEffect } from "react";
import "./About.sass";

const About = () => {
  useEffect(() => {
    document.title = "About | Michelle Dagsa";
    window.scrollTo(0, 0);
  })
  return (
    <main className="about">
      <AboutMe />
      <Stack />
      <DownloadResume />
      <Education />
      <ScrollButton />
      <Footer />
    </main>
  );
};

export default About;
