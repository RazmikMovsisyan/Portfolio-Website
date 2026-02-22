import React from "react";
import { useScrollReveal } from "../../hooks/useScrollReveal";

const animations = {
  fadeUp: {
    hidden: "opacity-0 translate-y-8",
    visible: "opacity-100 translate-y-0",
  },
  fadeIn: { hidden: "opacity-0", visible: "opacity-100" },
  slideLeft: {
    hidden: "opacity-0 -translate-x-12",
    visible: "opacity-100 translate-x-0",
  },
  slideRight: {
    hidden: "opacity-0 translate-x-12",
    visible: "opacity-100 translate-x-0",
  },
  scaleIn: { hidden: "opacity-0 scale-90", visible: "opacity-100 scale-100" },
};

const ScrollReveal = ({
  children,
  animation = "fadeUp",
  delay = 0,
  duration = 700,
  threshold = 0.1,
  className = "",
}) => {
  const { ref, isVisible } = useScrollReveal({ threshold });

  return (
    <div
      ref={ref}
      className={`
        transition-all ease-out duration-700 
        ${className} 
        ${
          isVisible
            ? animations[animation].visible
            : animations[animation].hidden
        }
      `}
      style={{
        transitionDuration: `${duration}ms`,
        transitionDelay: isVisible ? `${delay}ms` : "0ms",
      }}
    >
      {children}
    </div>
  );
};

export default ScrollReveal;
