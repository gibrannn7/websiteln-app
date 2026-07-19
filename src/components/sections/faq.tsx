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
        "Apakah harga pembuatan website KKM sudah termasuk domain dan hosting?",
      answer:
        "Betul. Semua paket Proker KKM kami sudah termasuk layanan hosting prioritas gratis selamanya dan pendaftaran domain (.my.id/.biz.id) untuk tahun pertama. Tidak ada biaya bulanan server yang disembunyikan, sehingga sangat aman untuk laporan program kerja kelompok Anda.",
    },
    {
      question:
        "Berapa lama waktu pengerjaan untuk satu proyek website atau sistem aplikasi?",
      answer:
        "Untuk website Proker KKM (Basic) memakan waktu 1 hingga 3 hari kerja. Sedangkan untuk sistem yang lebih kompleks seperti Tugas Akhir (Skripsi) atau sistem otomasi perusahaan, biasanya membutuhkan 7 hingga 14 hari kerja tergantung tingkat kerumitan fitur yang disepakati.",
    },
    {
      question:
        "Apakah sistem Skripsi / Tugas Akhir dijamin lolos dan ada garansi revisi?",
      answer:
        "Kami menjamin sistem berfungsi 100% sesuai dengan fitur yang disepakati di awal (Sesi Brainstorming). Paket Skripsi kami juga sudah mencakup hingga 3x Revisi Minor, ditambah sesi orientasi kode, agar Anda benar-benar menguasai alur sistem saat ditanya oleh dosen penguji.",
    },
    {
      question:
        "Saya tidak paham IT (Non-Teknis), apakah diajari cara menggunakan sistemnya?",
      answer:
        "Tentu saja. Setelah website atau sistem selesai dibuat, kami akan memberikan panduan operasional lengkap. Kami merancang arsitektur dashboard admin yang sangat ramah pengguna, sehingga Anda dapat mengubah teks, foto, atau menambah data semudah bermain media sosial.",
    },
    {
      question:
        "Bisakah WEBSITELN membuat skrip otomasi (Bot) atau web scraping khusus?",
      answer:
        "Sangat bisa. Kami berspesialisasi dalam membangun infrastruktur otomasi Python untuk efisiensi bisnis. Mulai dari bot balasan otomatis, ekstraksi data web (scraping) ke Excel, sinkronisasi database, hingga integrasi asisten kecerdasan buatan (OpenAI/ChatGPT).",
    },
    {
      question:
        "Apakah saya bisa upgrade atau menambah fitur di kemudian hari setelah web selesai?",
      answer:
        "Bisa. Sistem kami dibangun menggunakan arsitektur modern (Next.js & React) yang sangat skalabel. Jika di masa depan Anda membutuhkan fitur tambahan yang lebih kompleks, Anda cukup mengajukan pengembangan fitur dengan harga yang terjangkau.",
    },
    {
      question:
        "Bagaimana prosedur pembayaran di WEBSITELN? Apakah aman?",
      answer:
        "Prosedur pembayaran kami sangat aman dan transparan. Kami menerapkan sistem bertahap: Uang Muka (DP) sebesar 50% dibayarkan setelah sesi Brainstorming spesifikasi selesai. Pelunasan sisa 50% dibayarkan HANYA ketika sistem sudah 100% selesai dan siap diserahterimakan kepada Anda.",
    },
  ];

  // Skema JSON-LD untuk SEO Google (Rich Snippets)
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  return (
    <section id="faq" className="bg-zinc-950 py-32 px-6 relative z-10">
      {/* Injeksi SEO Schema langsung ke DOM */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* Top seamless transition gradient mask */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-px bg-gradient-to-r from-transparent via-gold-dark/20 to-transparent" />

      <div className="max-w-4xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-20">
          <span className="text-xs text-gold-light tracking-[0.2em] uppercase font-semibold mb-4">
            PERTANYAAN UMUM
          </span>
          <h2 className="text-3xl md:text-5xl font-light text-zinc-100 tracking-tight leading-snug">
            Informasi Layanan Eksekutif
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
              <AccordionTrigger className="text-zinc-200 hover:text-gold-light py-5 text-sm md:text-base font-light font-sans tracking-wide text-left">
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