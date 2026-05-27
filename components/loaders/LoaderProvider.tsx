"use client";

import { useEffect, useState } from "react";

import ConstructionLoader from "./ConstructionLoader";

export default function LoaderProvider({
    children,
}: {
    children: React.ReactNode;
}) {

    const [loading, setLoading] = useState(true);

    useEffect(() => {

        const timer = setTimeout(() => {
            setLoading(false);
        }, 2600); return () => clearTimeout(timer);

    }, []);

    if (loading) {
        return <ConstructionLoader />;
    }

    return <>{children}</>;
}