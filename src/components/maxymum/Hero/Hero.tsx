"use client";

import {
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";

type Category = {
  id: number;
  name: string;
  eyebrow: string;
};

const categories: Category[] = [
  {
    id: 1,
    name: "Development",
    eyebrow: "Development / International",
  },
  {
    id: 2,
    name: "Government",
    eyebrow: "Government / Public",
  },
  {
    id: 3,
    name: "Sustainability",
    eyebrow: "Sustainability / ESG",
  },
  {
    id: 4,
    name: "Corporate",
    eyebrow: "Corporate / Brand",
  },
  {
    id: 5,
    name: "Campaign",
    eyebrow: "Integrated Campaign",
  },
  {
    id: 6,
    name: "Community",
    eyebrow: "Community",
  },
];

export default function Hero() {
  const [rotation, setRotation] = useState(0);
  const [activeIndex, setActiveIndex] = useState(0);

  const rotationRef = useRef(0);
  const velocityRef = useRef(0.12);

  const draggingRef = useRef(false);
  const pointerXRef = useRef(0);
  const lastPointerTimeRef = useRef(0);

  const animationRef = useRef<number | null>(null);

  /*
   * =====================================================
   * AUTO ROTATION
   * =====================================================
   */

  useEffect(() => {
    let lastTime = performance.now();

    const animate = (time: number) => {
      const delta = Math.min(
        (time - lastTime) / 16.67,
        3
      );

      lastTime = time;

      if (!draggingRef.current) {
        rotationRef.current +=
          velocityRef.current * delta;

        velocityRef.current +=
          (0.12 - velocityRef.current) *
          0.015 *
          delta;
      }

      setRotation(rotationRef.current);

      animationRef.current =
        requestAnimationFrame(animate);
    };

    animationRef.current =
      requestAnimationFrame(animate);

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(
          animationRef.current
        );
      }
    };
  }, []);

  /*
   * =====================================================
   * CARD POSITIONS
   * =====================================================
   */

    const cardPositions = useMemo(() => {
    const total = categories.length;

    // Ukuran orbit carousel.
    // RadiusX semakin besar = jarak horizontal antar card semakin besar.
    // RadiusY mengatur tinggi/rendah orbit.
    const radiusX = 420;
    const radiusY = 135;

    return categories.map((category, index) => {
      const angle =
        (index / total) * Math.PI * 2 +
        (rotation * Math.PI) / 180;

      // Posisi card pada orbit.
      const x = Number(
        (Math.sin(angle) * radiusX).toFixed(3),
      );

      const y = Number(
        (Math.cos(angle) * radiusY).toFixed(3),
      );

      // Kedalaman card.
      // +1 = paling depan
      // -1 = paling belakang
      const depth = Math.cos(angle);

      // Card depan sedikit lebih besar.
      const scale = Number(
        (0.76 + (depth + 1) * 0.15).toFixed(3),
      );

      // Card belakang dibuat lebih transparan.
      const opacity = Number(
        (0.38 + (depth + 1) * 0.31).toFixed(3),
      );

      // Card belakang sedikit blur.
      const blur = Number(
        Math.max(0, (1 - depth) * 1.5).toFixed(3),
      );

      // Card depan berada di atas card belakang.
      const zIndex = Math.round(
        (depth + 1) * 100,
      );

      return {
        ...category,
        x,
        y,
        scale,
        opacity,
        blur,
        zIndex,
        depth,
        angle,
      };
    });
  }, [rotation]);

  /*
   * =====================================================
   * ACTIVE CARD
   * =====================================================
   */

  useEffect(() => {
    let bestIndex = 0;
    let bestDepth = -Infinity;

    cardPositions.forEach(
      (card, index) => {
        if (card.depth > bestDepth) {
          bestDepth = card.depth;
          bestIndex = index;
        }
      }
    );

    setActiveIndex(bestIndex);
  }, [cardPositions]);

  /*
   * =====================================================
   * MOUSE MOVE
   * =====================================================
   */

  const handlePointerMove = (
    event: React.PointerEvent<HTMLDivElement>
  ) => {
    const currentX =
      event.clientX;

    /*
     * Saat mouse ditekan dan digeser.
     */

    if (draggingRef.current) {
      const deltaX =
        currentX -
        pointerXRef.current;

      rotationRef.current +=
        deltaX * 0.32;

      const now =
        performance.now();

      const deltaTime =
        Math.max(
          now -
            lastPointerTimeRef.current,
          1
        );

      const instantVelocity =
        (deltaX / deltaTime) *
        16;

      velocityRef.current =
        velocityRef.current *
          0.72 +
        instantVelocity *
          0.28;

      pointerXRef.current =
        currentX;

      lastPointerTimeRef.current =
        now;

      return;
    }

    /*
     * Mouse hanya digerakkan.
     * Carousel tetap merespons.
     */

    const rect =
      event.currentTarget.getBoundingClientRect();

    const normalized =
      (currentX -
        rect.left) /
        rect.width -
      0.5;

    velocityRef.current =
      0.08 +
      normalized * 0.05;
  };

  /*
   * =====================================================
   * MOUSE DOWN
   * =====================================================
   */

  const handlePointerDown = (
    event: React.PointerEvent<HTMLDivElement>
  ) => {
    draggingRef.current = true;

    pointerXRef.current =
      event.clientX;

    lastPointerTimeRef.current =
      performance.now();

    event.currentTarget.setPointerCapture(
      event.pointerId
    );
  };

  /*
   * =====================================================
   * MOUSE UP
   * =====================================================
   */

  const handlePointerUp = (
    event: React.PointerEvent<HTMLDivElement>
  ) => {
    draggingRef.current = false;

    event.currentTarget.releasePointerCapture(
      event.pointerId
    );
  };

  /*
   * =====================================================
   * CARD CLICK
   * =====================================================
   */

  const handleCardClick = (
    index: number
  ) => {
    const total =
      categories.length;

    const targetAngle =
      -(index / total) *
      360;

    const current =
      rotationRef.current;

    let difference =
      targetAngle -
      current;

    while (difference > 180) {
      difference -= 360;
    }

    while (difference < -180) {
      difference += 360;
    }

    const start = current;
    const end =
      current + difference;

    const duration = 650;
    const startTime =
      performance.now();

    const animateToCard = (
      time: number
    ) => {
      const progress =
        Math.min(
          (time - startTime) /
            duration,
          1
        );

      const eased =
        1 -
        Math.pow(
          1 - progress,
          3
        );

      rotationRef.current =
        start +
        (end - start) *
          eased;

      if (progress < 1) {
        requestAnimationFrame(
          animateToCard
        );
      }
    };

    requestAnimationFrame(
      animateToCard
    );

    velocityRef.current = 0.12;
  };

  /*
   * =====================================================
   * RENDER
   * =====================================================
   */

  return (
    <section className="maxymum-page">

      {/* BACKGROUND */}

      <div className="hero-background">
        <div className="background-grid" />

        <div className="background-glow" />

        <div className="background-glow background-glow-two" />
      </div>

      {/* HEADER */}

      <header className="site-header">

        <a
          href="/"
          className="brand"
        >
          <span className="brand-main">
            maxymum
          </span>

          <span className="brand-id">
            ID
          </span>
        </a>

        <nav className="main-nav">

          <a href="#work">
            WORK
          </a>

          <a href="#services">
            SERVICES
          </a>

          <a href="#about">
            ABOUT
          </a>

          <a href="#insights">
            INSIGHTS
          </a>

          <a href="#contact">
            CONTACT
          </a>

        </nav>

      </header>

      {/* HERO */}

      <section className="hero-section">

        {/* LEFT CONTENT */}

        <div className="hero-copy">

          <div className="hero-eyebrow">
            MAXYMUM ID — CREATIVE AGENCY
          </div>

          <h1>
            Elevate
            <br />
            Cause,
            <br />
            Influence
            <br />
            Thought
          </h1>

          <p>
            Harnessing the power of compelling
            visual communication to create
            diverse works that not only elevate
            causes but also influence thoughts
            and perspectives.
          </p>

          <div className="active-category">

            <span className="active-number">
              {String(
                categories[
                  activeIndex
                ]?.id ?? 1
              ).padStart(2, "0")}
            </span>

            <span>
              {
                categories[
                  activeIndex
                ]?.eyebrow
              }
            </span>

          </div>

        </div>

        {/* RIGHT VISUAL */}

        <div
          className="carousel-area"
          onPointerMove={
            handlePointerMove
          }
          onPointerDown={
            handlePointerDown
          }
          onPointerUp={
            handlePointerUp
          }
          onPointerCancel={
            handlePointerUp
          }
        >

          {/* BALLOON */}

          <div className="balloon-scene">

            <div className="balloon-glow" />

            <div className="balloon">

              <div className="balloon-top">
                <span />
                <span />
                <span />
              </div>

              <div className="balloon-body">

                <div className="balloon-highlight" />

                <div className="balloon-panel panel-one" />

                <div className="balloon-panel panel-two" />

                <div className="balloon-panel panel-three" />

                <div className="balloon-panel panel-four" />

              </div>

              <div className="balloon-neck" />

              <div className="balloon-ropes">

                <span />
                <span />
                <span />
                <span />

              </div>

              <div className="balloon-basket">
                <span />
              </div>

            </div>

          </div>

          {/* ORBIT */}

          <div className="orbit-shadow" />

          <div className="carousel-world">

            {cardPositions.map(
              (
                card,
                index
              ) => {

                const isFront =
                  card.depth >
                  0.55;

                return (
                  <button
  key={card.id}
  type="button"
  className={`category-card ${
    isFront ? "front" : ""
  }`}
  style={{
    transform: `translate3d(calc(-50% + ${card.x.toFixed(3)}px), calc(-50% + ${card.y.toFixed(3)}px), 0px) scale(${card.scale.toFixed(3)})`,
    opacity: Number(card.opacity.toFixed(3)),
    filter: `blur(${card.blur.toFixed(3)}px)`,
    zIndex: card.zIndex,
  }}
  onClick={() => handleCardClick(index)}
>

                    <span className="card-number">
                      {String(
                        card.id
                      ).padStart(
                        2,
                        "0"
                      )}
                    </span>

                    <span className="card-content">

                      <span className="card-eyebrow">
                        {card.eyebrow}
                      </span>

                      <span className="card-title">
                        {card.name}
                      </span>

                      <span className="card-brand">
                        MAXYMUM{" "}
                        <b>ID</b>
                      </span>

                    </span>

                  </button>
                );
              }
            )}

          </div>

          <div className="drag-hint">
            MOVE / DRAG TO EXPLORE
          </div>

        </div>

      </section>

      {/* CATEGORY INDICATOR */}

      <div className="category-indicator">

        {categories.map(
          (
            category,
            index
          ) => (

            <button
              key={category.id}
              type="button"
              className={`indicator ${
                index ===
                activeIndex
                  ? "active"
                  : ""
              }`}
              onClick={() =>
                handleCardClick(
                  index
                )
              }
            >

              <span className="indicator-dot" />

              <span>
                {category.eyebrow}
              </span>

            </button>

          )
        )}

      </div>

      {/* SCROLL INDICATOR */}

      <div className="scroll-indicator">
        SCROLL TO EXPLORE
      </div>

      {/* CORNER */}

      <div className="corner-button">
        N
      </div>

    </section>
  );
}