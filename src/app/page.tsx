"use client";

import { useEffect } from "react";
import Opening from "@/components/maxymum/Opening/Opening";
import Hero from "@/components/maxymum/Hero/Hero";
import About from "@/components/maxymum/About/About";
import Capabilities from "@/components/maxymum/Capabilities/Capabilities";
import Clients from "@/components/maxymum/Clients/Clients";
import Work from "@/components/maxymum/Work/Work";
import Contact from "@/components/maxymum/Contact/Contact";
import Footer from "@/components/maxymum/Footer/Footer";

export default function Home() {
  useEffect(() => {
    document.body.style.overflowX = "hidden";
    document.body.style.overflowY = "auto";
  }, []);

  return (
    <main className="maxymum-page" style={{ position: "relative", width: "100%" }}>
      {/* 🌟 Navigasi Global di sini dihapus agar tidak bertumpuk dobel */}
      <Opening />
      <Hero />
      <About />
      <Capabilities />
      <Clients />
      <Work />
      <Contact />
      <Footer />
    </main>
  );
}
