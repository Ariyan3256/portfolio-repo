import "./App.css";
import About from "./About";
import Skills from "./Skills";
import Contact from "./Contact";
import Home from "./Home";
import { Routes, Route, Link } from "react-router-dom";

function App() {
  return (
    <div> 
	    <nav>
        <Link to="/home" className="nav-item">HomePage</Link>
        <Link to="/about" className="nav-item">About Me</Link>
        <Link to="/skills" className="nav-item">Skills</Link>
        <Link to="/contact" className="nav-item-contact">CONTACT ME</Link>
	    </nav>
      
        <Routes> 
          <Route path="/home" element={<Home />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/skills" element={<Skills />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
        </Routes>
      
      <div class="pf">
        User Portfolio
        <br></br>
        (Easy implementation by using React.JS)
      </div>
      <div>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <img
          height={300}
          width={425}
          className="img"
          src = {require("./pic.jpg")} alt="happy reading"></img>
          <br></br>
        <h1>Hey</h1>
        <h2>I'm ARIYAN</h2>
        <br></br><br></br><br></br>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;An exploring tech enthusiast having a wide range of interests<br></br> ranging from business, finance, ML and DL, and<br></br> Blockchain Development. To know more about me head to the navigation<br></br> section at the very top of this page.
      </div>
    </div>
  );
};
export default App;