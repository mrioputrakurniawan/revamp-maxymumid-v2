"use client";

import styles from "./Footer.module.css";

const navigation = [
  { label: "WORK", href: "#work" },
  { label: "SERVICES", href: "#services" },
  { label: "ABOUT", href: "#about" },
  { label: "INSIGHTS", href: "#insights" },
  { label: "CONTACT", href: "#contact" },
];

const socialLinks = [
  {
    label: "INSTAGRAM",
    href: "#",
  },
  {
    label: "LINKEDIN",
    href: "#",
  },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const handleBackToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>

        {/* =====================================
            TOP
        ====================================== */}

        <div className={styles.top}>

          <div className={styles.brandArea}>
            <a
              href="/"
              className={styles.logo}
              aria-label="Maxymum ID home"
            >
              maxymum
              <span>ID</span>
            </a>

            <p className={styles.tagline}>
              Shaping Attitude.
              <br />
              Moving Action.
              <br />
              Elevating Cause.
            </p>
          </div>

          <div className={styles.navigation}>
            <span className={styles.label}>
              NAVIGATION
            </span>

            <nav>
              {navigation.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className={styles.navLink}
                >
                  <span>{item.label}</span>
                  <span className={styles.arrow}>
                    ↗
                  </span>
                </a>
              ))}
            </nav>
          </div>

          <div className={styles.social}>
            <span className={styles.label}>
              FOLLOW
            </span>

            <div className={styles.socialLinks}>
              {socialLinks.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className={styles.socialLink}
                  target="_blank"
                  rel="noreferrer"
                >
                  {item.label}
                  <span>↗</span>
                </a>
              ))}
            </div>
          </div>

        </div>

        {/* =====================================
            GIANT BRAND
        ====================================== */}

        <div className={styles.giantBrand}>
          <span>maxymum</span>
          <b>ID</b>
        </div>

        {/* =====================================
            BOTTOM
        ====================================== */}

        <div className={styles.bottom}>

          <div className={styles.copyright}>
            © {currentYear} MAXYMUM ID.
            <br />
            ALL RIGHTS RESERVED.
          </div>

          <div className={styles.address}>
            CHASE PLAZA
            <br />
            JAKARTA, INDONESIA
          </div>

          <button
            type="button"
            className={styles.backTop}
            onClick={handleBackToTop}
          >
            <span>BACK TO TOP</span>

            <span className={styles.backTopArrow}>
              ↑
            </span>
          </button>

        </div>

      </div>
    </footer>
  );
}