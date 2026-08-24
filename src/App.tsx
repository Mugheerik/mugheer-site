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
    <div className="min-h-screen bg-paper">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:border focus:border-blueprint focus:bg-paper focus:px-4 focus:py-2 focus:font-mono focus:text-xs focus:uppercase focus:text-blueprint"
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
