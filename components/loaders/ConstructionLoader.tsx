"use client";

import { motion } from "framer-motion";

export default function ConstructionLoader() {
    return (
        <motion.div
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="fixed inset-0 z-[9999] bg-[#0b0b0b] overflow-hidden flex items-center justify-center"
        >
            {/* CINEMATIC SCREEN WIPE */}
            <motion.div
                initial={{ x: "-100%" }}
                animate={{ x: ["-100%", "0%", "100%"] }}
                transition={{ duration: 1.6, ease: [0.16, 1, 0.3, 1] }}
                className="absolute inset-y-0 left-0 w-full bg-[#d89b1d]"
            />

            {/* DARK GLASS OVERLAY */}
            <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" />

            {/* GOLD GLOW */}
            <div className="absolute w-[500px] h-[500px] bg-[#d89b1d]/20 blur-[140px] rounded-full" />

            <div className="relative z-20 flex flex-col items-center">

                {/* BUILDING */}
                <div className="relative h-[180px] w-[280px] flex items-end justify-center">
                    <div className="absolute bottom-0 flex gap-2 items-end">
                        {[0, 1, 2, 3, 4].map((i) => (
                            <motion.div
                                key={i}
                                initial={{ height: 0, opacity: 0 }}
                                animate={{ height: 45 + i * 18, opacity: 1 }}
                                transition={{
                                    delay: 0.3 + i * 0.18,
                                    duration: 0.6,
                                    ease: "easeOut",
                                }}
                                className="w-10 bg-[#d89b1d] rounded-t-md shadow-[0_0_25px_rgba(216,155,29,0.35)]"
                            />
                        ))}
                    </div>

                    {/* EXCAVATOR MOVEMENT */}
                    <motion.div
                        initial={{ x: -260 }}
                        animate={{ x: 210 }}
                        transition={{
                            duration: 2,
                            ease: [0.16, 1, 0.3, 1],
                        }}
                        className="absolute bottom-0 left-0"
                    >
                        <div className="relative">
                            {/* ARM */}
                            <motion.div
                                animate={{ rotate: [-18, 18, -8] }}
                                transition={{
                                    repeat: Infinity,
                                    duration: 1.2,
                                    ease: "easeInOut",
                                }}
                                className="origin-bottom-left absolute bottom-10 left-12"
                            >
                                <div className="w-24 h-3 bg-[#d89b1d] rounded-full" />
                                <div className="absolute right-[-8px] top-[-2px] w-6 h-6 bg-[#d89b1d] rounded-sm rotate-12" />
                            </motion.div>

                            {/* BODY */}
                            <div className="w-28 h-14 bg-[#d89b1d] rounded-xl shadow-[0_0_35px_rgba(216,155,29,0.35)]" />

                            {/* CABIN */}
                            <div className="absolute -top-7 left-8 w-10 h-8 bg-[#f4c150] rounded-t-lg border border-black/20" />

                            {/* WHEELS */}
                            <div className="flex justify-between w-28 px-2 mt-1">
                                {[0, 1].map((i) => (
                                    <motion.div
                                        key={i}
                                        animate={{ rotate: 360 }}
                                        transition={{
                                            repeat: Infinity,
                                            duration: 0.9,
                                            ease: "linear",
                                        }}
                                        className="w-7 h-7 rounded-full bg-black border-2 border-gray-700"
                                    />
                                ))}
                            </div>
                        </div>
                    </motion.div>
                </div>

                {/* TEXT */}
                <motion.div
                    initial={{ opacity: 0, y: 18 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.7, duration: 0.7 }}
                    className="text-center mt-10"
                >
                    <h1 className="text-3xl md:text-5xl font-black text-white">
                        Deepak <span className="text-[#d89b1d]">Construction</span>
                    </h1>

                    <p className="text-gray-400 mt-4 tracking-[4px] uppercase text-xs">
                        Building Your Page...
                    </p>
                </motion.div>
            </div>
        </motion.div>
    );
}