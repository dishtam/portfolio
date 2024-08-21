import Footer from "./sections/Footer";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Nav from "./sections/Nav";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
 
function App() {
  return (
    <div className="m-0 p-0 box-border">
      <Router>
        <Nav />
        <Routes>
          <Route path="/" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App
