"use client";

import { useState, useEffect } from "react";

const navigation = [
  { label: "WORK", href: "#work" },
  { label: "SERVICES", href: "#services" },
  { label: "ABOUT", href: "#about" },
  { label: "INSIGHTS", href: "#insights" },
  { label: "CONTACT", href: "#contact" },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  
  // 🌟 State untuk melacak status scroll halaman
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Jika halaman digulir ke bawah lebih dari 60px, ubah status menjadi true
      if (window.scrollY > 60) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    /* 🌟 KUNCI UTAMA: Menambahkan class 'is-scrolled' secara dinamis saat halaman digulir ke area putih */
    <header className={`site-header maxymum-header ${scrolled ? "is-scrolled" : ""}`}>
      <div className="header-inner">
        <a
          href="/"
          className="maxymum-logo"
          aria-label="Maxymum ID"
        >
          {/* 🌟 Memberikan class terpisah pada kata maxymum dan ID agar bisa diwarnai mandiri */}
          <span className="logo-max">maxymum</span>
          <span className="logo-id">ID</span>
        </a>

        <nav
          className="desktop-nav"
          aria-label="Main navigation"
        >
          {navigation.map((item) => (
            /* 🌟 Memberikan class khusus 'contact-btn' jika label teksnya adalah CONTACT */
            <a 
              key={item.label} 
              href={item.href}
              className={item.label === "CONTACT" ? "contact-btn" : ""}
            >
              {item.label}
            </a>
          ))}
        </nav>

        <button
          type="button"
          className="menu-toggle"
          onClick={() => setOpen(!open)}
          aria-label="Toggle navigation"
          aria-expanded={open}
        >
          <span />
          <span />
        </button>
      </div>

      <div className={`mobile-menu ${open ? "is-open" : ""}`}>
        {navigation.map((item) => (
          <a
            key={item.label}
            href={item.href}
            onClick={() => setOpen(false)}
          >
            {item.label}
          </a>
        ))}
      </div>
    </header>
  );
}
