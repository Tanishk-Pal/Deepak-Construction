"use client";

import { useRef } from "react";

export default function MagneticButton({
    children,
    className = "",
}: {
    children: React.ReactNode;
    className?: string;
}) {

    const ref = useRef<HTMLDivElement>(null);

    const handleMouseMove = (
        e: React.MouseEvent<HTMLDivElement>
    ) => {

        const rect = ref.current?.getBoundingClientRect();

        if (!rect || !ref.current) return;

        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        const moveX = (x - rect.width / 2) / 40;
        const moveY = (y - rect.height / 2) / 40;

        ref.current.style.transform =
            `translate(${moveX}px, ${moveY}px)`;
    };

    const reset = () => {
        if (!ref.current) return;

        ref.current.style.transform =
            "translate(0px,0px)";
    };

    return (

        <div
            ref={ref}
            onMouseMove={handleMouseMove}
            onMouseLeave={reset}
            className="transition-transform duration-300 ease-out"
        >
            {children}
        </div>
    );
}