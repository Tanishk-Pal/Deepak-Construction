"use client";

import { motion } from "framer-motion";
import { button } from "framer-motion/m";
import Link from "next/link";
import FloatingCard from "@/components/animations/FloatingCard";
import FadeUp from "@/components/animations/FadeUp";
import SmoothScrolls from "@/components/animations/SmoothScrolls";
import MagneticButton from "@/components/animations/MagneticButton";

export default function Hero() {
  return (

    <section className="relative min-h-screen overflow-hidden bg-[#f5f3ee] text-black">

      {/* BACKGROUND IMAGE */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: "url('/img.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          filter: "brightness(0.35)",
        }} />

      {/* OVERLAY */}
      <div className="absolute inset-0 bg-[#0b0b0b]/65" />

      {/* GOLD GLOW */}
      <div className="absolute top-[-20%] right-[-10%] w-[700px] h-[700px] bg-[#d89b1d]/10 blur-[150px] rounded-full" />

      {/* GRID */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.08) 1px, transparent 1px)",
          backgroundSize: "45px 45px",
        }}
      />

      {/* CONTENT */}
      <div className="relative z-20 max-w-7xl mx-auto px-6 lg:px-12 min-h-screen flex items-center">
        <div className="grid lg:grid-cols-2 gap-20 items-center w-full">

          {/* LEFT */}
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >

            {/* LABEL */}
            <div className="flex items-center gap-4 mb-10">

              <div className="w-16 h-[2px] bg-[#d89b1d]" />

              <p className="uppercase tracking-[6px] text-[#d89b1d] text-xs md:text-sm font-semibold">
                Infrastructure • Pipeline • Construction
              </p>
            </div>

            {/* HEADING */}
            <FadeUp>

              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 1 }}
                className="leading-[1.05] md:leading-[0.95] tracking-[-4px]"
              >

                <span className="block text-[42px] md:text-[72px] xl:text-[88px] font-black text-white drop-shadow-2xl">
                  Deepak
                </span>

                <span className="block text-[42px] md:text-[72px] xl:text-[88px] font-black text-[#d89b1d] drop-shadow-[0_0_35px_rgba(216,155,29,0.3)]">
                  Construction
                </span></motion.h1>
            </FadeUp>


            {/* DESCRIPTION */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 1 }}
              className="mt-10 text-[#d7d7d7] text-lg md:text-xl leading-10 max-w-4xl"
            >

              Professional infrastructure development, industrial pipeline
              systems, excavation and civil construction engineered with
              modern technology, durable execution and experienced manpower.

            </motion.p>

            {/* BUTTONS */}
            <motion.div initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="flex flex-wrap gap-5 mt-14"
            >

              <Link href="#projects">

                <MagneticButton
                  className="
  bg-[#d89b1d]
  text-black
  px-10
  py-5
  rounded-full
  font-black
  hover:scale-105
  transition-all
  duration-300
  shadow-[0_0_60px_rgba(216,155,29,0.35)]
  "
                >
                  View Projects
                </MagneticButton>
              </Link>

              <Link href="#contact">
                <MagneticButton
                  className="
  border border-white/10
  bg-white/[0.04]
  backdrop-blur-md
  text-white
  px-10
  py-5
  rounded-full
  font-semibold
  hover:border-[#d89b1d]
  hover:text-[#d89b1d]
  transition-all
  duration-300
  "
                >
                  Contact Us
                </MagneticButton>
              </Link>

            </motion.div>

            {/* STATS */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8, duration: 1 }}
              className="grid grid-cols-1 md:grid-cols-3 gap-10 mt-24 grid grid-cols-1 mt-24 max-w-5xl ml-[-30px]"
            >

              {[
                {
                  value: "50+",
                  label: "Projects Completed",
                },

                {
                  value: "10+",
                  label: "Years Experience",
                },

                {
                  value: "24/7",
                  label: "Client Support",
                },

              ].map((item, i) => (

                <motion.div
                  key={i}

                  initial={{
                    opacity: 0,
                    y: 80,
                    scale: 0.85,
                    rotateX: 15,
                  }}

                  whileInView={{
                    opacity: 1,
                    y: 0,
                    scale: 1,
                    rotateX: 0,
                  }}

                  transition={{
                    delay: i * 0.2,
                    duration: 1.2,
                    ease: [0.16, 1, 0.3, 1],
                  }}

                  whileHover={{
                    y: -12,
                    scale: 1.04,
                  }}

                  viewport={{ once: true }}

                  className="
      relative
      overflow-hidden
      border border-white/10
      bg-white/[0.06]
      backdrop-blur-xl
      rounded-[38px]
      p-8 md:p-10
      h-[220px] min-w-[280px]
      transition-all
      duration-500
      hover:border-[#d89b1d]/40
      hover:shadow-[0_0_70px_rgba(216,155,29,0.18)]
      shadow-[0_10px_60px_rgba(0,0,0,0.18)]
      group
      "
                >

                  {/* SHINE EFFECT */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-700">

                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full duration-[1800ms]" />

                  </div>

                  {/* GLOW ORB */}
                  <div className="absolute -top-10 -right-10 w-32 h-32 bg-[#d89b1d]/10 blur-3xl rounded-full" />

                  {/* NUMBER */}
                  <motion.h3
                    initial={{ scale: 0.8 }}
                    whileInView={{ scale: 1 }}
                    transition={{
                      delay: 0.3 + i * 0.2,
                      duration: 0.8,
                    }}
                    className="
        text-5xl
        md:text-6xl
        font-black
        text-[#d89b1d]
        drop-shadow-[0_0_25px_rgba(216,155,29,0.35)]
        "
                  >
                    {item.value}
                  </motion.h3>

                  {/* LABEL */}
                  <p className="
      text-gray-300
      mt-5
      uppercase
      tracking-[4px]
      text-xs
      md:text-sm
      leading-6
      font-medium
      ">
                    {item.label}
                  </p>

                </motion.div>

              ))}

            </motion.div>
          </motion.div>

          {/* RIGHT IMAGE */}
          <motion.div
            initial={{ opacity: 0, x: 80 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.2 }}
            className="hidden lg:flex justify-end relative"
          >

            {/* GLOW */}
            <div className="absolute w-[650px] h-[650px] bg-[#d89b1d]/10 blur-[120px] rounded-full" />

            {/* CARD */}
            <div className="relative rounded-[40px] overflow-hidden border border-white/10 bg-white/[0.03] backdrop-blur-md shadow-[0_25px_100px_rgba(0,0,0,0.4)]">

              <div className="absolute inset-0 bg-gradient-to-br from-white/[0.08] via-transparent to-transparent z-20 pointer-events-none" />

              <img
                src="/img.png"
                alt="Construction"
                className="w-[560px] h-[760px] object-cover hover:scale-105 transition duration-[2000ms]"
              />   </div>

          </motion.div>

        </div>

      </div>

      {/* BOTTOM FADE */}
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-[#f5f3ee]/10 to-transparent" />

    </section>
  );
}