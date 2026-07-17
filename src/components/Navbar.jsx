import { useState } from "react";
import "./Navbar.css";

export default function Navbar(){

  const [open, setOpen] = useState(false);

  return(

    <nav className="navbar">


      <div className="logo">
        Nunemunthala Rachana<span>.</span>
      </div>


      <button 
        className="menu-btn"
        onClick={() => setOpen(!open)}
      >
        ☰
      </button>



      <div className={`nav-links ${open ? "active" : ""}`}>


        <a href="#home" onClick={()=>setOpen(false)}>
          Home
        </a>


        <a href="#mitre" onClick={()=>setOpen(false)}>
          MITRE
        </a>


        <a href="#about" onClick={()=>setOpen(false)}>
          About
        </a>


        <a href="#skills" onClick={()=>setOpen(false)}>
          Skills
        </a>


        <a href="#projects" onClick={()=>setOpen(false)}>
          Projects
        </a>


        <a href="#contact" onClick={()=>setOpen(false)}>
          Contact
        </a>


      </div>


    </nav>

  );

}