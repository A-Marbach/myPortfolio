import React, { useState } from "react";
import styles from "./contact.module.css";



export default function AddressSection() {
  const [hoverMail, setHoverMail] = useState(false);

  return (
    <section id="contact" className={styles.section}>
      <div className={styles.wrapper}>
        <h2 className={styles.heading}>Let's Connect!</h2>

        <div className={styles.contentArea}>
          
          <ul className={styles.bulletList}>
            <li>DevOps | Cloud | Linux </li>

            <li>Open to opportunities in Junior DevOps, Cloud Infrastructure, Infrastructure Automation and Linux-focused IT Operations.</li>
          </ul>

          <div className={styles.infoBox}>
            {/* Mail */}
            <div className={styles.infoRow}>
              <img
                src={hoverMail ? "img/mail-hover.png" : "img/mail.png"}
                alt="mail"
                onMouseEnter={() => setHoverMail(true)}
                onMouseLeave={() => setHoverMail(false)}
                className={styles.iconImg}
              />
              <a className={styles.link} href="mailto:mail@artur-marbach.de">
                mail@artur-marbach.de
              </a>
            </div>


          
          </div>
        </div>
      </div>
    </section>
  );
}
