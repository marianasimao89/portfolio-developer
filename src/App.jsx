import "./App.css";
import Hero from "./components/Hero.jsx";
import Projects from "./components/Projects.jsx";
import Skillset from "./components/Skillset.jsx";
import Education from "./components/Education.jsx";
import About from "./components/About.jsx";
import Contact from "./components/Contact.jsx";
import Footer from "./components/Footer.jsx";

function App() {
  return (
    <main>
      <div className="intro-skillset">
        <Hero />
        <Skillset />
      </div>

      <Projects />
      <Education />
      <About />
      <Contact />
      <Footer />
    </main>
  );
}

export default App;
