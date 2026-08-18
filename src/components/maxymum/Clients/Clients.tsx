"use client";

import { useEffect, useRef, useState } from "react";
import styles from "./Clients.module.css";

type Client = {
  number: string;
  name: string;
  category: string;
};

const clients: Client[] = [
  {
    number: "01",
    name: "United Nations",
    category: "Global Institution",
  },
  {
    number: "02",
    name: "World Bank",
    category: "Global Institution",
  },
  {
    number: "03",
    name: "World Health Organization",
    category: "Global Institution",
  },
  {
    number: "04",
    name: "European Union",
    category: "Global Institution",
  },
  {
    number: "05",
    name: "USAID",
    category: "International Development",
  },
  {
    number: "06",
    name: "UNDP",
    category: "International Development",
  },
  {
    number: "07",
    name: "UNICEF",
    category: "International Development",
  },
  {
    number: "08",
    name: "UN Women",
    category: "International Development",
  },
  {
    number: "09",
    name: "GIZ",
    category: "International Development",
  },
  {
    number: "10",
    name: "KPK",
    category: "Government",
  },
  {
    number: "11",
    name: "Kimia Farma",
    category: "Corporate",
  },
  {
    number: "12",
    name: "ID COMM",
    category: "Corporate",
  },
  {
    number: "13",
    name: "Yayasan Belantara",
    category: "Social & Environment",
  },
  {
    number: "14",
    name: "Pulse Lab Jakarta",
    category: "Research & Innovation",
  },
];

export default function Clients() {
  const trackRef = useRef<HTMLDivElement | null>(null);

  const [isPaused, setIsPaused] = useState(false);
  const [activeClient, setActiveClient] = useState(0);

  useEffect(() => {
    const interval = window.setInterval(() => {
      if (!isPaused) {
        setActiveClient((current) => {
          return (current + 1) % clients.length;
        });
      }
    }, 2400);

    return () => {
      window.clearInterval(interval);
    };
  }, [isPaused]);

  useEffect(() => {
    const track = trackRef.current;

    if (!track) {
      return;
    }

    const activeElement =
      track.querySelector<HTMLElement>(
        `[data-client-index="${activeClient}"]`,
      );

    if (!activeElement) {
      return;
    }

    const targetLeft =
      activeElement.offsetLeft -
      track.clientWidth / 2 +
      activeElement.clientWidth / 2;

    track.scrollTo({
      left: targetLeft,
      behavior: "smooth",
    });
  }, [activeClient]);

  const handleClientClick = (index: number) => {
    setActiveClient(index);
  };

  return (
    <section
      id="clients"
      className={styles.clients}
    >
      <div className={styles.backgroundGlow} />

      <div className={styles.topLine} />

      <div className={styles.container}>
        {/* ======================================
            HEADER
        ====================================== */}

        <div className={styles.header}>
          <div className={styles.eyebrow}>
            <span className={styles.eyebrowNumber}>
              05
            </span>

            <span>
              TRUSTED BY
            </span>
          </div>

          <div className={styles.headerCopy}>
            <h2>
              Built with
              <br />
              <span>people who matter.</span>
            </h2>

            <p>
              From global institutions and development
              organisations to government and private
              sector partners, Maxymum ID works across
              disciplines to turn complex ideas into
              meaningful communication.
            </p>
          </div>
        </div>

        {/* ======================================
            CLIENT MARQUEE
        ====================================== */}

        <div
          className={styles.marqueeWrapper}
          onMouseEnter={() =>
            setIsPaused(true)
          }
          onMouseLeave={() =>
            setIsPaused(false)
          }
        >
          <div className={styles.marqueeLabel}>
            <span>
              PARTNERS / CLIENTS
            </span>

            <span className={styles.marqueeArrow}>
              →
            </span>
          </div>

          <div
            ref={trackRef}
            className={styles.marquee}
          >
            {clients.map(
              (client, index) => {
                const isActive =
                  index === activeClient;

                return (
                  <button
                    key={client.number}
                    type="button"
                    data-client-index={index}
                    className={`${styles.clientCard} ${
                      isActive
                        ? styles.active
                        : ""
                    }`}
                    onClick={() =>
                      handleClientClick(
                        index,
                      )
                    }
                  >
                    <span
                      className={
                        styles.clientNumber
                      }
                    >
                      {client.number}
                    </span>

                    <span
                      className={
                        styles.clientCategory
                      }
                    >
                      {client.category}
                    </span>

                    <span
                      className={
                        styles.clientName
                      }
                    >
                      {client.name}
                    </span>

                    <span
                      className={
                        styles.clientLine
                      }
                    />

                    <span
                      className={
                        styles.clientArrow
                      }
                    >
                      ↗
                    </span>
                  </button>
                );
              },
            )}
          </div>
        </div>

        {/* ======================================
            ACTIVE CLIENT
        ====================================== */}

        <div className={styles.activeClient}>
          <div
            className={
              styles.activeClientNumber
            }
          >
            {clients[
              activeClient
            ]?.number}
          </div>

          <div
            className={
              styles.activeClientContent
            }
          >
            <span>
              CURRENTLY SHOWING
            </span>

            <strong>
              {clients[
                activeClient
              ]?.name}
            </strong>
          </div>

          <div
            className={
              styles.activeClientCategory
            }
          >
            {
              clients[
                activeClient
              ]?.category
            }
          </div>
        </div>

        {/* ======================================
            PARTNER STATEMENT
        ====================================== */}

        <div className={styles.statement}>
          <div
            className={
              styles.statementNumber
            }
          >
            05 /
          </div>

          <div
            className={
              styles.statementText
            }
          >
            <p>
              Strong partnerships turn
              good ideas into
              <span>
                meaningful impact.
              </span>
            </p>
          </div>
        </div>

        {/* ======================================
            BOTTOM NAVIGATION
        ====================================== */}

        <div className={styles.bottom}>
          <span>
            {String(
              activeClient + 1,
            ).padStart(2, "0")}
          </span>

          <div
            className={
              styles.progressTrack
            }
          >
            <div
              className={
                styles.progressBar
              }
              style={{
                width: `${
                  ((activeClient + 1) /
                    clients.length) *
                  100
                }%`,
              }}
            />
          </div>

          <span>
            {String(
              clients.length,
            ).padStart(2, "0")}
          </span>
        </div>
      </div>
    </section>
  );
}