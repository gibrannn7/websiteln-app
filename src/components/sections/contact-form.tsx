"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import Beams from "@/components/beams";

interface FormData {
  fullName: string;
  email: string;
  companyName: string;
  serviceType: string;
  projectDescription: string;
}

export const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    fullName: "",
    email: "",
    companyName: "",
    serviceType: "",
    projectDescription: "",
  });

  const [error, setError] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSelectChange = (value: string) => {
    setFormData((prev) => ({ ...prev, serviceType: value }));
  };

  const validateEmail = (emailStr: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(emailStr);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    const { fullName, email, companyName, serviceType, projectDescription } = formData;

    if (!fullName || !email || !companyName || !serviceType || !projectDescription) {
      setError("Seluruh kolom wajib diisi.");
      return;
    }

    if (!validateEmail(email)) {
      setError("Format alamat email tidak valid.");
      return;
    }

    setLoading(true);

    // Simulate short network delay to prevent double-click issues and show loading state
    setTimeout(() => {
      const subject = `[PROSPEK NEW] Pengajuan Projek Websiteln - ${companyName}`;
      const body = `Nama Lengkap: ${fullName}
Email: ${email}
Perusahaan: ${companyName}
Pilihan Layanan: ${serviceType}

Deskripsi Kebutuhan Projek:
${projectDescription}`;

      const mailtoUrl = `mailto:hello@websiteln.com?subject=${encodeURIComponent(
        subject
      )}&body=${encodeURIComponent(body)}`;

      window.location.href = mailtoUrl;
      setLoading(false);
    }, 1200);
  };

  return (
    <section
      id="contact"
      className="relative w-full py-32 px-6 bg-zinc-950 overflow-hidden z-10"
    >
      {/* Top seamless transition gradient mask */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-px bg-gradient-to-r from-transparent via-gold-dark/20 to-transparent" />

      {/* Background WebGL Beams with new gold light color */}
      <div className="absolute inset-0 z-[1] opacity-30 pointer-events-none">
        <Beams
          beamWidth={1.5}
          beamHeight={20}
          beamNumber={14}
          lightColor="#ead98d" // Gold Light
          speed={1.5}
          noiseIntensity={1.5}
          scale={0.15}
          rotation={30}
        />
      </div>

      <div className="absolute inset-0 z-[2] bg-gradient-to-b from-zinc-950 via-transparent to-transparent pointer-events-none" />

      {/* Main Content */}
      <div className="relative z-[10] max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* Text Info */}
        <div className="flex flex-col max-w-xl">
          <span className="text-xs text-gold-light tracking-[0.2em] uppercase font-semibold mb-4">
            KONSULTASI GRATIS
          </span>
          <h2 className="text-3xl md:text-5xl font-light text-zinc-100 tracking-tight leading-snug">
            Mulai Kemitraan Digital Dan Otomasi Anda Sekarang
          </h2>
          <p className="text-sm text-zinc-400 font-light mt-6 leading-relaxed">
            Hubungi tim ahli kami untuk mendiskusikan kebutuhan arsitektur sistem baru, otomasi skrip, atau pengintegrasian AI. Kami siap memformulasikan strategi eksekusi digital paling efisien untuk korporasi Anda.
          </p>
          <div className="h-[2px] w-16 bg-gold-dark/40 mt-8" />
        </div>

        {/* Form Container */}
        <div className="bg-zinc-950/70 border border-zinc-900/50 backdrop-blur-md p-8 md:p-10 rounded-sm shadow-2xl max-w-xl w-full mx-auto">
          <form onSubmit={handleSubmit} className="space-y-6">
            {error && (
              <div className="bg-red-500/10 border border-red-500/20 text-red-400 text-xs py-3 px-4 rounded-sm">
                {error}
              </div>
            )}

            <div>
              <label className="text-xs text-zinc-400 font-semibold tracking-wider uppercase block mb-2">
                Nama Lengkap
              </label>
              <Input
                name="fullName"
                type="text"
                value={formData.fullName}
                onChange={handleChange}
                placeholder="Nama Anda"
                disabled={loading}
              />
            </div>

            <div>
              <label className="text-xs text-zinc-400 font-semibold tracking-wider uppercase block mb-2">
                Alamat Email Korporat
              </label>
              <Input
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="nama@perusahaan.com"
                disabled={loading}
              />
            </div>

            <div>
              <label className="text-xs text-zinc-400 font-semibold tracking-wider uppercase block mb-2">
                Nama Perusahaan
              </label>
              <Input
                name="companyName"
                type="text"
                value={formData.companyName}
                onChange={handleChange}
                placeholder="PT Perusahaan Indonesia"
                disabled={loading}
              />
            </div>

            <div>
              <label className="text-xs text-zinc-400 font-semibold tracking-wider uppercase block mb-2">
                Pilihan Layanan
              </label>
              <Select
                value={formData.serviceType}
                onValueChange={handleSelectChange}
                disabled={loading}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Pilih Paket Layanan" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Instant Modern Architecture">
                    Instant Modern Architecture (Aplikasi Web)
                  </SelectItem>
                  <SelectItem value="Intelligent Automation & AI">
                    Intelligent Automation & AI (Otomasi & AI)
                  </SelectItem>
                  <SelectItem value="Legacy Modernization & Custom">
                    Legacy Modernization & Custom (Modernisasi IT)
                  </SelectItem>
                  <SelectItem value="Elite Care Subscription">
                    Elite Care Subscription (Langganan Bulanan)
                  </SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div>
              <label className="text-xs text-zinc-400 font-semibold tracking-wider uppercase block mb-2">
                Deskripsi Kebutuhan Projek
              </label>
              <textarea
                name="projectDescription"
                rows={4}
                value={formData.projectDescription}
                onChange={handleChange}
                placeholder="Jelaskan kebutuhan fungsional atau tantangan teknis sistem Anda..."
                disabled={loading}
                className="flex w-full rounded-sm border border-zinc-800 bg-zinc-900/50 px-3 py-2 text-sm text-zinc-100 placeholder:text-zinc-500 focus-visible:outline-none focus-visible:border-gold-dark/50 focus-visible:ring-1 focus-visible:ring-gold-dark/20 disabled:cursor-not-allowed disabled:opacity-50 transition-all duration-200 resize-none"
              />
            </div>

            <Button
              type="submit"
              disabled={loading}
              className="w-full py-3 rounded-sm text-sm font-semibold tracking-wide"
            >
              {loading ? "Memproses Form..." : "Kirim Pengajuan Projek"}
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
};
