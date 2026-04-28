import React from "react";
import Link from "@docusaurus/Link";
import Header from "../../components/header";
import Footer from "../../components/footer";
import styles from "./style.module.css";

export default function Imprint() {
  return (
    <>
      <Header />
      <main>
        <section className={styles.hero}>
          <div className={styles.heroWrapper}>
            <p className={styles.heroSub}>Information according to German § 5 TMG</p>
            <h1 className={styles.heroTitle}>Legal Notice</h1>
          </div>
        </section>

        <section className={styles.content}>
          <div className={styles.wrapper}>
            <Link to="/" className={styles.backLink}>← Back to Home</Link>

            <div className={styles.grid}>
              <div className={styles.card}>
                <h2 className={styles.cardTitle}>Responsible Person</h2>
                <p className={styles.cardText}>
                  <strong>Artur Marbach</strong><br />
                  Straßburger Stieg 5<br />
                  22049 Hamburg<br />
                  Germany
                </p>
              </div>

              <div className={styles.card}>
                <h2 className={styles.cardTitle}>Contact</h2>
                <p className={styles.cardText}>
                  Email:{" "}
                  <a href="mailto:mail@artur-marbach.de" className={styles.cardLink}>
                    mail@artur-marbach.de
                  </a>
                </p>
              </div>

              <div className={styles.card}>
                <h2 className={styles.cardTitle}>Responsible for Content</h2>
                <p className={styles.cardText}>
                  § 55 Abs. 2 RStV<br /><br />
                  Artur Marbach<br />
                  Straßburger Stieg 5<br />
                  22049 Hamburg
                </p>
              </div>

              <div className={styles.card}>
                <h2 className={styles.cardTitle}>Disclaimer</h2>
                <p className={styles.cardText}>
                  The contents of this website have been created with the greatest possible care.
                  However, we do not guarantee the accuracy, completeness, or timeliness of the content.
                </p>
                <p className={styles.cardText}>
                  We assume no liability for external links. Operators are responsible for their content.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
