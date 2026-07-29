import { SkipLink } from "./components/layout/SkipLink";
import { Navbar } from "./components/layout/Navbar";
import { Footer } from "./components/layout/Footer";
import { Hero } from "./components/sections/Hero";
import { Work } from "./components/sections/Work";
import { Experience } from "./components/sections/Experience";
import { Expertise } from "./components/sections/Expertise";
import { Principles } from "./components/sections/Principles";
import { Contact } from "./components/sections/Contact";

function App() {
  return (
    <>
      <SkipLink />
      <Navbar />
      <main>
        <Hero />
        <Work />
        <Experience />
        <Expertise />
        <Principles />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export default App;
