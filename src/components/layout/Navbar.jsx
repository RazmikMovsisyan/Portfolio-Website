import React, {
  useState,
  useEffect,
  useRef,
  useCallback,
  useMemo,
} from "react";
import { Code, Menu, X } from "lucide-react";
import { NAV_LINKS, PERSONAL_INFO } from "../../utils/constants";
import { scrollToSection, useScrollSpy } from "../../hooks/useScrollSpy";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [currentSectionTitle, setCurrentSectionTitle] = useState("Home");
  const [isTransitioning, setIsTransitioning] = useState(false);

  const activeSection = useScrollSpy(NAV_LINKS.map((link) => link.id));
  const menuRef = useRef(null);
  const buttonRef = useRef(null);

  const firstName = useMemo(() => PERSONAL_INFO.name.split(" ")[0], []);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Active Section Title Update - gefixt
  useEffect(() => {
    const activeLink = NAV_LINKS.find((link) => link.id === activeSection);

    // Nur wenn sich der activeLink geändert hat und nicht null ist
    if (!activeLink || activeLink.label === currentSectionTitle) {
      return;
    }

    // Verwende requestAnimationFrame für bessere Performance
    const animationFrame = requestAnimationFrame(() => {
      setIsTransitioning(true);

      // Setze den Timeout für die Transition
      const timeoutId = setTimeout(() => {
        setCurrentSectionTitle(activeLink.label);
        setIsTransitioning(false);
      }, 150);

      // Cleanup für den Timeout
      return () => clearTimeout(timeoutId);
    });

    return () => {
      cancelAnimationFrame(animationFrame);
    };
  }, [activeSection, currentSectionTitle]); // Abhängigkeiten korrekt

  const handleClickOutside = useCallback(
    (event) => {
      if (
        isMenuOpen &&
        menuRef.current &&
        buttonRef.current &&
        !menuRef.current.contains(event.target) &&
        !buttonRef.current.contains(event.target)
      ) {
        setIsMenuOpen(false);
      }
    },
    [isMenuOpen]
  );

  const handleEscapeKey = useCallback(
    (event) => {
      if (isMenuOpen && event.key === "Escape") {
        setIsMenuOpen(false);
      }
    },
    [isMenuOpen]
  );

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleEscapeKey);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleEscapeKey);
    };
  }, [handleClickOutside, handleEscapeKey]);

  const handleNavClick = (sectionId) => {
    scrollToSection(sectionId);
    setIsMenuOpen(false);
  };

  const getTitleStyles = () => `
    text-xl font-bold transition-all duration-300 whitespace-nowrap
    ${
      isTransitioning
        ? "opacity-0 transform -translate-y-1"
        : "opacity-100 transform translate-y-0"
    }
    ${
      isScrolled
        ? "text-primary"
        : "bg-gradient-to-r from-primary via-primary/50 to-primary/30 bg-clip-text text-transparent"
    }
  `;

  const getDesktopNavLinkStyles = (linkId) => `
    text-base font-medium transition-all duration-300 relative whitespace-nowrap
    ${
      activeSection === linkId
        ? "text-primary"
        : "text-white/70 hover:text-primary"
    }
    after:content-[''] after:absolute after:bottom-[-4px] after:left-1/2 after:-translate-x-1/2
    after:w-0 after:h-[2px] after:bg-primary after:transition-all after:duration-300
    hover:after:w-full ${activeSection === linkId ? "after:w-full" : ""}
  `;

  const getMobileMenuLinkStyles = (linkId) => `
    w-full px-4 py-3 rounded-lg font-medium transition-all duration-500 text-center
    transform hover:scale-[1.02]
    ${
      activeSection === linkId
        ? "text-primary bg-primary/10 border border-primary/20"
        : "text-white/70 hover:text-primary hover:bg-primary/5 hover:border-primary/10"
    }
  `;

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 w-full py-4 transition-all duration-500 ${
        isScrolled ? "bg-black/30 backdrop-blur-lg" : "bg-transparent"
      }`}
      style={{ transform: "translate3d(0, 0, 0)" }}
    >
      <div className="max-w-[1320px] mx-auto px-5">
        <div className="flex items-center justify-between">
          {/* Logo Section */}
          <div className="flex items-center gap-2 flex-shrink-0 overflow-visible">
            <Code
              className={`w-6 h-6 text-primary transition-all duration-500 flex-shrink-0 ${
                isScrolled ? "scale-110" : "scale-100"
              }`}
            />

            {/* Desktop Logo */}
            <button
              onClick={() => handleNavClick("home")}
              className="hidden md:block text-2xl font-bold hover:opacity-60 transition-all duration-300 hover:scale-105 overflow-visible"
              aria-label="home"
            >
              <span className="bg-gradient-to-r from-primary via-primary/50 to-primary/30 bg-clip-text text-transparent whitespace-nowrap">
                {firstName}
              </span>
            </button>

            {/* Mobile Title */}
            <button
              onClick={() => handleNavClick("home")}
              className="md:hidden relative overflow-visible"
              aria-label="home"
            >
              <div className="relative h-7 flex items-center overflow-visible">
                <span className={getTitleStyles()}>
                  {isScrolled ? currentSectionTitle : firstName}
                </span>
              </div>
            </button>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center justify-center gap-7 mx-4">
            {NAV_LINKS.map((link) => (
              <button
                key={link.id}
                onClick={() => handleNavClick(link.id)}
                className={getDesktopNavLinkStyles(link.id)}
              >
                {link.label}
              </button>
            ))}
          </nav>

          {/* Desktop Hire Button */}
          <div className="hidden md:flex items-center gap-2 flex-shrink-0">
            <button
              onClick={() => handleNavClick("contact")}
              className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-primary/50 to-primary/10 border border-primary/30 rounded-lg hover:bg-primary/30 hover:border-primary/40 hover:scale-105 transition-all duration-300 group whitespace-nowrap"
            >
              <span className="text-white font-medium">Hire Me</span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            ref={buttonRef}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 text-primary hover:text-primary/80 transition-all duration-300 hover:scale-110 flex-shrink-0"
            aria-label="Toggle menu"
            aria-expanded={isMenuOpen}
          >
            <div className="relative w-6 h-6">
              <Menu
                className={`absolute w-6 h-6 transition-all duration-300 ${
                  isMenuOpen
                    ? "opacity-0 rotate-90 scale-0"
                    : "opacity-100 rotate-0 scale-100"
                }`}
              />
              <X
                className={`absolute w-6 h-6 transition-all duration-300 ${
                  isMenuOpen
                    ? "opacity-100 rotate-0 scale-100"
                    : "opacity-0 -rotate-90 scale-0"
                }`}
              />
            </div>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        ref={menuRef}
        className={`md:hidden transition-all duration-500 ease-in-out ${
          isMenuOpen
            ? "max-h-96 opacity-100 visible"
            : "max-h-0 opacity-0 invisible"
        }`}
      >
        <div className="bg-black/95 backdrop-blur-lg border-t border-primary/20 py-8">
          <div className="max-w-[1320px] mx-auto px-5">
            <div className="flex flex-col items-stretch space-y-4">
              {NAV_LINKS.map((link, index) => (
                <button
                  key={link.id}
                  onClick={() => handleNavClick(link.id)}
                  className={getMobileMenuLinkStyles(link.id)}
                  style={{
                    transitionDelay: isMenuOpen ? `${index * 50}ms` : "0ms",
                    opacity: isMenuOpen ? 1 : 0,
                    transform: isMenuOpen
                      ? "translateY(0)"
                      : "translateY(20px)",
                  }}
                >
                  {link.label}
                </button>
              ))}

              <button
                onClick={() => handleNavClick("contact")}
                className="w-full px-4 py-3.5 bg-gradient-to-r from-primary/50 to-primary/20 border border-primary/30 rounded-lg hover:bg-primary/20 hover:scale-[1.02] transition-all duration-300 group mt-2 text-center"
                style={{
                  transitionDelay: isMenuOpen
                    ? `${NAV_LINKS.length * 50}ms`
                    : "0ms",
                  opacity: isMenuOpen ? 1 : 0,
                  transform: isMenuOpen ? "translateY(0)" : "translateY(20px)",
                }}
              >
                <span className="text-white font-medium">Hire Me</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
