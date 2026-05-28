"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import ConstructionLoader from "./ConstructionLoader";

export default function LoaderProvider({
    children,
}: {
    children: React.ReactNode;
}) {
    const pathname = usePathname();
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setLoading(true);

        const timer = setTimeout(() => {
            setLoading(false);
        }, 2100);

        return () => clearTimeout(timer);
    }, [pathname]);

    return (
        <>
            {loading && <ConstructionLoader />}

            <div
                className={`
          transition-all
          duration-700
          ease-out
          ${loading
                        ? "opacity-0 translate-y-6 scale-[0.98] blur-sm"
                        : "opacity-100 translate-y-0 scale-100 blur-0"
                    }
        `}
            >
                {children}
            </div>
        </>
    );
}