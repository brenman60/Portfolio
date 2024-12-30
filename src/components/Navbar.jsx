import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import "../styles/navbar.css";

{
  /*
  Checking NavLink active state:
   ={({ isActive }) => isActive ? } 
  */
  /*
 Adding styles: (commas not semicolons!!)
 style={{ display: "flex", }}
 */
}

const Navbar = () => {
  const [navVisible, setNavVisible] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  // Update `isMobile` on screen resize
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const toggleNavLinks = () => {
    setNavVisible(!navVisible);
  };

  const links = [
    { to: "/about", label: "About Me" },
    { to: "/resume", label: "Resume & Certifications" },
    { to: "/awards", label: "Awards & Skills" },
    { to: "/workSamples", label: "Work Samples" },
    { to: "/contact", label: "Contact" },
  ];

  return (
    <>
      <nav id={"headerNav"}>
        <NavLink to="/" className={"navLink"}>
          Brennan Kunicki
        </NavLink>
      </nav>

      <button id={"hamburgerNav"} onClick={toggleNavLinks}>...</button>

      <nav id={"nav"} className={navVisible ? "showLinks" : ""}>
        {links.map((link, index) => (
          <NavLink
            key={link.to}
            to={link.to}
            className={`navLink ${navVisible ? "visible" : ""}`}
            style={
              isMobile
                ? {
                    top: `${index * 54 + 75}px`,
                    position: "fixed",
                    transition: `
                    left ${((index + 1) / 4) * 0.5}s ease-in-out, 
                    opacity ${((index + 1) / 4) * 0.5}s ease-in-out,
                    padding-top ${0.05}s ease-in-out,
                    background-color 0.25s ease-in-out`,
                  }
                : {
                    position: "relative",
                    transition: `
                    left ${((index + 1) / 4) * 0.5}s ease-in-out, 
                    opacity ${((index + 1) / 4) * 0.5}s ease-in-out,
                    padding-top 0.05s ease-in-out,
                    background-color 0.25s ease-in-out`,
                  }
            }
            onClick={toggleNavLinks}
          >
            {link.label}
          </NavLink>
        ))}
      </nav>
    </>
  );
};

export default Navbar;
