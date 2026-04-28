import React, { useState, useEffect, useRef } from "react";
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
    { img: "img/it_security.png", title: "IT-Security", description: ["Conducting security checks", "Planning penetration tests", "Best practices & compliance"] },
  ];
  const [activePage, setActivePage] = useState(0);



  const skillsPerPage = 3;
  const totalPages = Math.ceil(skills.length / skillsPerPage);

  const rowRef = useRef<HTMLDivElement>(null);
  const isDown = useRef(false);
  const startX = useRef(0);
  const scrollLeftRef = useRef(0);

  const handleMouseDown = (e: React.MouseEvent) => {
    isDown.current = true;
    startX.current = e.pageX - (rowRef.current?.offsetLeft || 0);
    scrollLeftRef.current = rowRef.current?.scrollLeft || 0;
    if (rowRef.current) rowRef.current.style.cursor = 'grabbing';
  };

  const handleMouseLeave = () => {
    isDown.current = false;
    if (rowRef.current) rowRef.current.style.cursor = 'grab';
  };

  const handleMouseUp = () => {
    isDown.current = false;
    if (rowRef.current) rowRef.current.style.cursor = 'grab';
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDown.current) return;
    e.preventDefault();
    const x = e.pageX - (rowRef.current?.offsetLeft || 0);
    const walk = (x - startX.current) * 1.5;
    if (rowRef.current) rowRef.current.scrollLeft = scrollLeftRef.current - walk;
  };

  const [isMobile, setIsMobile] = useState(false);
  // Scroll-Event um aktive Seite zu tracken
  useEffect(() => {
    const row = rowRef.current;
    if (!row) return;
    const handleScroll = () => {
      const cardWidth = row.scrollWidth / totalPages;
      const page = Math.round(row.scrollLeft / cardWidth);
      setActivePage(page);
    };
    row.addEventListener("scroll", handleScroll);
    return () => row.removeEventListener("scroll", handleScroll);
  }, [isMobile]);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <section id="my-skills" className={styles.mySkills}>
      <div className={styles.wrapper}>
        <h1>My Skills</h1>

        {/* Desktop */}
        {!isMobile && (
          <div className={styles.skillGrid}>
            {skills.map((skill, index) => (
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

        {/* Mobile Carousel */}
        {isMobile && (
          <div className={styles.mobileSkillContent}>
            <div
              className={styles.mobileRow}
              ref={rowRef}
              onMouseDown={handleMouseDown}
              onMouseLeave={handleMouseLeave}
              onMouseUp={handleMouseUp}
              onMouseMove={handleMouseMove}
            >
              {Array.from({ length: totalPages }).map((_, pageIndex) => (
                <div key={pageIndex} className={styles.skillCardGroup}>
                  {skills.slice(pageIndex * 3, pageIndex * 3 + 3).map((skill, idx) => (
                    <div key={idx} className={styles.skillCardMobile}>
                      <img src={skill.img} alt={skill.title} />
                      <div>
                        <ul>
                          {skill.description.map((line, i) => (
                            <li key={i}>{line}</li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  ))}
                </div>
              ))}
            </div>

            <div className={styles.paginationDots}>
              {Array.from({ length: totalPages }).map((_, pageIndex) => (
                <div
                  key={pageIndex}
                  className={`${styles.dot}${activePage === pageIndex ? ` ${styles.activeDot}` : ""}`}
                  onClick={() => {
                    if (rowRef.current) {
                      const cardWidth = rowRef.current.scrollWidth / totalPages;
                      rowRef.current.scrollTo({ left: cardWidth * pageIndex, behavior: "smooth" });
                    }
                  }}
                />
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}