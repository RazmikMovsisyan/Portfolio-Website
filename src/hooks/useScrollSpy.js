import { useEffect, useState, useCallback, useRef } from "react";

// ========== KONFIGURATION ==========
const DEBOUNCE_DELAY = 50;
const DEFAULT_OFFSET = 100;
const VISIBILITY_THRESHOLD = 0.3;

const getVisibleHeight = (element) => {
    const rect = element.getBoundingClientRect();
    const viewportHeight = window.innerHeight;
    return Math.min(rect.bottom, viewportHeight) - Math.max(rect.top, 0);
};

export const useScrollSpy = (sectionIds, offset = DEFAULT_OFFSET) => {
    const [activeSection, setActiveSection] = useState('');
    const timeoutRef = useRef(null);
    const sectionsRef = useRef([]);

    useEffect(() => {
        sectionsRef.current = sectionIds
            .map(id => document.getElementById(id))
            .filter(Boolean);
    }, [sectionIds]);

    const findActiveSection = useCallback(() => {
        let currentSection = '';
        let maxVisible = 0;
        const viewportHeight = window.innerHeight;

        sectionsRef.current.forEach(section => {
            if (!section) return;
            
            const rect = section.getBoundingClientRect();

            const visibleHeight = Math.min(rect.bottom - offset, viewportHeight) - Math.max(rect.top - offset, 0);
            
            if (visibleHeight > viewportHeight * VISIBILITY_THRESHOLD && visibleHeight > maxVisible) {
                maxVisible = visibleHeight;
                currentSection = section.id;
            }
        });

        return currentSection;
    }, [offset]);

    const handleScroll = useCallback(() => {
        const currentSection = findActiveSection();
        if (currentSection && currentSection !== activeSection) {
            setActiveSection(currentSection);
        }
    }, [activeSection, findActiveSection]);

    const debouncedHandleScroll = useCallback(() => {
        if (timeoutRef.current) {
            clearTimeout(timeoutRef.current);
        }
        timeoutRef.current = setTimeout(handleScroll, DEBOUNCE_DELAY);
    }, [handleScroll]);

    useEffect(() => {
        const initialCheck = () => {
            handleScroll();
        };
        
        const animationFrame = requestAnimationFrame(initialCheck);

        window.addEventListener('scroll', debouncedHandleScroll, { passive: true });

        return () => {
            window.removeEventListener('scroll', debouncedHandleScroll);
            if (timeoutRef.current) {
                clearTimeout(timeoutRef.current);
            }
            cancelAnimationFrame(animationFrame);
        };
    }, [debouncedHandleScroll, handleScroll]);

    return activeSection;
};

// ========== SCROLL FUNCTION ==========
export const scrollToSection = (sectionId, offset = DEFAULT_OFFSET) => {
    const section = document.getElementById(sectionId);
    if (!section) return;

    const top = section.offsetTop - offset;
    
    window.scrollTo({ 
        top, 
        behavior: 'smooth' 
    });
};