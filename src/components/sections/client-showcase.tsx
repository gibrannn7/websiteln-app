"use client";

import React from "react";
import LogoLoop, { LogoItem } from "@/components/LogoLoop";

export const ClientShowcase: React.FC = () => {
  const partners: LogoItem[] = [
    { src: "/logo/svg/docker.svg", alt: "Docker" },
    { src: "/logo/svg/flutter.svg", alt: "Flutter" },
    { src: "/logo/svg/js.svg", alt: "JavaScript" },
    { src: "/logo/svg/langchain.svg", alt: "Langchain" },
    { src: "/logo/svg/langgraph.svg", alt: "Langgraph" },
    { src: "/logo/svg/laravel.svg", alt: "Laravel" },
    { src: "/logo/svg/nextjs.svg", alt: "Next.js" },
    { src: "/logo/svg/opencv.svg", alt: "OpenCV" },
    { src: "/logo/svg/python.svg", alt: "Python" },
    { src: "/logo/svg/react.svg", alt: "React" },
    { src: "/logo/svg/selenium.svg", alt: "Selenium" },
    { src: "/logo/svg/supabase.svg", alt: "Supabase" },
    { src: "/logo/svg/unity.svg", alt: "Unity" },
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
            logoHeight={32}
            gap={48}
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