import "./navbar.css";
import React, { useState } from "react";
const Navbar = () => {
  const [navbar, setNavbar] = useState(false);
  const ChangeBg = () => {
    if (window.scrollY >= 100) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };
  window.addEventListener("scroll", ChangeBg);
  return (
    <>
      <nav
        className={
          navbar
            ? "navbar navbar-expand fixed-top active"
            : "navbar navbar-expand fixed-top"
        }
      >
        <a href="#" className="Navbar-brand">
          <span>N</span>ew <span>H</span>orizon
        </a>
        <div>
          <ul className="navbar-nav">
            <li className="nav-item">
              <a href="#" className="nav-link">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a href="#" className="nav-link">
                About us
              </a>
            </li>
            <li className="nav-item">
              <a href="#" className="nav-link">
                Courses
              </a>
            </li>
            <li className="nav-item">
              <a href="#" className="nav-link">
                Contact us
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};
export default Navbar;
