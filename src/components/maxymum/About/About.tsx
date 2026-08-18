"use client";

import styles from "./About.module.css";

const thinkingSteps = [
  {
    number: "01",
    title: "GROUND",
    subtitle: "Understand the Context",
    description:
      "Rooted deeply in culture and structured research. We listen and analyze to completely grasp the baseline narrative before taking any action.",
  },
  {
    number: "02",
    title: "LIFT",
    subtitle: "Elevate the Idea",
    description:
      "Transforming abstract concepts and raw data into inspiring creative narratives that lift visual communication design to the next tier.",
  },
  {
    number: "03",
    title: "NAVIGATE",
    subtitle: "Shape Communication",
    description:
      "Guiding strategic direction. We map visual and digital pathways that ensure messages are delivered clearly and reach intended audiences directly.",
  },
  {
    number: "04",
    title: "LAND",
    subtitle: "Create Meaningful Impact",
    description:
      "Driving real action and tangible change. We make certain our creative outputs shape positive attitudes and leave a permanent, powerful legacy.",
  },
];

const audiences = [
  {
    number: "01",
    title: "Development & Public Issues",
    items: [
      "Government",
      "NGO",
      "Development Partners",
      "Public Institutions",
    ],
  },
  {
    number: "02",
    title: "Corporate Purpose & ESG",
    items: [
      "Corporate",
      "CSR",
      "Sustainability",
      "Community Programs",
    ],
  },
  {
    number: "03",
    title: "Brands & Campaigns",
    items: [
      "Purpose-driven Brands",
      "Commercial",
      "Cultural Campaigns",
    ],
  },
];

export default function About() {
  return (
    <section className={styles.aboutSection} id="about">
      {/* =====================================================
          INTRO
      ===================================================== */}

      <div className={styles.aboutIntro}>
        <div className={styles.introTop}>
          <span className={styles.eyebrow}>
            ABOUT MAXYMUM ID
          </span>

          <span className={styles.introNumber}>
            01 / 04
          </span>
        </div>

        <div className={styles.introGrid}>
          <h2 className={styles.introTitle}>
            We understand
            <br />
            complexity.
            <br />
            <span>Then make it matter.</span>
          </h2>

          <div className={styles.introCopy}>
            <p className={styles.lead}>
              Maxymum is a creative communications
              agency that turns complex issues into
              strategic creative campaigns.
            </p>

            <p>
              We work with organizations that have
              something meaningful to communicate —
              from development and public issues to
              corporate purpose, ESG, brands, and
              campaigns.
            </p>
          </div>
        </div>
      </div>

      {/* =====================================================
          ELEVATED PERSPECTIVE
      ===================================================== */}

      <div className={styles.perspectiveSection}>
        <div className={styles.perspectiveHeader}>
          <div>
            <span className={styles.eyebrow}>
              OUR THINKING
            </span>

            <h3>
              Turning complex issues
              <br />
              into strategic creative campaigns.
            </h3>
          </div>

          <span className={styles.perspectiveMark}>
            MAXYMUM
            <br />
            ELEVATED
            <br />
            PERSPECTIVE
          </span>
        </div>

        <div className={styles.stepsGrid}>
          {thinkingSteps.map((step) => (
            <article
              key={step.number}
              className={styles.step}
            >
              <div className={styles.stepTop}>
                <span className={styles.stepNumber}>
                  {step.number}
                </span>

                <span className={styles.stepLine} />
              </div>

              <span className={styles.stepTitle}>
                {step.title}
              </span>

              <h4>{step.subtitle}</h4>

              <p>{step.description}</p>
            </article>
          ))}
        </div>
      </div>

      {/* =====================================================
          AUDIENCE
      ===================================================== */}

      <div className={styles.audienceSection}>
        <div className={styles.audienceHeader}>
          <span className={styles.eyebrow}>
            WHO WE CREATE FOR
          </span>

          <h3>
            Organizations with
            <br />
            something meaningful
            <br />
            to communicate.
          </h3>
        </div>

        <div className={styles.audienceGrid}>
          {audiences.map((audience) => (
            <article
              key={audience.number}
              className={styles.audienceCard}
            >
              <div className={styles.audienceTop}>
                <span>
                  {audience.number}
                </span>

                <span>↗</span>
              </div>

              <h4>{audience.title}</h4>

              <div className={styles.audienceItems}>
                {audience.items.map((item) => (
                  <span key={item}>
                    {item}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}