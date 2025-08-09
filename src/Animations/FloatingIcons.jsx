import React, { useEffect, useState } from "react";
import { FaWhatsapp, FaChevronUp } from "react-icons/fa";
import "./FloatingIcons.css";

const FloatingIcons = () => {
  const [showButton, setShowButton] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    const handleScroll = () => {
      if (!isMobile && window.scrollY > 100) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    };

    // Initial setup
    handleResize();
    window.addEventListener("resize", handleResize);
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isMobile]);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      {/* WhatsApp Icon - Bottom Left */}
      <a
        href="https://wa.me/919095422237"
        className="floating-icon whatsapp-float"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
      >
        <FaWhatsapp size={28} />
      </a>

      {/* Back to Top Icon - Bottom Right (Desktop Only) */}
      {showButton && !isMobile && (
        <button
          className="floating-icon back-to-top"
          onClick={scrollToTop}
          aria-label="Back to Top"
        >
          <FaChevronUp size={28} />
        </button>
      )}
    </>
  );
};

export default FloatingIcons;
