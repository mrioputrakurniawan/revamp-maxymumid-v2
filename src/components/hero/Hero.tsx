"use client";

import {
  useEffect,
  useMemo,
  useRef,
  useState,
  type PointerEvent,
} from "react";

import styles from "./Hero.module.css";

return (
  <section className={styles.hero}>
    <div className={styles.heroInner}>

      <div className={styles.heroCopy}>
        <div className={styles.eyebrow}>
          MAXYMUM ID — CREATIVE AGENCY
        </div>

        <h1 className={styles.title}>
          Elevate
          <br />
          Cause,
          <br />
          Influence
          <br />
          <span>Thought.</span>
        </h1>

        <p className={styles.description}>
          Harnessing the power of compelling visual
          communication to create diverse works that
          not only elevate causes but also influence
          thoughts and perspectives.
        </p>

        <div className={styles.categoryInfo}>
          <span className={styles.categoryNumber}>
            {String(categories[activeIndex]?.id ?? 1).padStart(2, "0")}
          </span>

          <span className={styles.categoryName}>
            {categories[activeIndex]?.eyebrow}
          </span>
        </div>
      </div>

      <div
        className={styles.visual}
        onPointerMove={handlePointerMove}
        onPointerDown={handlePointerDown}
        onPointerUp={handlePointerUp}
        onPointerCancel={handlePointerUp}
      >

        <div className={styles.balloonScene}>
          <div className={styles.balloonGlow} />

          <div className={styles.balloon}>
            <div className={styles.balloonTop}>
              <span />
              <span />
              <span />
            </div>

            <div className={styles.balloonBody}>
              <div className={styles.balloonHighlight} />
              <div className={`${styles.balloonPanel} ${styles.panelOne}`} />
              <div className={`${styles.balloonPanel} ${styles.panelTwo}`} />
              <div className={`${styles.balloonPanel} ${styles.panelThree}`} />
              <div className={`${styles.balloonPanel} ${styles.panelFour}`} />
            </div>

            <div className={styles.balloonNeck} />

            <div className={styles.balloonRopes}>
              <span />
              <span />
              <span />
              <span />
            </div>

            <div className={styles.balloonBasket}>
              <span />
            </div>
          </div>
        </div>

        <div className={styles.orbitShadow} />

        <div className={styles.carouselWorld}>
          {cardPositions.map((card, index) => {
            const isFront = card.depth > 0.55;

            return (
              <button
                key={card.id}
                type="button"
                className={`${styles.categoryCard} ${
                  isFront ? styles.front : ""
                }`}
                style={{
                  transform: `
                    translate3d(
                      calc(-50% + ${card.x}px),
                      calc(-50% + ${card.y}px),
                      0
                    )
                    scale(${card.scale})
                  `,
                  opacity: card.opacity,
                  filter: `blur(${card.blur}px)`,
                  zIndex: card.zIndex,
                }}
                onClick={() => handleCardClick(index)}
              >
                <span className={styles.cardNumber}>
                  {String(card.id).padStart(2, "0")}
                </span>

                <span className={styles.cardContent}>
                  <span className={styles.cardEyebrow}>
                    {card.eyebrow}
                  </span>

                  <span className={styles.cardTitle}>
                    {card.name}
                  </span>

                  <span className={styles.cardBrand}>
                    MAXYMUM <b>ID</b>
                  </span>
                </span>
              </button>
            );
          })}
        </div>

        <div className={styles.dragHint}>
          MOVE / DRAG TO EXPLORE
        </div>
      </div>
    </div>

    <div className={styles.categoryIndicator}>
      {categories.map((category, index) => (
        <button
          key={category.id}
          type="button"
          className={`${styles.indicator} ${
            index === activeIndex ? styles.active : ""
          }`}
          onClick={() => handleCardClick(index)}
        >
          <span className={styles.indicatorDot} />
          <span>{category.eyebrow}</span>
        </button>
      ))}
    </div>

    <div className={styles.scrollIndicator}>
      SCROLL TO EXPLORE
    </div>

    <div className={styles.cornerButton}>
      N
    </div>
  </section>
);