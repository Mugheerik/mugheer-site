import Nav from "./components/Nav";
import Footer from "./components/Footer";

import Hero from "./sections/Hero";
import About from "./sections/About";
import EngineeringFocus from "./sections/EngineeringFocus";
import Work from "./sections/Work";
import Customer360CaseStudy from "./sections/Customer360CaseStudy";
import Philosophy from "./sections/Philosophy";
import CareerDirection from "./sections/CareerDirection";
import EngineeringLab from "./sections/EngineeringLab";
import Resume from "./sections/Resume";
import Contact from "./sections/Contact";

function App() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-paper">
      <a
        href="#main"
        className="sr-only fixed left-4 top-4 z-[60] border border-blueprint bg-paper px-4 py-2 font-mono text-xs uppercase tracking-wider text-blueprint focus:not-sr-only"
      >
        Skip to content
      </a>

      <Nav />

      <main id="main">
        <Hero />
        <About />
        <EngineeringFocus />
        <Work />
        <Customer360CaseStudy />
        <Philosophy />
        <CareerDirection />
        <EngineeringLab />
        <Resume />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}

export default App;