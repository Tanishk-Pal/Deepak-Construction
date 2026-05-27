"use client";

import { useEffect } from "react";
import Lenis from "lenis";

export default function SmoothScroll() {

    useEffect(() => {

        const lenis = new Lenis({
            smoothWheel: true,

            lerp: 0.045,

            wheelMultiplier: 0.9,

            touchMultiplier: 1.5,

            infinite: false,

            syncTouch: true,
        });

        function raf(time: number) {
            lenis.raf(time * 0.9);
            requestAnimationFrame(raf);
        }

        return () => {
            lenis.destroy();
        };

    }, []);

    return null;
}