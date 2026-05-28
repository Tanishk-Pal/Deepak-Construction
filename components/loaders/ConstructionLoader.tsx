"use client";

import { motion } from "framer-motion";

export default function ConstructionLoader() {
    return (
        <motion.div
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.45 }}
            className="fixed inset-0 z-[9999] bg-[#080808] overflow-hidden flex items-center justify-center"
        >
            <motion.div
                initial={{ x: "-120%" }}
                animate={{ x: ["-120%", "0%", "120%"] }}
                transition={{ duration: 1.15, ease: [0.16, 1, 0.3, 1] }}
                className="absolute inset-y-0 left-0 w-full bg-[#d89b1d]"
            />

            <div className="absolute inset-0 bg-black/75 backdrop-blur-md" />
            <div className="absolute w-[420px] h-[420px] bg-[#d89b1d]/20 blur-[120px] rounded-full" />

            <div className="relative z-20 flex flex-col items-center">
                <div className="relative h-[180px] w-[310px] flex items-end justify-center">
                    <div className="absolute bottom-0 flex gap-2 items-end">
                        {[0, 1, 2, 3, 4].map((i) => (
                            <motion.div
                                key={i}
                                initial={{ height: 0, opacity: 0 }}
                                animate={{ height: 42 + i * 18, opacity: 1 }}
                                transition={{
                                    delay: 0.15 + i * 0.12,
                                    duration: 0.45,
                                    ease: "easeOut",
                                }}
                                className="w-10 bg-[#d89b1d] rounded-t-md shadow-[0_0_25px_rgba(216,155,29,0.35)]"
                            />
                        ))}
                    </div>

                    <motion.div
                        initial={{ x: -240 }}
                        animate={{ x: 215 }}
                        transition={{ duration: 1.45, ease: [0.16, 1, 0.3, 1] }}
                        className="absolute bottom-0 left-0"
                    >
                        <div className="relative">
                            <motion.div
                                animate={{ rotate: [-18, 16, -8] }}
                                transition={{
                                    repeat: Infinity,
                                    duration: 1,
                                    ease: "easeInOut",
                                }}
                                className="origin-bottom-left absolute bottom-10 left-12"
                            >
                                <div className="w-24 h-3 bg-[#d89b1d] rounded-full" />
                                <div className="absolute right-[-8px] top-[-2px] w-6 h-6 bg-[#d89b1d] rounded-sm rotate-12" />
                            </motion.div>

                            <div className="w-28 h-14 bg-[#d89b1d] rounded-xl shadow-[0_0_35px_rgba(216,155,29,0.35)]" />
                            <div className="absolute -top-7 left-8 w-10 h-8 bg-[#f4c150] rounded-t-lg border border-black/20" />

                            <div className="flex justify-between w-28 px-2 mt-1">
                                {[0, 1].map((i) => (
                                    <motion.div
                                        key={i}
                                        animate={{ rotate: 360 }}
                                        transition={{
                                            repeat: Infinity,
                                            duration: 0.8,
                                            ease: "linear",
                                        }}
                                        className="w-7 h-7 rounded-full bg-black border-2 border-gray-700"
                                    />
                                ))}
                            </div>
                        </div>
                    </motion.div>
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 14 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.45, duration: 0.45 }}
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