// components
import { Hero } from "./pages/Hero";
import { Header } from "./components/Header";
import { Nav } from "./components/Nav";
import { About } from "./pages/About";
import { Tools } from "./pages/Tools";
import { Projects } from "./pages/Projects";
import { Contact } from "./pages/Contact";
import { ParticlesBg } from "./components/ParticlesBg";
import "./App.css";
import useTitle from "./hooks/useTitle";

function App() {
  useTitle();
  return (
    <div className="">
      <ParticlesBg />
      <Header />
      <Hero />
      <Nav />
      <About />
      <Tools />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
