import React, { useState } from "react";
import styles from "./contact.module.css";

import mailIcon from "./mail.png";
import mailHover from "./mail-hover.png";
import linkedinIcon from "./linkin.png";
import linkedinHover from "./linkin-hover.png";

export default function AddressSection() {
  const [hoverMail, setHoverMail] = useState(false);
  const [hoverLinkedIn, setHoverLinkedIn] = useState(false);

  return (
    <section id="contact" className={styles.section}>
      <div className={styles.wrapper}>
        <h2 className={styles.heading}>Contact me</h2>

        <div className={styles.contentArea}>
          <ul className={styles.bulletList}>
            <li>I am DevSecOps Engineer</li>
            <li>Automate workflows and deployments</li>
            <li>Bridge gap between development and operations</li>
          </ul>

          <div className={styles.infoBox}>
            {/* Mail */}
            <div className={styles.infoRow}>
              <img
                src={hoverMail ? mailHover : mailIcon}
                alt="mail"
                onMouseEnter={() => setHoverMail(true)}
                onMouseLeave={() => setHoverMail(false)}
                className={styles.iconImg}
              />
              <a className={styles.link} href="mailto:mail@artur-marbach.de">
                mail@artur-marbach.de
              </a>
            </div>

           
            <div className={styles.infoRow}>
              <img
                src={hoverLinkedIn ? linkedinHover : linkedinIcon}
                alt="linkedin"
                onMouseEnter={() => setHoverLinkedIn(true)}
                onMouseLeave={() => setHoverLinkedIn(false)}
                className={styles.iconImg}
              />
              <a
                className={styles.link}
                href="https://www.linkedin.com/in/artur-marbach/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Profile Page
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
