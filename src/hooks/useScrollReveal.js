import { useEffect, useState, useRef, useCallback } from "react";

export const useScrollReveal = ({ threshold = 0.1, rootMargin = '0px' } = {}) => {
    const [isVisible, setIsVisible] = useState(false);
    const elementRef = useRef(null);
    const observerRef = useRef(null);

    const handleIntersect = useCallback(([entry]) => {
        if (entry.isIntersecting) {
            setIsVisible(true);

            // Unobserve after becoming visible
            if (elementRef.current && observerRef.current) {
                observerRef.current.unobserve(elementRef.current);
            }
        }
    }, []);

    useEffect(() => {
        const element = elementRef.current;
        if (!element) return;

        // Cleanup previous observer if exists
        if (observerRef.current) {
            observerRef.current.disconnect();
        }

        // Create new observer - gefixt: jetzt korrekt
        const observer = new IntersectionObserver(handleIntersect, {
            threshold,
            rootMargin,
        });
        
        observer.observe(element);
        observerRef.current = observer;

        return () => {
            if (observerRef.current) {
                observerRef.current.disconnect();
                observerRef.current = null;
            }
        };
    }, [threshold, rootMargin, handleIntersect]);

    return { ref: elementRef, isVisible };
};