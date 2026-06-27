import { useEffect, useState } from "react"
import About from "./components/about/About"
import Contact from "./components/contact/Contact"
import Experience from "./components/experience/Experience"
import Hero from "./components/hero/Hero"
import IntroLoader from "./components/IntroLoader"
import Navbar from "./components/navbar/Navbar"
import Projects from "./components/projects/Projects"
import Skills from "./components/skills/Skills"
import FeedbackSection from "./components/feedback/FeedbackSection"
import MobileNotice from "./components/MobileNotice"

const App = () => {
      const [loading, setLoading] = useState(true);

      useEffect(() => {
        const timer = setTimeout(() => {
            setLoading(false);
        }, 3000);

        return () => clearTimeout(timer);
    }, []);

  return(
    <>
     <IntroLoader show={loading} />
      
      {!loading && (
        <>
          <MobileNotice />
          <Navbar />
          <Hero />
          <About />
          <Experience />
          <Projects />
          <Skills />
          <FeedbackSection /> 
          <Contact />
        </>
    )}
    </>
  )
} 

export default App