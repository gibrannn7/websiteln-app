"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

export const WhatsAppBubble: React.FC = () => {
  const handleClick = () => {
    const rawNumber = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "+62 817-7495-2006";
    const cleanNumber = rawNumber.replace(/[^0-9]/g, "");
    const message = "Halo tim WEBSITELN, saya kebetulan mampir ke website portofolionya dan tertarik buat diskusi soal pembuatan website/sistem. Boleh minta info lebih detail?";
    const url = `https://wa.me/${cleanNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <div className="fixed bottom-6 right-6 z-40 flex items-center group pointer-events-auto">
      {/* Floating Dynamic Help Text - Hover Triggered */}
      <span className="bg-zinc-900/95 text-gold-light border border-zinc-850 text-xs py-2 px-4 rounded-sm shadow-2xl font-light tracking-wide select-none opacity-0 -translate-x-3 pointer-events-none group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 mr-3.5 backdrop-blur-md">
        Butuh bantuan? Kontak kami
      </span>

      {/* Interactive Motion Button */}
      <motion.button
        onClick={handleClick}
        animate={{ scale: [1, 1.05, 1] }}
        transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        className="w-14 h-14 bg-zinc-900 rounded-full shadow-2xl border border-zinc-800 cursor-pointer focus:outline-none focus:ring-2 focus:ring-gold-light/40 overflow-hidden shrink-0"
        aria-label="WhatsApp Chat"
      >
        <Image
          src="/logo/wa.png"
          alt="WhatsApp Chat Logo"
          width={56}
          height={56}
          className="w-full h-full object-cover"
          priority
        />
      </motion.button>
    </div>
  );
};
