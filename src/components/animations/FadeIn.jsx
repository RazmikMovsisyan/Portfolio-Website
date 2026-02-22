import React, { useState, useEffect, useRef, useMemo } from "react";
import PropTypes from "prop-types";

const FadeIn = ({
  children,
  delay = 500,
  duration = 800,
  threshold = 0.1,
  className = "",
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const elementRef = useRef(null);

  const animationStyle = useMemo(
    () => ({
      animationDelay: isVisible ? `${delay}ms` : "0ms",
      animationDuration: `${duration}ms`,
      animationFillMode: "both",
    }),
    [isVisible, delay, duration]
  );

  useEffect(() => {
    const currentElement = elementRef.current;
    if (!currentElement) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold, rootMargin: "0px 0px -50px 0px" }
    );

    observer.observe(currentElement);
    return () => observer.unobserve(currentElement);
  }, [threshold]);

  return (
    <div
      ref={elementRef}
      className={`${isVisible ? "animate-fadeIn" : "opacity-0"} ${className}`}
      style={animationStyle}
    >
      {children}
    </div>
  );
};

FadeIn.propTypes = {
  children: PropTypes.node.isRequired,
  delay: PropTypes.number,
  duration: PropTypes.number,
  threshold: PropTypes.number,
  className: PropTypes.string,
};

export default FadeIn;
