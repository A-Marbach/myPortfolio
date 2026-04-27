import React, { useState, useEffect } from "react";
import styles from './my-skills.module.css';



export default function MySkills() {
  const skills = [
    { img: "img/html-skill.png", title: "HTML", description: ["Creating semantic websites", "Structuring content", "Accessible layouts"] },
    { img: "img/css-skill.png", title: "CSS", description: ["Designing responsive layouts", "Flexbox & Grid usage", "Animations and styling effects"] },
    { img: "img/docusaurus.png", title: "Docusaurus", description: ["Creating documentation websites", "Integrating Markdown content", "Theming and customizations"] },
    { img: "img/python.png", title: "Python", description: ["Automating processes", "Scripting for DevOps workflows", "Data analysis and tools"] },
    { img: "img/Shell_scripting.png", title: "Shell Scripting", description: ["Automating system tasks", "Creating batch and cron jobs", "Optimizing system administration"] },
    { img: "img/yaml-skill.png", title: "YAML", description: ["Configuring services", "Defining CI/CD pipelines", "Creating deployment templates"] },
    { img: "img/docker_container.png", title: "Docker", description: ["Containerizing applications", "Creating Dockerfiles", "Image management & registry"] },
    { img: "img/CD.png", title: "CI/CD", description: ["Automated Build-Pipelines", "Test- and Deployment-Processes", "Integration with GitHub/GitLab"] },
    { img: "img/it_security.png", title: "IT-Security", description: ["Conducting security checks", "lanning penetration tests", "Best practices & compliance"] },
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
