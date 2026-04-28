"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Button from "@/components/ui/Button";
import { NAV_ITEMS } from "@/lib/data";

export default function Navbar() {
  const [scrolled,  setScrolled]  = useState(false);
  const [menuOpen,  setMenuOpen]  = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  /* Lock body scroll when mobile menu is open */
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  const navText = scrolled ? "text-slate-700 hover:text-[#1A56DB]" : "text-white/80 hover:text-white";

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 backdrop-blur-xl border-b border-slate-100 shadow-sm"
          : "bg-transparent"
      }`}
    >
      <div className="section-container">
        <div className="flex items-center justify-between h-16">

          {/* ── Logo ─────────────────────────────────── */}
          <Link href="/" className="flex items-center gap-2.5 shrink-0">
            <div className="w-8 h-8 rounded-md bg-gradient-to-br from-[#1A56DB] to-[#0D9488] flex items-center justify-center shadow-sm">
              <span className="text-white font-extrabold text-sm leading-none">A</span>
            </div>
            <span className={`font-bold text-base tracking-tight transition-colors duration-300 ${scrolled ? "text-slate-900" : "text-white"}`}>
              Accredian <span className={`font-normal ${scrolled ? "text-slate-400" : "text-white/60"}`}>Enterprise</span>
            </span>
          </Link>

          {/* ── Desktop Links ────────────────────────── */}
          <nav className="hidden md:flex items-center gap-0.5" aria-label="Primary navigation">
            {NAV_ITEMS.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`px-3.5 py-2 rounded-md text-sm font-medium transition-colors duration-150 ${navText}`}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* ── Desktop CTA ──────────────────────────── */}
          <div className="hidden md:flex items-center gap-2">
            <Button
              variant="ghost"
              size="sm"
              href="/login"
              className={!scrolled ? "text-white hover:bg-white/10 hover:text-white" : ""}
            >
              Log In
            </Button>
            <Button variant={scrolled ? "primary" : "white"} size="sm" href="#contact">
              Get a Demo
            </Button>
          </div>

          {/* ── Mobile Toggle ────────────────────────── */}
          <button
            aria-label="Toggle navigation"
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((v) => !v)}
            className="md:hidden p-2 rounded-md"
          >
            <span className="flex flex-col gap-[5px]">
              {[0,1,2].map((i) => (
                <span key={i} className={`block h-0.5 w-5 rounded-full transition-all duration-200 origin-center ${scrolled ? "bg-slate-700" : "bg-white"} ${
                  menuOpen && i === 0 ? "rotate-45 translate-y-[7px]" :
                  menuOpen && i === 1 ? "opacity-0 scale-x-0" :
                  menuOpen && i === 2 ? "-rotate-45 -translate-y-[7px]" : ""
                }`} />
              ))}
            </span>
          </button>
        </div>
      </div>

      {/* ── Mobile Drawer ─────────────────────────────── */}
      <div className={`md:hidden fixed inset-x-0 top-16 bg-white border-t border-slate-100 shadow-xl transition-all duration-300 ${
        menuOpen ? "opacity-100 visible" : "opacity-0 invisible pointer-events-none"
      }`}>
        <nav className="section-container py-4 flex flex-col gap-1">
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setMenuOpen(false)}
              className="px-4 py-3 rounded-lg text-sm font-medium text-slate-700 hover:bg-slate-50 hover:text-[#1A56DB] transition-colors"
            >
              {item.label}
            </Link>
          ))}
          <div className="mt-3 pt-3 border-t border-slate-100 flex flex-col gap-2">
            <Button variant="outline" size="sm" href="/login" className="justify-center">Log In</Button>
            <Button variant="primary" size="sm" href="#contact" className="justify-center">Get a Demo</Button>
          </div>
        </nav>
      </div>
    </header>
  );
}
