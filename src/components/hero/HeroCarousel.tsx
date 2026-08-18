"use client";

import { useCallback, useEffect, useState } from "react";

type Category = {
  id: string;
  number: string;
  category: string;
  title: string;
  className: string;
};

const categories: Category[] = [
  {
    id: "development",
    number: "01",
    category: "Development / International",
    title: "Development",
    className: "development",
  },
  {
    id: "government",
    number: "02",
    category: "Government / Public",
    title: "Government",
    className: "government",
  },
  {
    id: "sustainability",
    number: "03",
    category: "Sustainability / ESG",
    title: "Sustainability",
    className: "sustainability",
  },
  {
    id: "corporate",
    number: "04",
    category: "Corporate / Brand",
    title: "Corporate",
    className: "corporate",
  },
  {
    id: "campaign",
    number: "05",
    category: "Integrated Campaign",
    title: "Campaign",
    className: "campaign",
  },
  {
    id: "community",
    number: "06",
    category: "Community",
    title: "Community",
    className: "community",
  },
];

export default function HeroCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const goTo = useCallback((index: number) => {
    const normalized =
      ((index % categories.length) + categories.length) % categories.length;

    setActiveIndex(normalized);
  }, []);

  const next = useCallback(() => {
    setActiveIndex((current) => (current + 1) % categories.length);
  }, []);

  useEffect(() => {
    if (isPaused) return;

    const timer = window.setInterval(() => {
      next();
    }, 4500);

    return () => {
      window.clearInterval(timer);
    };
  }, [isPaused, next]);

  const getPosition = (index: number) => {
    const total = categories.length;

    let difference = index - activeIndex;

    if (difference > total / 2) {
      difference -= total;
    }

    if (difference < -total / 2) {
      difference += total;
    }

    return difference;
  };

  return (
    <div
      className="mx-carousel"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onFocus={() => setIsPaused(true)}
      onBlur={() => setIsPaused(false)}
    >
      <div className="mx-carousel-stage">
        {categories.map((item, index) => {
          const position = getPosition(index);

          const visible =
            position >= -3 && position <= 3;

          return (
            <button
              key={item.id}
              type="button"
              aria-label={`View ${item.category}`}
              className={[
                "mx-card",
                `mx-card-${item.className}`,
                position === 0 ? "is-active" : "",
                position < 0 ? "is-left" : "",
                position > 0 ? "is-right" : "",
                !visible ? "is-hidden" : "",
              ]
                .filter(Boolean)
                .join(" ")}
              style={
                {
                  "--mx-position": position,
                } as React.CSSProperties
              }
              onClick={() => goTo(index)}
            >
              <div className="mx-card-shine" />
              <div className="mx-card-overlay" />

              <div className="mx-card-content">
                <span className="mx-card-number">
                  {item.number}
                </span>

                <div className="mx-card-bottom">
                  <span className="mx-card-category">
                    {item.category}
                  </span>

                  <strong>{item.title}</strong>

                  <span className="mx-card-brand">
                    MAXYMUM <b>ID</b>
                  </span>
                </div>
              </div>
            </button>
          );
        })}
      </div>

      <div className="mx-carousel-categories">
        {categories.map((item, index) => (
          <button
            key={item.id}
            type="button"
            className={
              index === activeIndex
                ? "mx-category is-active"
                : "mx-category"
            }
            onClick={() => goTo(index)}
          >
            <span className="mx-category-dot" />
            <span>{item.category}</span>
          </button>
        ))}
      </div>
    </div>
  );
}