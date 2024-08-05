import React from 'react';
import "./navbar.css";

const Navbar = ({ setCategories, categories }) => {
  const togglebtn = () => {
    const navbar = document.getElementById("navLinks");
    navbar.classList.toggle("hidemenu");
  };
  return (
    <div className="navContainer">
      <div className="navLogo">
        <h1>Newszo</h1>
      </div>
      <ul className="nav" id="navLinks">
        <li onClick={() => setCategories("general")} className={categories === "general" ? "active" : ""}>Home</li>
        <li onClick={() => setCategories("technology")} className={categories === "technology" ? "active" : ""}>Technology</li>
        <li onClick={() => setCategories("entertainment")} className={categories === "entertainment" ? "active" : ""}>Entertainment</li>
        <li onClick={() => setCategories("science")} className={categories === "science" ? "active" : ""}>Science</li>
        <li onClick={() => setCategories("sports")} className={categories === "sports" ? "active" : ""}>Sports</li>
        <li onClick={() => setCategories("business")} className={categories === "business" ? "active" : ""}>Business</li>
      </ul>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={24} height={24} color={"#000000"} fill={"none"} className="bars" onClick={togglebtn}>
        <path d="M4 5L20 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M4 12L20 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M4 19L20 19" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </div>
  );
}

export default Navbar;
