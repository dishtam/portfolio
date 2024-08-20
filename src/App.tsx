import Nav from "./sections/Nav";
import Hero from "./sections/Hero";
import Intro from "./sections/Intro";
import Project from "./sections/Project";
import Coding from "./sections/Coding";

function App() {
  return <div className="m-0 p-0 box-border">
    <Nav/>
    <Intro/>
    <Hero/>
    <Coding/>
    <Project/>
  </div>;
}

export default App
