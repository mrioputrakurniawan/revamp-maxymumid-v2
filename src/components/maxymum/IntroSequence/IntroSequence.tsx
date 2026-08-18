"use client";

import { useEffect, useRef, useState } from "react";
import styles from "./IntroSequence.module.css";

export default function IntroSequence() {
  const [progress, setProgress] = useState(0);
  const [isLoadingDone, setIsLoadingDone] = useState(false);

  const introRef = useRef<HTMLDivElement>(null);

  // 1. Animasi Angka Loading Otomatis (0% - 100%) awal + Pengunci Scroll Mutlak
  useEffect(() => {
    document.body.style.overflow = "hidden";
    document.documentElement.style.overflow = "hidden";

    const duration = 1500;
    const startTime = performance.now();
    
    const interval = setInterval(() => {
      const elapsed = performance.now() - startTime;
      const value = Math.min(Math.round((elapsed / duration) * 100), 100);

      setProgress(value);

      if (value >= 100) {
        clearInterval(interval);
        setTimeout(() => {
          setIsLoadingDone(true);
          document.body.style.overflow = "auto";
          document.documentElement.style.overflow = "auto";
        }, 120);
      }
    }, 16);

    return () => {
      clearInterval(interval);
      document.body.style.overflow = "auto";
      document.documentElement.style.overflow = "auto";
    };
  }, []);

  // 2. Memetakan Scroll Alami Browser untuk Animasi Parallax & Super Fast Fade Out
  useEffect(() => {
    if (!isLoadingDone) return;

    const handleScroll = () => {
      const introEl = introRef.current;
      if (!introEl) return;

      const currentScroll = window.scrollY;
      const MAX_ANIM_SCROLL = 500; 

      const helloEl = introEl.querySelector(`.${styles.hello}`) as HTMLElement;
      const weAreEl = introEl.querySelector(`.${styles.weAreGroup}`) as HTMLElement;
      const statementEl = introEl.querySelector(`.${styles.statement}`) as HTMLElement;
      const outerRingEl = introEl.querySelector(`.${styles.outerRing}`) as HTMLElement;
      const scrollHintEl = introEl.querySelector(`.${styles.scrollHint}`) as HTMLElement;
      
      const centerContainerEl = introEl.querySelector(`.${styles.centerContainer}`) as HTMLElement;
      const visualEl = introEl.querySelector(`.${styles.visual}`) as HTMLElement;
      const uiElements = introEl.querySelectorAll(`.${styles.topLeft}, .${styles.topRight}, .${styles.bottomLeft}`);

      // A. Putaran Lingkaran
      const ringRotation = (Math.min(currentScroll, MAX_ANIM_SCROLL) / MAX_ANIM_SCROLL) * 360;
      if (outerRingEl) {
        outerRingEl.style.transform = `translate3d(-50%, -50%, 0) rotate(${ringRotation}deg)`;
      }

      // B. Memudarkan teks panduan di atas
      if (scrollHintEl) {
        scrollHintEl.style.opacity = `${Math.max(0, 0.4 - currentScroll / 120)}`;
        scrollHintEl.style.transform = `translateX(-50%) translate3d(0, -${currentScroll * 0.1}px, 0)`;
      }

      // C. Transisi Dua Arah "HELLO"
      if (helloEl) {
        if (currentScroll < 150) {
          const factor = currentScroll / 150;
          helloEl.style.opacity = `${1 - factor}`;
          helloEl.style.transform = `translate3d(-50%, calc(-50% - ${factor * 50}px), 0) scale(${1 - factor * 0.15})`;
        } else {
          helloEl.style.opacity = "0";
        }
      }

      // D. Transisi Dua Arah "WE ARE MAXYMUM ID"
      if (weAreEl) {
        if (currentScroll >= 120 && currentScroll < 350) {
          if (currentScroll < 235) {
            const factor = (currentScroll - 120) / 115;
            weAreEl.style.opacity = `${factor}`;
            weAreEl.style.transform = `translate3d(-50%, calc(-50% + ${(1 - factor) * 40}px), 0)`;
          } else {
            const factor = (currentScroll - 235) / 115;
            weAreEl.style.opacity = `${1 - factor}`;
            weAreEl.style.transform = `translate3d(-50%, calc(-50% - ${factor * 50}px), 0) scale(${1 - factor * 0.15})`;
          }
        } else {
          weAreEl.style.opacity = "0";
        }
      }

      // E. Transisi Dua Arah "STATEMENT"
      if (statementEl) {
        if (currentScroll >= 320 && currentScroll < 500) {
          const factor = (currentScroll - 320) / 180;
          statementEl.style.opacity = `${factor}`;
          statementEl.style.transform = `translate3d(-50%, calc(-50% + ${(1 - factor) * 40}px), 0)`;
        } else {
          statementEl.style.opacity = "0";
        }
      }

      // F. Fade out komponen lingkaran & teks tengah intro saat masuk Hero Section
      if (currentScroll >= 450) {
        const exitFactor = Math.min((currentScroll - 450) / 150, 1); 
        const targetOpacity = `${1 - exitFactor}`;

        if (centerContainerEl) centerContainerEl.style.opacity = targetOpacity;
        if (visualEl) visualEl.style.opacity = targetOpacity;
        
        uiElements.forEach((el) => {
          (el as HTMLElement).style.opacity = `${0.45 * (1 - exitFactor)}`;
        });
      } else {
        if (centerContainerEl) centerContainerEl.style.opacity = "1";
        if (visualEl) visualEl.style.opacity = "1";
        uiElements.forEach((el) => {
          (el as HTMLElement).style.opacity = "0.45";
        });
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isLoadingDone]);

  return (
    <div 
      ref={introRef} 
      className={`${styles.intro} ${!isLoadingDone ? styles.loadingActive : ""}`} 
      aria-hidden="true"
    >
      <div className={styles.background} />
      <div className={styles.grid} />



      {/* 🌟 HANYA INDIKATOR LOADING: Teks 01-INTRO hanya muncul saat persen bergerak */}
      {!isLoadingDone && <div className={styles.topRight}>01 — INTRO</div>}

      {/* PETUNJUK SCROLL */}
      {isLoadingDone && (
        <div className={styles.scrollHint}>SCROLL DOWN TO EXPLORE</div>
      )}

      {/* LOADING NUMBERS */}
      {!isLoadingDone ? (
        <div className={styles.loading}>
          <span className={styles.percent}>{String(progress).padStart(2, "0")}%</span>
          <span className={styles.loadingLabel}>LOADING EXPERIENCE</span>
        </div>
      ) : (
        /* CENTER CONTAINER */
        <div className={styles.centerContainer}>
          <div className={styles.hello} style={{ opacity: 1, transform: "translate3d(-50%, -50%, 0)" }}>
            HELLO
          </div>

          <div className={styles.weAreGroup} style={{ opacity: 0, transform: "translate3d(-50%, -40%, 0)" }}>
            <div className={styles.weAre}>WE ARE</div>
            <div className={styles.brandName}>
              <span className={styles.textWhite}>maxymum</span>
              <span className={styles.textOrange}> ID</span>
            </div>
          </div>

          <div className={styles.statement} style={{ opacity: 0, transform: "translate3d(-50%, -40%, 0)" }}>
            <span>ELEVATE CAUSE.</span>
            <span>INFLUENCE THOUGHT.</span>
          </div>
        </div>
      )}

      {/* ROTATING OBJECT */}
      {isLoadingDone && (
        <div className={styles.visual} style={{ opacity: 1 }}>
          <svg className={styles.outerRing} viewBox="0 0 600 600" style={{ transform: "translate3d(-50%, -50%, 0) rotate(0deg)" }}>
            <defs>
              <path id="textCirclePath" d="M 300, 300 m -260, 0 a 260,260 0 1,1 520,0 a 260,260 0 1,1 -520,0" />
            </defs>
            <text>
              <textPath href="#textCirclePath" startOffset="0%" className={styles.ringTextText}>
                <tspan className={styles.orangeText}>MAXYMUM ID</tspan>
                <tspan className={styles.whiteText}> · CREATIVE COMMUNICATION · </tspan>
                <tspan className={styles.orangeText}>MAXYMUM ID</tspan>
                <tspan className={styles.whiteText}> · CREATIVE COMMUNICATION · </tspan>
              </textPath>
            </text>
          </svg>
          
          <div className={styles.middleRing} />
          <div className={styles.innerRing} />
        </div>
      )}

      {/* BOTTOM UI */}
      <div className={styles.bottomLeft}>CREATIVE AGENCY</div>
    </div>
  );
}
