import styles from './header.module.css';
import { useState } from 'react';


export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [hover, setHover] = useState(false);

  const scrollToSection = (id: string) => {
    const section = document.getElementById(id);
    if (section) {
      const yOffset = -100;
      const y = section.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
      setMobileOpen(false); // Overlay schließen nach Klick
    }
  };

  const links = ["about-me", "my-skills", "my-projects", "contact"];

  return (
    <header className={styles.header}>
      {/* Desktop Navigation */}
      <nav className={styles.nav}>
        <ul className={styles.navList}>
          {links.map((id) => (
            <li key={id}>
              <a
                href={`#${id}`}
                onClick={(e) => { e.preventDefault(); scrollToSection(id); }}
              >
                {id.replace("-", " ").replace(/\b\w/g, c => c.toUpperCase())}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      {/* Mobile Toggle Icon */}
      <div
        className={styles.mobileMenuIcon}
        onClick={() => setMobileOpen(!mobileOpen)}
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
      >
        <img
          src={mobileOpen ? "img/close.png" : hover ? "img/menu-icon-hover.png" : "img/menu-icon.png"}
          alt={mobileOpen ? "Close Menu" : "Open Menu"}
        />
      </div>

      {/* Mobile Overlay */}
      <div className={`${styles.mobileOverlay} ${mobileOpen ? styles.open : ""}`}>
        <ul>
          {links.map((id) => (
            <li key={id}>
              <a
                href={`#${id}`}
                onClick={(e) => { e.preventDefault(); scrollToSection(id); }}
              >
                {id.replace("-", " ").replace(/\b\w/g, c => c.toUpperCase())}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
}
