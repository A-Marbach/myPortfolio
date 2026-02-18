import React, { useState, useEffect } from "react";
import styles from './my-skills.module.css';
import skill1 from './html.png';
import skill2 from './css.png';
import skill3 from './docu.png';
import skill4 from './python.png';
import skill5 from './Shell_scripting.png';
import skill6 from './yaml.png';
import skill7 from './docker_container.png';
import skill8 from './CD.png';
import skill9 from './it_security.png';
import active from './active-point.png';
import inActive from './inactive-point.png';


export default function MySkills() {
  const skills = [
    { img: skill1, title: "HTML", description: ["Erstellung semantischer Webseiten", "Strukturierung von Inhalten", "Barrierefreie Layouts"] },
    { img: skill2, title: "CSS", description: ["Design responsiver Layouts", "Flexbox & Grid Anwendungen", "Animations- und Styling-Effekte"] },
    { img: skill3, title: "Docusaurus", description: ["Dokumentations-Websites erstellen", "Markdown-Inhalte integrieren", "Theming und Anpassungen"] },
    { img: skill4, title: "Python", description: ["Automatisierung von Abläufen", "Skripting für DevOps-Prozesse", "Datenanalyse und Tools"] },
    { img: skill5, title: "Shell Scripting", description: ["Automatisierte Systemaufgaben", "Batch- und Cron-Jobs erstellen", "Systemadministration optimieren"] },
    { img: skill6, title: "YAML", description: ["Konfiguration von Services", "CI/CD Pipelines definieren", "Deployment-Templates erstellen"] },
    { img: skill7, title: "Docker", description: ["Containerisierung von Anwendungen", "Erstellung von Dockerfiles", "Image-Management & Registry"] },
    { img: skill8, title: "CI/CD", description: ["Automatisierte Build-Pipelines", "Test- und Deployment-Prozesse", "Integration mit GitHub/GitLab"] },
    { img: skill9, title: "IT-Security", description: ["Sicherheitsüberprüfungen durchführen", "Penetration Tests planen", "Best Practices & Compliance"] },
  ];

  const [isMobile, setIsMobile] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const skillsPerPage = 3;
  const totalPages = Math.ceil(skills.length / skillsPerPage);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const goToPage = (pageIndex: number) => setCurrentIndex(pageIndex * skillsPerPage);

  const visibleSkills = isMobile
    ? skills.slice(currentIndex, currentIndex + skillsPerPage)
    : skills;

  return (
    <section id="my-skills" className={styles.mySkills}>
      <h1>My Skills</h1>

      {/* Desktop */}
      {!isMobile && (
        <div className={styles.skillGrid}>
          {visibleSkills.map((skill, index) => (
            <div key={index} className={styles.skillCard}>
              <div className={styles.cardInner}>
                <div className={styles.cardFront}>
                  <img src={skill.img} alt={skill.title} />
                </div>
                <div className={styles.cardBack}>
                  <div className={styles.hoverTextContent}>
                    <h3>{skill.title}</h3>
                    <ul>
                      {skill.description.map((line, idx) => (
                        <li key={idx}>{line}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Mobile */}
      {isMobile && (
        <div className={styles.mobileSkillContent}>
          <div className={styles.mobileRow}>
            {visibleSkills.map((skill, index) => (
              <div key={index} className={styles.skillCardMobile}>
                <img src={skill.img} alt={skill.title} />
                <ul>
                  {skill.description.map((line, idx) => (
                    <li key={idx}>{line}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Pagination Dots */}
          <div className={styles.paginationDots}>
            {Array.from({ length: totalPages }).map((_, pageIndex) => (
              <img
                key={pageIndex}
                src={currentIndex / skillsPerPage === pageIndex ? active : inActive}
                alt={`page-${pageIndex + 1}`}
                className={styles.paginationImage}
                onClick={() => goToPage(pageIndex)}
              />
            ))}
          </div>
        </div>
      )}
    </section>
  );
}
