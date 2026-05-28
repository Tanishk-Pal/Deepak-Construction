"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";
import MagneticButton from "@/components/animations/MagneticButton";

const stats = [
  { value: "50+", label: "Projects Completed" },
  { value: "10+", label: "Years Experience" },
  { value: "24/7", label: "Client Support" },
];

export default function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-[#0b0b0b] text-white">
      <Image
        src="/img.png"
        alt="Deepak Construction Background"
        fill
        priority
        quality={75}
        sizes="100vw"
        className="object-cover brightness-[0.32]"
      />

      <div className="absolute inset-0 bg-[#0b0b0b]/70" />
      <div className="absolute top-[-20%] right-[-10%] w-[300px] sm:w-[500px] h-[300px] sm:h-[500px] bg-[#d89b1d]/10 blur-[80px] rounded-full" />

      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 min-h-screen flex items-center pt-28 pb-16">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center w-full">
          <motion.div
            initial={{ opacity: 0, y: 35 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <div className="flex items-center gap-3 sm:gap-4 mb-6 sm:mb-8">
              <div className="w-10 sm:w-14 h-[2px] bg-[#d89b1d]" />
              <p className="uppercase tracking-[3px] sm:tracking-[5px] text-[#d89b1d] text-[10px] sm:text-sm font-semibold">
                Infrastructure • Pipeline • Construction
              </p>
            </div>

            <h1 className="leading-[1.02] tracking-[-2px] sm:tracking-[-3px]">
              <span className="block text-[44px] sm:text-[58px] md:text-[72px] xl:text-[88px] font-black text-white">
                Deepak
              </span>
              <span className="block text-[44px] sm:text-[58px] md:text-[72px] xl:text-[88px] font-black text-[#d89b1d]">
                Construction
              </span>
            </h1>

            <p className="mt-6 sm:mt-8 text-[#e5e5e5] text-base sm:text-lg md:text-xl leading-8 sm:leading-9 max-w-3xl">
              Professional infrastructure development, industrial pipeline
              systems, excavation and civil construction engineered with modern
              technology, durable execution and experienced manpower.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 sm:gap-5 mt-8 sm:mt-10">
              <Link href="#projects" className="w-full sm:w-auto">
                <MagneticButton className="w-full sm:w-auto bg-[#d89b1d] text-black px-8 sm:px-9 py-4 rounded-full font-black transition-all duration-300 shadow-[0_0_40px_rgba(216,155,29,0.35)]">
                  View Projects
                </MagneticButton>
              </Link>

              <Link href="#contact" className="w-full sm:w-auto">
                <MagneticButton className="w-full sm:w-auto border border-white/10 bg-white/[0.05] backdrop-blur-md text-white px-8 sm:px-9 py-4 rounded-full font-semibold hover:border-[#d89b1d] hover:text-[#d89b1d] transition-all duration-300">
                  Contact Us
                </MagneticButton>
              </Link>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-5 mt-10 sm:mt-14 max-w-4xl">
              {stats.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 25 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 + i * 0.12, duration: 0.5 }}
                  whileHover={{ y: -6, scale: 1.02 }}
                  className="relative overflow-hidden border border-white/10 bg-white/[0.06] backdrop-blur-xl rounded-[24px] sm:rounded-[30px] p-5 sm:p-6 min-h-[130px] sm:min-h-[160px] transition-all duration-500 hover:border-[#d89b1d]/40"
                >
                  <h3 className="text-4xl sm:text-5xl font-black text-[#d89b1d]">
                    {item.value}
                  </h3>
                  <p className="text-gray-300 mt-3 uppercase tracking-[2px] sm:tracking-[3px] text-[10px] sm:text-xs leading-5">
                    {item.label}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 45 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="hidden lg:flex justify-end relative"
          >
            <div className="relative w-[500px] xl:w-[540px] h-[620px] xl:h-[680px] rounded-[38px] overflow-hidden border border-white/10 bg-white/[0.03] shadow-[0_25px_80px_rgba(0,0,0,0.35)]">
              <Image
                src="/img.png"
                alt="Deepak Construction"
                fill
                priority
                quality={80}
                sizes="540px"
                className="object-cover"
              />
            </div>
          </motion.div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-24 sm:h-32 bg-gradient-to-t from-[#f5f3ee]/10 to-transparent" />
    </section>
  );
}