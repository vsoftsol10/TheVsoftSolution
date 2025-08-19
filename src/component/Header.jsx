import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import "./Header.css";
import logo from "../assets/vsFinallogo.avif";
import StepUp from "../assets/StepUp-final.avif";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const navRef = useRef(null);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
    setActiveDropdown(null);
  };

  const toggleDropdown = (index) => {
    setActiveDropdown(activeDropdown === index ? null : index);
  };

  // Handle dropdown link click - close menu and dropdown
  const handleDropdownLinkClick = () => {
    setMenuOpen(false);
    setActiveDropdown(null);
  };

  // Close menu when clicking outside
  useEffect(() => {
    function handleClickOutside(event) {
      if (
        navRef.current &&
        !navRef.current.contains(event.target) &&
        !event.target.classList.contains('hamburger') &&
        !event.target.parentElement?.classList.contains('hamburger')
      ) {
        setMenuOpen(false);
        setActiveDropdown(null);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // Service options for dropdown
  const serviceOptions = [
    {
      name: "Our Services",
      dropdown: [
        { name: "Website Development", path: "/services/website-development" },
        { name: "App Development", path: "/services/app-development" },
        { name: "WordPress Development", path: "/services/wordpress-development" },
        { name: "Digital Marketing", path: "/services/digital-marketing" },
        { name: "UI/UX Designing", path: "/services/ui-ux-design" }
      ]
    }
  ];

  return (
    <header className="header">
      <div className="header-container">
        <div className="logo-container">
          <a href="/home">
            <img src={logo} alt="VSoft Solutions" className="logo-image" />
          </a>
        </div>

        {/* Mobile Overlay */}
        {menuOpen && <div className="mobile-overlay" onClick={closeMenu}></div>}

        <div className={`nav-wrapper ${menuOpen ? "menu-open" : ""}`}>
          {/* Close button visible only on mobile */}
          <button
            className="close-menu-btn"
            onClick={closeMenu}
            aria-label="Close menu"
          >
            <span className="close-icon" style={{ fontSize: "30px" }}>×</span>
          </button>

          <nav ref={navRef} className="navigation">
            <ul className="nav-menu">
              <li className="nav-item">
                <a href="/home" className="nav-link" onClick={closeMenu}>
                  <b>Home</b>
                </a>
              </li>
              <li className="nav-item">
                <a href="/about" className="nav-link" onClick={closeMenu}>
                  <b>About us</b>
                </a>
              </li>
              {/* <li className="nav-item">
                  <a href="/product" className="nav-link" onClick={closeMenu}>
                    <b>Products</b>
                  </a>
                </li> */}
              <li className="nav-item dropdown-parent">
                <button
                  className="nav-link dropdown-toggle"
                  onClick={() => toggleDropdown(0)}
                  aria-expanded={activeDropdown === 0}
                >
                  <b>Our Services <span className="dropdown-arrow">▼</span></b>
                </button>
                <ul className={`dropdown-menu ${activeDropdown === 0 ? "show" : ""}`}>
                  {serviceOptions[0].dropdown.map((item, index) => (
                    <li key={index} className="dropdown-item">
                      <a
                        href={item.path}
                        className="dropdown-link"
                        onClick={handleDropdownLinkClick}
                      >
                        <b>{item.name}</b>
                      </a>
                    </li>
                  ))}
                </ul>
              </li>
              <li className="nav-item">
                <a href="/career" className="nav-link" onClick={closeMenu}>
                  <b>Career</b>
                </a>
              </li>
              <li className="nav-item">
                <a href="/culture" className="nav-link" onClick={closeMenu}>
                  <b>Our Culture</b>
                </a>
              </li>
              <li className="nav-item contact-btn-container">
                <a href="/contact" className="contact-btn" onClick={closeMenu}>
                  Contact us
                </a>
              </li>
              <li className="nav-item stepup-btn-container">
                <a href="/stepup" className="stepup-link" onClick={closeMenu}>
                  <div className="stepup-content">
                    <img
                      src={StepUp}
                      alt="StepUp"
                      className="stepup-image"
                    />
                    <span className="stepup-text">Explore our upskilling courses</span>
                  </div>
                </a>
              </li>
            </ul>
          </nav>
        </div>

        <div className="hamburger-container">
          <button
            className={`hamburger-btn dots-btn ${menuOpen ? "active" : ""}`}
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            <span className="dot"></span>
            <span className="dot"></span>
            <span className="dot"></span>
          </button>
        </div>
      </div>
    </header>
  );
}

export default Header;