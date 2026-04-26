import React from "react";
import styles from "./footer.module.css";
import Link from "@docusaurus/Link";


export default function Footer() {
  const [hover, setHover] = React.useState(false);

  return (
    <footer id="footer" className={styles.footer}>
      <div
        className={styles.arrowContainer}
        onClick={() => {
          document.getElementById("about-me")?.scrollIntoView({
            behavior: "smooth",
          });
        }}
      >
        <img
          className={styles.arrowImg}
          src={hover ? "img/Arrow-up-hover.png" : "img/Arrow-up.png"}
          alt="Arrow up"
        />
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
