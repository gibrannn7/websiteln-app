"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const headerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = headerRef.current;
    if (!el) {
      return;
    }

    gsap.set(el, {
      backgroundColor: "rgba(0, 0, 0, 0)",
      backdropFilter: "blur(0px)",
      borderBottomColor: "rgba(255, 255, 255, 0)",
    });

    const trigger = ScrollTrigger.create({
      start: "top top",
      end: "+=50",
      onUpdate: (self) => {
        if (self.scroll() > 10) {
          gsap.to(el, {
            backgroundColor: "rgba(9, 9, 11, 0.4)", // bg-zinc-950/40
            backdropFilter: "blur(40px)", // backdrop-blur-2xl
            borderBottomColor: "rgba(24, 24, 27, 0.5)", // border-zinc-900/50
            duration: 0.4,
            overwrite: "auto",
          });
        } else {
          gsap.to(el, {
            backgroundColor: "rgba(0, 0, 0, 0)",
            backdropFilter: "blur(0px)",
            borderBottomColor: "rgba(255, 255, 255, 0)",
            duration: 0.4,
            overwrite: "auto",
          });
        }
      },
    });

    return () => {
      trigger.kill();
    };
  }, []);

  const navLinks = [
    { label: "Layanan", href: "#services" },
    { label: "Portofolio", href: "#portfolio" },
    { label: "Paket Harga", href: "#pricing" },
    { label: "FAQ", href: "#faq" },
  ];

  const handleScrollTo = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setIsOpen(false);
    const targetElement = document.querySelector(href);
    if (targetElement) {
      const offset = 80;
      const elementPosition = targetElement.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <>
      <header
        ref={headerRef}
        className="fixed top-0 left-0 right-0 z-50 w-full border-b transition-colors duration-300"
      >
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          {/* Logo Image */}
          <Link href="/" className="flex items-center">
            <Image
              src="/logo.png"
              alt="websiteln logo"
              width={180}
              height={48}
              className="h-12 w-auto object-contain cursor-pointer"
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => handleScrollTo(e, link.href)}
                className="text-sm font-light tracking-wide text-zinc-400 hover:text-gold-light transition-colors duration-200"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Desktop CTA: Hubungi Kami */}
          <div className="hidden md:block">
            <Button
              onClick={() => {
                const target = document.querySelector("#contact");
                if (target) {
                  const offset = 80;
                  const pos = target.getBoundingClientRect().top + window.pageYOffset - offset;
                  window.scrollTo({ top: pos, behavior: "smooth" });
                }
              }}
              variant="default"
              className="font-semibold tracking-wider uppercase py-2 px-5 rounded-sm text-xs cursor-pointer"
            >
              Hubungi Kami
            </Button>
          </div>

          {/* Mobile Toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-zinc-400 hover:text-zinc-100 transition-colors"
            aria-label="Toggle Menu"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </header>

      {/* Mobile Menu Drawer - Rendered outside <header> to prevent backdrop-filter height clipping */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop - Full screen dim background with luxury blur */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 z-[60] bg-zinc-950/80 backdrop-blur-md md:hidden"
            />

            {/* Slide-out Panel - Full height luxury drawer */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed right-0 top-0 bottom-0 w-4/5 max-w-sm z-[70] bg-zinc-950 border-l border-gold-dark/20 p-8 flex flex-col justify-between md:hidden shadow-2xl shadow-gold-dark/10"
            >
              <div>
                {/* Mobile Drawer Header: Logo and Close Button */}
                <div className="flex items-center justify-between pb-6 border-b border-zinc-900/60 mb-8">
                  <Image
                    src="/logo.png"
                    alt="websiteln logo"
                    width={130}
                    height={35}
                    className="h-8 w-auto object-contain"
                  />
                  <button
                    onClick={() => setIsOpen(false)}
                    className="p-2 text-zinc-400 hover:text-zinc-100 transition-colors cursor-pointer"
                    aria-label="Close Menu"
                  >
                    <X className="h-6 w-6" />
                  </button>
                </div>

                {/* Navigation Links */}
                <div className="flex flex-col space-y-5">
                  {navLinks.map((link) => (
                    <a
                      key={link.label}
                      href={link.href}
                      onClick={(e) => handleScrollTo(e, link.href)}
                      className="text-lg font-light tracking-wide text-zinc-300 hover:text-gold-light transition-colors duration-200 border-b border-zinc-900/40 pb-3"
                    >
                      {link.label}
                    </a>
                  ))}
                </div>
              </div>

              {/* Bottom CTA Button */}
              <div className="mt-auto pt-6 border-t border-zinc-900/60">
                <Button
                  onClick={() => {
                    setIsOpen(false);
                    const target = document.querySelector("#contact");
                    if (target) {
                      const offset = 80;
                      const pos = target.getBoundingClientRect().top + window.pageYOffset - offset;
                      window.scrollTo({ top: pos, behavior: "smooth" });
                    }
                  }}
                  variant="default"
                  className="w-full py-3 rounded-sm text-sm font-semibold tracking-wider uppercase cursor-pointer"
                >
                  Hubungi Kami
                </Button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};
