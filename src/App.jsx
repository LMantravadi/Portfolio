import styles from "./App.module.css";
import { About } from "./components/About/About";
import BackToTop from "./components/BackToTop/BackToTop";
import { ContactMe } from "./components/Contact/ContactMe";
import { Experience } from "./components/Experience/Experience";
import { Hero } from "./components/Hero/Hero";
import { NavBar } from "./components/NavBar/NavBar";
import { Projects } from "./components/Projects/projects";
import { Skills } from "./components/Skills/Skills";

function App() {
  return (
    <div className={styles.App}>
      <NavBar />
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Projects />
      <ContactMe />
      <BackToTop />
    </div>
  );
}

export default App;
