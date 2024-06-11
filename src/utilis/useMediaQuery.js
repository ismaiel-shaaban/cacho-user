"use client"
import { useCallback, useEffect, useState } from "react";

const useMediaQuery = (width) => {
    const [targetReached, setTargetReached] = useState(false);

    const updateTarget = useCallback((e) => {
        if (e.matches) {
            setTargetReached(true);
        } else {
            setTargetReached(false);
        }
    }, []);

    useEffect(() => {
        const media = window.matchMedia(`(max-width: ${width}px)`);
        if (media.addEventListener) {
            media.addEventListener("change", updateTarget);
        } else {
            // compatibility for browsers that don't have addEventListener
            media.addListener(updateTarget);
        }
        // Check on mount (callback is not called until a change occurs)
        if (media.matches) {
            setTargetReached(true);
        }
        if (media.removeEventListener) {
            return () => media.removeEventListener("change", updateTarget);
        } else {
            // compatibility for browsers that don't have removeEventListener
            return () => media.removeListener(updateTarget);
        }
    }, [updateTarget, width]);

    return targetReached;
};

export default useMediaQuery;