import React from "react";
import Link from "@docusaurus/Link";
import styles from "./style.module.css";

export default function Imprint() {
  return (
    <main className={styles.container}>
      <h1 className={styles.title}>Legal Notice (Imprint)</h1>

      <p className={styles.subtext}>
        Information according to German § 5 TMG
      </p>

      <Link to="/" className={styles.backLink}>
        ← Back to Home
      </Link>

      <section className={styles.card}>
        <h2>Responsible Person</h2>
        <p>
          <strong>Artur Marbach</strong><br />
          Straßburger Stieg 5<br />
          22049 Hamburg<br />
          Germany
        </p>
      </section>

      <section className={styles.card}>
        <h2>Contact</h2>
        <p>
          Email:{" "}
          <a href="mailto:mail@artur-marbach.de">
            mail@artur-marbach.de
          </a>
        </p>
      </section>

      <section className={styles.card}>
        <h2>Responsible for Content (§ 55 Abs. 2 RStV)</h2>
        <p>
          Artur Marbach<br />
          Straßburger Stieg 5<br />
          22049 Hamburg
        </p>
      </section>

      <section className={styles.card}>
        <h2>Disclaimer</h2>
        <p>
          The contents of this website have been created with the greatest possible care.
          However, we do not guarantee the accuracy, completeness, or timeliness of the content.
        </p>
        <p>
          We assume no liability for external links. Operators are responsible for their content.
        </p>
      </section>
    </main>
  );
}