import Certificates from "./components/Certificates";
import Contact from "./components/Contact";
import ExperienceSection from "./components/experiences";
import MainSection from "./components/MainSection";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";

function App() {
  return (
    <>
      <div>
        <Navbar />
        <MainSection />
        <Projects />
        <ExperienceSection />
        <Certificates />
        <Contact />
      </div>
    </>
  );
}

export default App;
