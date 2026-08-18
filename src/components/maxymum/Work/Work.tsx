"use client";

import { useState } from "react";
import styles from "./Work.module.css";

type Project = {
  id: string;
  number: string;
  title: string;
  category: string;
  client: string;
  year: string;
  description: string;
};

const projects: Project[] = [
  {
    id: "world-bank",
    number: "01",
    title: "World Bank Moving Forward Report",
    category: "Desktop Publishing",
    client: "World Bank",
    year: "2026",
    description:
      "A publication project translating complex development information into a clear and engaging visual communication experience.",
  },
  {
    id: "adhi-persada",
    number: "02",
    title: "Adhi Persada Beton Annual Report",
    category: "Brand & Digital Experience",
    client: "Adhi Persada Beton",
    year: "2026",
    description:
      "Annual reporting presented through a structured visual system that brings data, information and corporate storytelling together.",
  },
  {
    id: "emis",
    number: "03",
    title: "EMIS — Manajemen Perubahan",
    category: "Motion & Interactive Media",
    client: "EMIS",
    year: "2026",
    description:
      "A change-management communication project using visual storytelling to make complex ideas easier to understand.",
  },
  {
    id: "idcomm-web",
    number: "04",
    title: "ID COMM 1 Dekade Rebranding — Website",
    category: "Brand & Digital Experience",
    client: "ID COMM",
    year: "2026",
    description:
      "A digital experience developed as part of the broader 1 Dekade rebranding initiative.",
  },
  {
    id: "cibulao",
    number: "05",
    title: "Cibulao Coffee Branding",
    category: "Brand & Digital Experience",
    client: "Cibulao Coffee",
    year: "2026",
    description:
      "A social-forestry branding project connecting identity, storytelling and the cultural context behind the product.",
  },
  {
    id: "unicef",
    number: "06",
    title: "UNICEF — Overcoming Gender Barriers & HPV Immunisation",
    category: "Motion & Interactive Media",
    client: "UNICEF",
    year: "2026",
    description:
      "A communication initiative developed to make important public-health and social messages more accessible and engaging.",
  },
];

export default function Work() {
  const [activeIndex, setActiveIndex] = useState(0);

  const activeProject = projects[activeIndex];

  return (
    <section id="work" className={styles.section}>
      <div className={styles.container}>
        {/* HEADER */}

        <div className={styles.header}>
          <div className={styles.eyebrow}>
            <span>04</span>
            SELECTED WORK
          </div>

          <div className={styles.headerGrid}>
            <h2>
              Work that
              <br />
              moves <em>people.</em>
            </h2>

            <div className={styles.headerCopy}>
              <p>
                We create visual communication that turns
                complex ideas into experiences people can
                understand, remember and act on.
              </p>

              <div className={styles.projectCount}>
                <strong>{String(projects.length).padStart(2, "0")}</strong>
                <span>SELECTED PROJECTS</span>
              </div>
            </div>
          </div>
        </div>

        {/* FEATURED PROJECT */}

        <div className={styles.featured}>
          <div className={styles.visual}>
            <div className={styles.visualGrid} />

            <div className={styles.visualGlow} />

            <div className={styles.visualOrbit}>
              <span />
              <span />
              <span />
            </div>

            <div className={styles.visualLabel}>
              MAXYMUM
              <b>ID</b>
            </div>

            <div className={styles.visualNumber}>
              {activeProject.number}
            </div>

            <div className={styles.visualTitle}>
              {activeProject.title}
            </div>

            <div className={styles.visualArrow}>↗</div>
          </div>

          <div className={styles.info}>
            <div className={styles.infoTop}>
              <span>{activeProject.number}</span>

              <span>{activeProject.category}</span>
            </div>

            <div className={styles.infoMain}>
              <span className={styles.infoEyebrow}>
                CURRENTLY SHOWING
              </span>

              <h3>{activeProject.title}</h3>

              <p>{activeProject.description}</p>
            </div>

            <div className={styles.meta}>
              <div>
                <span>CLIENT</span>
                <strong>{activeProject.client}</strong>
              </div>

              <div>
                <span>YEAR</span>
                <strong>{activeProject.year}</strong>
              </div>
            </div>

            <button type="button" className={styles.explore}>
              <span>EXPLORE PROJECT</span>
              <span>↗</span>
            </button>
          </div>
        </div>

        {/* PROJECT NAVIGATION */}

        <div className={styles.projectNavigation}>
          <div className={styles.navigationHeader}>
            <span>SELECTED PROJECTS</span>

            <span>01 — {String(projects.length).padStart(2, "0")}</span>
          </div>

          <div className={styles.projectList}>
            {projects.map((project, index) => {
              const isActive = index === activeIndex;

              return (
                <button
                  key={project.id}
                  type="button"
                  className={`${styles.projectItem} ${
                    isActive ? styles.active : ""
                  }`}
                  onClick={() => setActiveIndex(index)}
                >
                  <span className={styles.itemNumber}>
                    {project.number}
                  </span>

                  <span className={styles.itemTitle}>
                    {project.title}
                  </span>

                  <span className={styles.itemCategory}>
                    {project.category}
                  </span>

                  <span className={styles.itemArrow}>
                    {isActive ? "↗" : "→"}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* CLOSING STATEMENT */}

        <div className={styles.statement}>
          <span className={styles.statementNumber}>04 /</span>

          <p>
            Complex issues deserve communication that is
            clear, memorable and meaningful.
          </p>

          <span className={styles.statementArrow}>↓</span>
        </div>
      </div>
    </section>
  );
}