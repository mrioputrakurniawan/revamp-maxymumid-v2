"use client";

import { useEffect, useState } from "react";
import styles from "./Opening.module.css";

type OpeningPhase =
  | "hello"
  | "loading"
  | "weare"
  | "statement"
  | "exit";

export default function Opening() {
  const [phase, setPhase] = useState<OpeningPhase>("hello");
  const [progress, setProgress] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    let frame = 0;
    let startTime = performance.now();

    const helloDuration = 850;
    const loadingDuration = 1900;

    const animate = (time: number) => {
      const elapsed = time - startTime;

      if (phase === "hello") {
        if (elapsed >= helloDuration) {
          setPhase("loading");
          startTime = time;
        }
      }

      if (phase === "loading") {
        const value = Math.min(
          elapsed / loadingDuration,
          1
        );

        const eased =
          1 - Math.pow(1 - value, 3);

        setProgress(Math.round(eased * 100));

        if (value >= 1) {
          setPhase("weare");
          startTime = time;
        }
      }

      if (phase === "weare") {
        if (elapsed >= 1050) {
          setPhase("statement");
          startTime = time;
        }
      }

      if (phase === "statement") {
        if (elapsed >= 1450) {
          setPhase("exit");
        }
      }

      if (phase !== "exit") {
        frame = requestAnimationFrame(animate);
      }
    };

    frame = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(frame);
    };
  }, [phase]);

  useEffect(() => {
    if (phase !== "exit") return;

    const timer = window.setTimeout(() => {
      setVisible(false);
    }, 950);

    return () => {
      window.clearTimeout(timer);
    };
  }, [phase]);

  if (!visible) {
    return null;
  }

  return (
    <div
      className={`${styles.opening} ${
        phase === "exit"
          ? styles.exiting
          : ""
      }`}
    >
      <div className={styles.noise} />

      <div className={styles.grid} />

      <div className={styles.topBar}>
        <span>MAXYMUM ID</span>
        <span>CREATIVE / COMMUNICATION</span>
      </div>

      <div className={styles.progress}>
        <span className={styles.progressLabel}>
          LOADING
        </span>

        <span className={styles.progressNumber}>
          {String(progress).padStart(2, "0")}%
        </span>
      </div>

      <div className={styles.center}>

        {/* HELLO */}

        <div
          className={`${styles.word} ${
            phase === "hello"
              ? styles.wordActive
              : styles.wordGone
          }`}
        >
          HELLO
        </div>

        {/* WE ARE */}

        <div
          className={`${styles.word} ${
            phase === "weare"
              ? styles.wordActive
              : phase === "statement"
                ? styles.wordGone
                : styles.wordHidden
          }`}
        >
          WE ARE
        </div>

        {/* STATEMENT */}

        <div
          className={`${styles.statement} ${
            phase === "statement"
              ? styles.statementActive
              : ""
          }`}
        >
          <span>MAXYMUM</span>
          <strong>ID</strong>
        </div>

        {/* ROTATING LOGO */}

        <div
          className={`${styles.logoOrbit} ${
            phase === "statement"
              ? styles.logoOrbitActive
              : ""
          }`}
        >
          <div className={styles.logoRing}>
            <span>MAXYMUM ID · </span>
            <span>MAXYMUM ID · </span>
            <span>MAXYMUM ID · </span>
            <span>MAXYMUM ID · </span>
          </div>

          <div className={styles.logoCore}>
          </div>
        </div>

      </div>

      <div className={styles.bottomBar}>
        <span>THINK / MAKE / MOVE</span>

        <span className={styles.bottomArrow}>
          ↓
        </span>

        <span>
          INDONESIA
        </span>
      </div>
    </div>
  );
}