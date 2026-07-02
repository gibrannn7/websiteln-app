import React from "react";
import { Navbar } from "@/components/sections/navbar";
import { Hero } from "@/components/sections/hero";
import { Stats } from "@/components/sections/stats";
import { ClientShowcase } from "@/components/sections/client-showcase";
import { Services } from "@/components/sections/services";
import { Portfolio } from "@/components/sections/portfolio";
import { Pricing } from "@/components/sections/pricing";
import { Faq } from "@/components/sections/faq";
import { ContactForm } from "@/components/sections/contact-form";
import { Footer } from "@/components/sections/footer";
import { WhatsAppBubble } from "@/components/whatsapp-bubble";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex-1 flex flex-col">
        <Hero />
        <Stats />
        <ClientShowcase />
        <Services />
        <Portfolio />
        <Pricing />
        <Faq />
        <ContactForm />
      </main>
      <Footer />
      <WhatsAppBubble />
    </>
  );
}
