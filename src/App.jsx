import Certificates from "./components/Certificates";
import Contact from "./components/Contact";
import ExperienceSection from "./components/experiences";
import MainSection from "./components/MainSection";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import RocketCursor from "./components/RocketCursor";
import FadeUp from "./components/FadeUp";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    window.history.scrollRestoration = "manual";
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <div>
        <RocketCursor />
        <Navbar />
        <FadeUp>
          <MainSection />
        </FadeUp>
        <FadeUp>
          <Projects />
        </FadeUp>
        <FadeUp>
          <ExperienceSection />
        </FadeUp>
        <FadeUp>
          <Certificates />
        </FadeUp>
        <FadeUp>
          <Contact />
        </FadeUp>
      </div>
    </>
  );
}

export default App;
