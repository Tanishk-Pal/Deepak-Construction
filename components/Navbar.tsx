"use client";

import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-black/70 backdrop-blur-md border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <h1 className="text-2xl font-bold text-yellow-400">
          PIPELINE INFRA
        </h1>

        <div className="hidden md:flex gap-8 text-sm">
          <a href="#services">Services</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </div>
        
         <Link
          href="/login"
          className="bg-yellow-400 text-black px-5 py-2 rounded-full font-semibold hover:scale-105 transition"
        >
          Admin Login
        </Link>
      </div>
    </nav>
  );
}