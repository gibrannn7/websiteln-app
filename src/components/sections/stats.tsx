"use client";

import React, { useRef, useState, useEffect } from "react";
import { useCounter } from "@/hooks/use-counter";

export const Stats: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState<boolean>(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect(); // only trigger animation once
        }
      },
      { threshold: 0.1 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const projectsCount = useCounter(47, 0, 2000, inView);
  const automationCount = useCounter(18, 0, 2000, inView);
  const uptimeCount = useCounter(99.9, 1, 2000, inView);

  const statItems = [
    {
      value: `${projectsCount}+`,
      label: "Projek Enterprise Selesai",
    },
    {
      value: `${automationCount}`,
      label: "Sistem Otomasi Python Aktif",
    },
    {
      value: `${uptimeCount.toFixed(1)}%`,
      label: "Waktu Aktif Server Klien Terjaga",
    },
    {
      value: "24/7",
      label: "Dukungan Pemeliharaan Premium",
    },
  ];

  return (
    <section
      ref={containerRef}
      className="bg-zinc-950 py-16 px-6 relative z-10"
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-0 divide-y divide-zinc-900/40 md:divide-y-0 md:divide-x md:divide-zinc-900/40 divide-solid">
          {statItems.map((item, index) => (
            <div
              key={index}
              className="flex flex-col items-center justify-center text-center p-6"
            >
              <span className="text-gold-light font-light text-4xl md:text-5xl tracking-tight">
                {item.value}
              </span>
              <span className="text-xs md:text-sm text-zinc-500 uppercase tracking-widest mt-3 font-medium max-w-[200px]">
                {item.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
