"use client";

import { useRef } from "react";

export default function MagneticButton({
    children,
    className = "",
}: {
    children: React.ReactNode;
    className?: string;
}) {

    const ref = useRef<HTMLButtonElement>(null);

    const handleMouseMove = (
        e: React.MouseEvent<HTMLButtonElement>
    ) => {

        const rect = ref.current?.getBoundingClientRect();

        if (!rect || !ref.current) return;

        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        const moveX = (x - rect.width / 2) / 8;
        const moveY = (y - rect.height / 2) / 8;

        ref.current.style.transform =
            `translate(${moveX}px, ${moveY}px)`;
    };

    const reset = () => {
        if (!ref.current) return;

        ref.current.style.transform =
            "translate(0px,0px)";
    };

    return (

        <button
            ref={ref}
            onMouseMove={handleMouseMove}
            onMouseLeave={reset}
            className={`transition-transform duration-200 ${className}`}
        >
            {children}
        </button>
    );
}