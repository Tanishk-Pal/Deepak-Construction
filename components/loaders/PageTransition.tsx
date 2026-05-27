"use client";

import { AnimatePresence, motion } from "framer-motion";
import { usePathname } from "next/navigation";

export default function PageTransition({
    children,
}: {
    children: React.ReactNode;
}) {

    const pathname = usePathname();

    return (

        <AnimatePresence mode="wait">

            <motion.div
                key={pathname}
                initial={{
                    opacity: 0,
                    y: 30,
                    filter: "blur(10px)",
                }}
                animate={{
                    opacity: 1,
                    y: 0,
                    filter: "blur(0px)",
                }}
                exit={{
                    opacity: 0,
                    y: -30,
                    filter: "blur(10px)",
                }}
                transition={{
                    duration: 0.8,
                    ease: [0.16, 1, 0.3, 1],
                }} >

                {children}

            </motion.div>

        </AnimatePresence>
    );
}