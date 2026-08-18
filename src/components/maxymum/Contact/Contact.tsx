"use client";

import { useState } from "react";
import styles from "./Contact.module.css";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (
    event: React.FormEvent<HTMLFormElement>,
  ) => {
    event.preventDefault();

    setSubmitted(true);
  };

  return (
    <section
      id="contact"
      className={styles.section}
    >
      <div className={styles.noise} />

      <div className={styles.glow} />

      <div className={styles.container}>
        {/* =====================================
            SECTION LABEL
        ====================================== */}

        <div className={styles.label}>
          <span>04</span>
          <span>LET'S WORK TOGETHER</span>
        </div>

        {/* =====================================
            MAIN CTA
        ====================================== */}

        <div className={styles.hero}>
          <h2>
            Ready to
            <br />
            <span>Take Flight?</span>
          </h2>

          <div className={styles.heroSide}>
            <p>
              Have a brief, a bold idea,
              or just a question?
            </p>

            <p>
              We&apos;re ready to collaborate
              and co-create.
            </p>

            <a
              href="mailto:contact@maxymum.id"
              className={styles.emailLink}
            >
              contact@maxymum.id
              <span>↗</span>
            </a>
          </div>
        </div>

        {/* =====================================
            CONTACT GRID
        ====================================== */}

        <div className={styles.contactGrid}>
          {/* ADDRESS */}

          <div className={styles.contactBlock}>
            <span className={styles.blockLabel}>
              ADDRESS
            </span>

            <p>
              Chase Plaza
              <br />
              Jl. Jenderal Sudirman
              Kav. 21, 6th Floor
              <br />
              Kuningan, Karet,
              Setiabudi
              <br />
              South Jakarta City
              <br />
              Jakarta 12920
            </p>
          </div>

          {/* PHONE */}

          <div className={styles.contactBlock}>
            <span className={styles.blockLabel}>
              CALL US
            </span>

            <a
              href="tel:+622125989877"
              className={styles.contactLink}
            >
              +62 21 2598 9877
            </a>
          </div>

          {/* EMAIL */}

          <div className={styles.contactBlock}>
            <span className={styles.blockLabel}>
              EMAIL US
            </span>

            <a
              href="mailto:contact@maxymum.id"
              className={styles.contactLink}
            >
              contact@maxymum.id
            </a>
          </div>

          {/* ACTION */}

          <div className={styles.contactBlock}>
            <span className={styles.blockLabel}>
              START A CONVERSATION
            </span>

            <a
              href="#contact-form"
              className={styles.startButton}
            >
              LET&apos;S TALK
              <span>↗</span>
            </a>
          </div>
        </div>

        {/* =====================================
            CONTACT FORM
        ====================================== */}

        <div
          id="contact-form"
          className={styles.formSection}
        >
          <div className={styles.formIntro}>
            <span>01</span>

            <p>
              Tell us what you&apos;re
              working on.
            </p>
          </div>

          {submitted ? (
            <div className={styles.success}>
              <span className={styles.successNumber}>
                ✓
              </span>

              <div>
                <h3>
                  Thank you.
                </h3>

                <p>
                  Your message has been
                  sent. We&apos;ll get back
                  to you soon.
                </p>
              </div>
            </div>
          ) : (
            <form
              className={styles.form}
              onSubmit={handleSubmit}
            >
              <div className={styles.field}>
                <label htmlFor="name">
                  YOUR NAME
                </label>

                <input
                  id="name"
                  name="name"
                  type="text"
                  placeholder="Your Name"
                  required
                />
              </div>

              <div className={styles.field}>
                <label htmlFor="email">
                  YOUR EMAIL
                </label>

                <input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="Your Email"
                  required
                />
              </div>

              <div className={styles.field}>
                <label htmlFor="subject">
                  SUBJECT
                </label>

                <input
                  id="subject"
                  name="subject"
                  type="text"
                  placeholder="Subject"
                  required
                />
              </div>

              <div className={styles.field}>
                <label htmlFor="message">
                  YOUR MESSAGE
                </label>

                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  placeholder="Tell us about your idea..."
                  required
                />
              </div>

              <button
                type="submit"
                className={styles.submit}
              >
                SEND MESSAGE
                <span>↗</span>
              </button>
            </form>
          )}
        </div>

        {/* =====================================
            FOOTER INTRO
        ====================================== */}

        <div className={styles.bottom}>
          <span className={styles.bottomBrand}>
            maxymum<span>ID</span>
          </span>

          <span className={styles.bottomText}>
            SHAPING ATTITUDE.
            <br />
            MOVING ACTION.
            <br />
            ELEVATING CAUSE.
          </span>

          <span className={styles.bottomArrow}>
            ↑
          </span>
        </div>
      </div>
    </section>
  );
}