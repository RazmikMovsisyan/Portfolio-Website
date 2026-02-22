import React, { useState, useEffect, useRef, useCallback } from "react";
import { ChevronUp } from "lucide-react";

// ========== KONFIGURATION ==========
const SCROLL_THRESHOLD = 300;
const VISIBLE_DURATION = 1000;

// ========== MAIN COMPONENT ==========
const ScrollUpButton = () => {
  const [isVisible, setIsVisible] = useState(false);
  const timeoutRef = useRef(null);

  const clearVisibilityTimeout = useCallback(() => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }
  }, []);

  const handleScroll = useCallback(() => {
    const shouldBeVisible = window.scrollY > SCROLL_THRESHOLD;

    if (shouldBeVisible) {
      setIsVisible(true);
      clearVisibilityTimeout();

      timeoutRef.current = setTimeout(() => {
        setIsVisible(false);
      }, VISIBLE_DURATION);
    } else {
      setIsVisible(false);
      clearVisibilityTimeout();
    }
  }, [clearVisibilityTimeout]);

  // Scroll to top
  const scrollToTop = useCallback(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });

    setIsVisible(false);
    clearVisibilityTimeout();
  }, [clearVisibilityTimeout]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    // Gefixt: Verwende requestAnimationFrame für initialen Check
    const initialCheck = () => {
      handleScroll();
    };

    // Führe initialen Check im nächsten Frame durch
    const animationFrame = requestAnimationFrame(initialCheck);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      clearVisibilityTimeout();
      cancelAnimationFrame(animationFrame);
    };
  }, [handleScroll, clearVisibilityTimeout]);

  const buttonClasses = `
    fixed z-50 bg-black/50 backdrop-blur-md border border-primary/30 rounded-xl 
    hover:bg-primary/20 shadow-lg flex items-center gap-2 transition-all duration-500 ease-out
    
    /* Desktop: rechts unten */
    md:bottom-8 md:right-8 md:px-6 md:py-4 md:left-auto md:translate-x-0
    
    /* Mobile: mittig unten */
    bottom-8 left-1/2 -translate-x-1/2 px-4 py-2.5
    
    ${
      isVisible
        ? "opacity-100 scale-100 translate-y-0 pointer-events-auto"
        : "opacity-0 scale-95 translate-y-8 pointer-events-none"
    }
  `;

  return (
    <button
      onClick={scrollToTop}
      className={buttonClasses}
      aria-label="Scroll to top"
      title="Scroll to top"
    >
      <ChevronUp className="w-6 h-6 text-white" />
      <span className="text-white text-sm font-small whitespace-nowrap">
        Scroll Up
      </span>
    </button>
  );
};

export default ScrollUpButton;
