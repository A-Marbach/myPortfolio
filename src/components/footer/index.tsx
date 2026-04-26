import React from "react";
import styles from "./footer.module.css";
import arrowUp from "./Arrow-up.png";
import arrowUpHover from "./Arrow-up-hover.png";
import Link from "@docusaurus/Link";


export default function Footer() {
  const [hover, setHover] = React.useState(false);

  return (
    <footer id="footer" className={styles.footer}>
      <div className={styles.arrowContainer}>
        <a
          href="#about"
          onMouseEnter={() => setHover(true)}
          onMouseLeave={() => setHover(false)}
        >
          <img
            className={styles.arrowImg}
            src={hover ? arrowUpHover : arrowUp}
            alt="Arrow up"
          />
        </a>
      </div>

      <div className={styles.routeArea}>
        <span className={styles.copyRight}>© Artur Marbach</span>

        <Link to="/imprint" className={styles.routeLink}>
          Legal Notice
        </Link>
      </div>
    </footer>
  );
}
