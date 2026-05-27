"use client";

import React from "react";
import LogoLoop, { LogoItem } from "@/components/LogoLoop";

export const ClientShowcase: React.FC = () => {
  const partners: LogoItem[] = [
    {
      node: (
        <span className="font-serif text-sm md:text-base font-bold tracking-[0.25em] text-zinc-500 hover:text-gold-light transition-colors duration-300 uppercase select-none">
          Vercel Enterprise
        </span>
      ),
    },
    {
      node: (
        <span className="font-sans text-sm md:text-base font-light tracking-[0.3em] text-zinc-500 hover:text-gold-light transition-colors duration-300 uppercase select-none">
          Supabase Corp
        </span>
      ),
    },
    {
      node: (
        <span className="font-mono text-sm md:text-base font-medium tracking-[0.2em] text-zinc-500 hover:text-gold-light transition-colors duration-300 uppercase select-none">
          FastAPI Core
        </span>
      ),
    },
    {
      node: (
        <span className="font-sans text-sm md:text-base font-extralight tracking-[0.3em] text-zinc-500 hover:text-gold-light transition-colors duration-300 uppercase select-none">
          Railway.app
        </span>
      ),
    },
    {
      node: (
        <span className="font-serif text-sm md:text-base italic font-bold tracking-[0.15em] text-zinc-500 hover:text-gold-light transition-colors duration-300 uppercase select-none">
          Python Enterprise
        </span>
      ),
    },
    {
      node: (
        <span className="font-sans text-sm md:text-base font-semibold tracking-[0.25em] text-zinc-500 hover:text-gold-light transition-colors duration-300 uppercase select-none">
          Scrapy Distributed
        </span>
      ),
    },
  ];

  return (
    <section className="bg-zinc-950 py-12 overflow-hidden relative z-10">
      {/* Top and Bottom soft divider line using gradient */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-px bg-gradient-to-r from-transparent via-zinc-900/60 to-transparent" />
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-px bg-gradient-to-r from-transparent via-zinc-900/60 to-transparent" />

      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-8">
        <div className="flex-shrink-0 text-center md:text-left">
          <span className="text-[10px] text-gold-light tracking-[0.2em] uppercase font-bold block mb-1">
            KAPABILITAS EKOSISTEM
          </span>
          <span className="text-xs text-zinc-500 font-light tracking-wide block">
            Dipercaya oleh arsitektur platform berikut
          </span>
        </div>

        <div className="flex-1 w-full max-w-2xl overflow-hidden">
          <LogoLoop
            logos={partners}
            speed={40}
            direction="left"
            logoHeight={24}
            gap={64}
            pauseOnHover={true}
            fadeOut={true}
            fadeOutColor="rgb(9, 9, 11)"
            scaleOnHover={true}
          />
        </div>
      </div>
    </section>
  );
};
