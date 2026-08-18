"use client";

import styles from "./Approach.module.css";

type ApproachItem = {
  number: string;
  title: string;
  intro: string;
  items: string[];
};

const approaches: ApproachItem[] = [
  {
    number: "01",
    title: "THINK",
    intro: "Understand what matters.",
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
    intro:
      "Turn thinking into something people connect with.",
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
    intro: "Make communication do something.",
    items: [
      "Activation",
      "Distribution",
      "Community Engagement",
      "Content Rollout",
      "Production",
    ],
  },
];

export default function Approach() {
  return (
    <section
      id="approach"
      className={styles.approach}
    >
      <div className={styles.container}>
        <div className={styles.header}>
          <div className={styles.eyebrow}>
            HOW WE WORK
          </div>

          <div className={styles.headerGrid}>
            <h2 className={styles.heading}>
              Think.
              <br />
              Make.
              <br />
              Move.
            </h2>

            <div className={styles.headerCopy}>
              <p>
                We think deeply, make with purpose,
                and move ideas into meaningful
                action.
              </p>

              <span
                className={styles.headerLine}
              />
            </div>
          </div>
        </div>

        <div className={styles.cards}>
          {approaches.map((approach) => (
            <article
              key={approach.number}
              className={styles.card}
            >
              <div className={styles.cardTop}>
                <span className={styles.number}>
                  {approach.number}
                </span>

                <span className={styles.arrow}>
                  ↗
                </span>
              </div>

              <div className={styles.cardBody}>
                <h3>{approach.title}</h3>

                <p className={styles.intro}>
                  {approach.intro}
                </p>

                <ul>
                  {approach.items.map((item) => (
                    <li key={item}>
                      <span
                        className={styles.dot}
                      />

                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className={styles.cardFooter}>
                <span>
                  EXPLORE {approach.title}
                </span>

                <span
                  className={
                    styles.footerArrow
                  }
                >
                  →
                </span>
              </div>
            </article>
          ))}
        </div>

        <div
          className={styles.bottomStatement}
        >
          <span
            className={
              styles.statementNumber
            }
          >
            03
          </span>

          <p>
            From understanding the problem,
            to creating the solution,
            to making it move.
          </p>
        </div>
      </div>
    </section>
  );
}