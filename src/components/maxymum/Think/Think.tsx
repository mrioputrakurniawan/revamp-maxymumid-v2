"use client";

import styles from "./Think.module.css";

const principles = [
  {
    number: "01",
    title: "Think",
    text: "We begin with ideas, context, and the questions that shape meaningful communication.",
  },
  {
    number: "02",
    title: "Make",
    text: "We turn strategic thinking into visual systems, experiences, and creative work.",
  },
  {
    number: "03",
    title: "Move",
    text: "We create communication that moves people, perspectives, and action.",
  },
];

export default function Think() {
  return (
    <section className={styles.section} id="about">
      <div className={styles.backgroundGlow} />

      <div className={styles.container}>
        <div className={styles.topRow}>
          <div className={styles.eyebrow}>
            MAXYMUM ID — OUR APPROACH
          </div>

          <div className={styles.index}>
            02 / 05
          </div>
        </div>

        <div className={styles.headingRow}>
          <div className={styles.heading}>
            <h2>
              Ideas that move
              <br />
              <span>people &amp; perspectives.</span>
            </h2>
          </div>

          <div className={styles.intro}>
            <p>
              We create visual communication that
              turns complex ideas into experiences
              people can understand, remember,
              and act on.
            </p>

            <div className={styles.introLine}>
              MAXYMUM ID
            </div>
          </div>
        </div>

        <div className={styles.principles}>
          {principles.map((item) => (
            <article
              className={styles.principle}
              key={item.number}
            >
              <div className={styles.principleNumber}>
                {item.number}
              </div>

              <div className={styles.principleContent}>
                <h3>{item.title}</h3>

                <p>{item.text}</p>
              </div>

              <div className={styles.arrow}>
                ↗
              </div>
            </article>
          ))}
        </div>

        <div className={styles.statement}>
          <span className={styles.statementSmall}>
            FROM IDEA
          </span>

          <span className={styles.statementArrow}>
            →
          </span>

          <span className={styles.statementLarge}>
            TO IMPACT.
          </span>
        </div>
      </div>
    </section>
  );
}