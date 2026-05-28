"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const closeMenu = () => setOpen(false);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-black/80 backdrop-blur-xl border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 py-4 flex items-center justify-between">
        <Link href="/" onClick={closeMenu}>
          <h1 className="text-lg sm:text-2xl font-black text-[#d89b1d] tracking-wide">
            PIPELINE INFRA
          </h1>
        </Link>

        <div className="hidden md:flex gap-8 text-sm text-white">
          <a href="#services" className="hover:text-[#d89b1d] transition">
            Services
          </a>
          <a href="#projects" className="hover:text-[#d89b1d] transition">
            Projects
          </a>
          <a href="#contact" className="hover:text-[#d89b1d] transition">
            Contact
          </a>
        </div>

        <Link
          href="/login"
          className="hidden sm:block bg-[#d89b1d] text-black px-5 py-2 rounded-full font-bold hover:scale-105 transition"
        >
          Admin Login
        </Link>

        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-white border border-white/10 p-2 rounded-xl"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {open && (
        <div className="md:hidden bg-black/95 border-t border-white/10 px-6 py-6 space-y-5 text-white">
          <a onClick={closeMenu} href="#services" className="block">
            Services
          </a>
          <a onClick={closeMenu} href="#projects" className="block">
            Projects
          </a>
          <a onClick={closeMenu} href="#contact" className="block">
            Contact
          </a>

          <Link
            href="/login"
            onClick={closeMenu}
            className="block bg-[#d89b1d] text-black text-center px-5 py-3 rounded-full font-bold"
          >
            Admin Login
          </Link>
        </div>
      )}
    </nav>
  );
}