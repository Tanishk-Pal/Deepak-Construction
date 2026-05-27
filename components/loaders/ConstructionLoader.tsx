"use client";

import { motion } from "framer-motion";

export default function ConstructionLoader() {

    return (

        <motion.div
            initial={{ opacity: 1 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6 }}
            className="fixed inset-0 z-[9999] bg-[#0b0b0b] flex items-center justify-center overflow-hidden"
        >

            {/* GLOW */}
            <div className="absolute w-[500px] h-[500px] bg-[#d89b1d]/10 blur-[120px] rounded-full" />

            <div className="relative flex flex-col items-center">

                {/* BUILDING */} <div className="relative h-[220px] w-[260px] flex items-end justify-center">

                    {/* BUILDING BLOCKS */}
                    <div className="absolute bottom-0 flex gap-2 items-end">

                        {[0, 1, 2, 3].map((i) => (

                            <motion.div
                                key={i}
                                initial={{ height: 0, opacity: 0 }}
                                animate={{
                                    height: [0, 40 + i * 30],
                                    opacity: 1,
                                }}
                                transition={{
                                    delay: i * 0.3,
                                    duration: 0.8,
                                    ease: "easeOut",
                                }}
                                className="w-12 bg-[#d89b1d] rounded-t-md shadow-[0_0_20px_rgba(216,155,29,0.35)]"
                            />

                        ))}

                    </div>

                    {/* JCB BODY */}
                    <motion.div
                        initial={{ x: -120 }}
                        animate={{ x: 0 }}
                        transition={{ duration: 1.2, ease: "easeOut" }}
                        className="absolute bottom-0 left-0"
                    >

                        {/* JCB */}
                        <div className="relative flex flex-col items-center">

                            {/* ARM */}
                            <motion.div
                                animate={{
                                    rotate: [-10, 20, -10],
                                }}
                                transition={{
                                    repeat: Infinity,
                                    duration: 2,
                                    ease: "easeInOut",
                                }}
                                className="origin-bottom-left absolute bottom-10 left-12"
                            >

                                <div className="w-20 h-3 bg-[#d89b1d] rounded-full" />

                                <div className="absolute right-0 top-0 w-5 h-5 bg-[#d89b1d] rounded-sm" />

                            </motion.div>  {/* BODY */}
                            <div className="w-24 h-12 bg-[#d89b1d] rounded-xl shadow-[0_0_30px_rgba(216,155,29,0.3)]" />

                            {/* WHEELS */}
                            <div className="flex justify-between w-full px-2 mt-1">

                                <motion.div
                                    animate={{ rotate: 360 }}
                                    transition={{
                                        repeat: Infinity,
                                        duration: 2,
                                        ease: "linear",
                                    }}
                                    className="w-6 h-6 rounded-full bg-black border-2 border-gray-700"
                                />

                                <motion.div
                                    animate={{ rotate: 360 }}
                                    transition={{
                                        repeat: Infinity,
                                        duration: 2, ease: "linear",
                                    }}
                                    className="w-6 h-6 rounded-full bg-black border-2 border-gray-700"
                                />

                            </div>

                        </div>

                    </motion.div>

                </div>

                {/* TEXT */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1, duration: 1 }}
                    className="text-center mt-12"
                >  <h1 className="text-4xl md:text-5xl font-black text-white tracking-[-2px]">

                        Deepak
                        <span className="text-[#d89b1d]"> Construction</span>

                    </h1>

                    <p className="text-gray-400 mt-5 tracking-[4px] uppercase text-xs">
                        Building Infrastructure...
                    </p>

                </motion.div>

            </div>

        </motion.div>
    );
}