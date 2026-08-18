"use client";

import { useEffect, useRef, useState } from "react";
import styles from "./Capabilities.module.css";

type Capability = {
  number: string;
  title: string;
  statement: string;
  items: string[];
};

const capabilities: Capability[] = [
  {
    number: "01",
    title: "THINK",
    statement: "Understand what matters.",
    items: [
      "Strategy",
      "Research & Insight",
      "Audience & Community Insight",
      "Narrative",
      "Creative Direction",
    ],
  },
  {
    number: "02",
    title: "MAKE",
    statement: "Turn thinking into something people connect with.",
    items: [
      "Identity & Branding",
      "Campaign Creative",
      "Editorial & Content",
      "Digital & Social",
      "Illustration",
      "Film & Motion",
      "Experience",
    ],
  },
  {
    number: "03",
    title: "MOVE",
    statement: "Make communication do something.",
    items: [
      "Activation · Distribution",
      "Community Engagement",
      "Content Rollout",
      "Production",
      "Understanding",
      "Engagement · Trust",
      "Action",
    ],
  },
];

export default function Capabilities() {
  const [activeIndex, setActiveIndex] = useState(0);
  const sectionRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const section = sectionRef.current;

    if (!section) {
      return;
    }

    const cards =
      Array.from(
        section.querySelectorAll<HTMLElement>(
          "[data-capability-card]",
        ),
      );

    if (!cards.length) {
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort(
            (a, b) =>
              b.intersectionRatio -
              a.intersectionRatio,
          );

        if (!visible.length) {
          return;
        }

        const index = cards.indexOf(
          visible[0].target as HTMLElement,
        );

        if (index >= 0) {
          setActiveIndex(index);
        }
      },
      {
        threshold: [0.35, 0.5, 0.7],
        rootMargin: "-10% 0px -10% 0px",
      },
    );

    cards.forEach((card) => {
      observer.observe(card);
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  const scrollToCapability = (
    index: number,
  ) => {
    const section = sectionRef.current;

    if (!section) {
      return;
    }

    const cards =
      Array.from(
        section.querySelectorAll<HTMLElement>(
          "[data-capability-card]",
        ),
      );

    const target = cards[index];

    if (!target) {
      return;
    }

    target.scrollIntoView({
      behavior: "smooth",
      block: "center",
    });

    setActiveIndex(index);
  };

  return (
    <section
      id="approach"
      ref={sectionRef}
      className={styles.section}
    >
      <div className={styles.backgroundGlow} />

      <div className={styles.container}>
        {/* =====================================
            HEADER
        ====================================== */}

        <div className={styles.header}>
          <div className={styles.sectionLabel}>
            <span className={styles.labelNumber}>
              03
            </span>

            <span>
              HOW WE CREATE VALUE
            </span>
          </div>

          <div className={styles.headerContent}>
            <h2>
              Think.
              <br />
              Make.
              <br />
              Move.
            </h2>

            <p>
              We understand what matters,
              turn thinking into something
              people connect with, and make
              communication do something.
            </p>
          </div>
        </div>

        {/* =====================================
            CAPABILITY NAVIGATION
        ====================================== */}

        <div className={styles.navigation}>
          {capabilities.map(
            (capability, index) => (
              <button
                key={capability.number}
                type="button"
                className={
                  index === activeIndex
                    ? styles.navItemActive
                    : styles.navItem
                }
                onClick={() =>
                  scrollToCapability(index)
                }
              >
                <span>
                  {capability.number}
                </span>

                <span>
                  {capability.title}
                </span>
              </button>
            ),
          )}
        </div>

        {/* =====================================
            CAPABILITY CARDS
        ====================================== */}

        <div className={styles.cards}>
          {capabilities.map(
            (capability, index) => (
              <article
                key={capability.number}
                data-capability-card
                className={
                  index === activeIndex
                    ? `${styles.card} ${styles.cardActive}`
                    : styles.card
                }
              >
                {/* Number */}

                <div className={styles.cardTop}>
                  <span className={styles.cardNumber}>
                    {capability.number}
                  </span>

                  <span className={styles.cardIndex}>
                    MAXYMUM ID
                  </span>
                </div>

                {/* Main content */}

                <div className={styles.cardMain}>
                  <div className={styles.cardTitleWrap}>
                    <span className={styles.cardEyebrow}>
                      CAPABILITY
                    </span>

                    <h3>
                      {capability.title}
                    </h3>
                  </div>

                  <div className={styles.cardStatement}>
                    {capability.statement}
                  </div>
                </div>

                {/* Service list */}

                <div className={styles.cardBottom}>
                  <div className={styles.itemList}>
                    {capability.items.map(
                      (item, itemIndex) => (
                        <div
                          key={item}
                          className={
                            styles.item
                          }
                        >
                          <span
                            className={
                              styles.itemNumber
                            }
                          >
                            {String(
                              itemIndex + 1,
                            ).padStart(2, "0")}
                          </span>

                          <span>
                            {item}
                          </span>
                        </div>
                      ),
                    )}
                  </div>

                  <div className={styles.cardArrow}>
                    ↗
                  </div>
                </div>
              </article>
            ),
          )}
        </div>

        {/* =====================================
            BOTTOM STATEMENT
        ====================================== */}

        <div className={styles.bottomStatement}>
          <span className={styles.bottomNumber}>
            03
          </span>

          <p>
            From understanding the issue
            to creating meaningful
            communication — and making
            it move.
          </p>

          <span className={styles.bottomArrow}>
            ↓
          </span>
        </div>
      </div>
    </section>
  );
}