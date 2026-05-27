"use client";

import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

interface FaqItem {
  question: string;
  answer: string;
}

export const Faq: React.FC = () => {
  const faqs: FaqItem[] = [
    {
      question:
        "Apakah websiteln bisa membantu mengelola website yang dibangun dengan teknologi lama seperti CodeIgniter?",
      answer:
        "Tentu saja. Kami memiliki keahlian mendalam baik pada arsitektur modern berbasis Next.js maupun arsitektur warisan seperti CodeIgniter 3. Kami dapat melakukan pemeliharaan rutin, penambahan fitur baru, hingga perbaikan performa kode lama Anda.",
    },
    {
      question:
        "Bagaimana sistem kerja Paket Langganan Pemeliharaan (Elite Care Subscription)?",
      answer:
        "Melalui program langganan ini, tim pengembang kami bertindak sebagai departemen IT eksternal Anda. Kami mengurus pembaruan konten, memantau kinerja infrastruktur, mengelola perpanjangan hosting/domain, serta langsung menangani perbaikan jika terjadi kendala teknis tanpa biaya tambahan di luar biaya bulanan.",
    },
    {
      question:
        "Apakah biaya paket pengembangan sudah termasuk proses deployment ke server publik?",
      answer:
        "Ya, seluruh paket pengembangan aplikasi kami sudah mencakup konfigurasi pipeline CI/CD hingga aplikasi Anda berjalan dengan sempurna di server produksi publik seperti Vercel, Railway, atau VPS pilihan Anda.",
    },
    {
      question:
        "Bagaimana keamanan data terjaga pada proyek otomasi pengikisan data web (web scraping)?",
      answer:
        "Kami membangun skrip otomatisasi Python dengan mematuhi protokol keamanan data tingkat tinggi dan etika pengambilan data web. Seluruh data hasil ekstraksi disimpan dengan enkripsi penuh di lingkungan database yang aman dan terisolasi.",
    },
  ];

  return (
    <section id="faq" className="bg-zinc-950 py-32 px-6 relative z-10">
      {/* Top seamless transition gradient mask */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-px bg-gradient-to-r from-transparent via-gold-dark/20 to-transparent" />

      <div className="max-w-4xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-20">
          <span className="text-xs text-gold-light tracking-[0.2em] uppercase font-semibold mb-4">
            PERTANYAAN UMUM
          </span>
          <h2 className="text-3xl md:text-5xl font-light text-zinc-100 tracking-tight leading-snug">
            Pertanyaan Yang Sering Diajukan
          </h2>
          <div className="h-[2px] w-16 bg-gold-dark/40 mt-8" />
        </div>

        {/* Accordion Component */}
        <Accordion type="single" collapsible className="w-full space-y-3.5">
          {faqs.map((faq, index) => (
            <AccordionItem
              key={index}
              value={`faq-item-${index}`}
              className="border border-zinc-900/50 bg-zinc-900/10 hover:border-gold-dark/20 px-6 rounded-sm transition-all duration-300"
            >
              <AccordionTrigger className="text-zinc-200 hover:text-gold-light py-5 text-sm md:text-base font-light font-sans tracking-wide">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-zinc-400 font-light text-xs md:text-sm leading-relaxed pb-5 pt-1">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};
