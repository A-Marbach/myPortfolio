import React, { useState, useEffect } from "react";
import styles from './my-skills.module.css';



export default function MySkills() {
  const skills = [
    { img: "img/html-skill.png", title: "HTML", description: ["Erstellung semantischer Webseiten", "Strukturierung von Inhalten", "Barrierefreie Layouts"] },
    { img: "img/css-skill.png", title: "CSS", description: ["Design responsiver Layouts", "Flexbox & Grid Anwendungen", "Animations- und Styling-Effekte"] },
    { img: "img/docusaurus.png", title: "Docusaurus", description: ["Dokumentations-Websites erstellen", "Markdown-Inhalte integrieren", "Theming und Anpassungen"] },
    { img: "img/python.png", title: "Python", description: ["Automatisierung von Abläufen", "Skripting für DevOps-Prozesse", "Datenanalyse und Tools"] },
    { img: "img/Shell_scripting.png", title: "Shell Scripting", description: ["Automatisierte Systemaufgaben", "Batch- und Cron-Jobs erstellen", "Systemadministration optimieren"] },
    { img: "img/yaml-skill.png", title: "YAML", description: ["Konfiguration von Services", "CI/CD Pipelines definieren", "Deployment-Templates erstellen"] },
    { img: "img/docker_container.png", title: "Docker", description: ["Containerisierung von Anwendungen", "Erstellung von Dockerfiles", "Image-Management & Registry"] },
    { img: "img/CD.png", title: "CI/CD", description: ["Automatisierte Build-Pipelines", "Test- und Deployment-Prozesse", "Integration mit GitHub/GitLab"] },
    { img: "img/it_security.png", title: "IT-Security", description: ["Sicherheitsüberprüfungen durchführen", "Penetration Tests planen", "Best Practices & Compliance"] },
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
                src={currentIndex / skillsPerPage === pageIndex ? "img/active-point.png" : "img/inactive-point.png"}
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
