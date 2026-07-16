import Navbar from "./components/Navbar";

import Hero from "./sections/Hero";
import About from "./sections/About";
import Metrics from "./sections/Metrics";
import Alerts from "./sections/Alerts";
import MITRE from "./sections/MITRE";
import Projects from "./sections/Projects";
import Contact from "./sections/Contact";
import Footer from "./sections/Footer";
import AIChatbot from "./components/AIChatbot";


function App() {

  return (

    <>

      <Navbar />

      <main>

        <Hero />

        <About />

        <AIChatbot />

        <Metrics />

        <Alerts />

        <MITRE />

        <Projects />

        <Contact />

      </main>


      <Footer />

    </>

  );

}


export default App;