import { useState } from 'react';
import styles from './my-project-highlights.module.css';
import project1 from './conduit.png';
import project2 from './truck_signs_api.png';
import project3 from './Minecraft.png';
import project4 from './wordpress.png';
import project5 from './Baby_Tools.png';
import yaml from './yaml.png';
import python from './python.png';
import shell from './shell.png';
import container from './container.png';
import itSecurity from './security.png';
import cd from './cicd.png';
import seeMore from './see-more.png';
import seeMoreHover from './see-more-hover.png';

export default function MyProjectHighlights() {
  const projects = [
    { img: project1, title: "Conduit", description: "Deployment einer Multi-Container-Anwendung mit Backend (Django) und Frontend (Angular). Zeigt Containerisierung und CI/CD-Pipelines. Fokus liegt auf stabiler Infrastruktur, automatisierten Deployments und DevOps-Praktiken.", techIcons: [container, yaml, shell, itSecurity, cd], github: "https://github.com/A-Marbach/conduit-container", doc: "/my-dso-blog/docs/projects/conduit-container" },
    { img: project2, title: "Truck Signs API", description: "Deployment einer API inklusive Datenbank auf einer virtuellen Maschine. Projekt demonstriert Containerisierung, Setup einer stabilen Infrastruktur auf eigener VM, Datenbankintegration und Grundzüge der Automatisierung.", techIcons: [container, shell, yaml, itSecurity], github: "https://github.com/A-Marbach/truck_signs_api", doc: "/my-dso-blog/docs/projects/truck-signs-api" },
    { img: project3, title: "Minecraft Project", description: "Ein leichtgewichtiges, containerisiertes Setup zum Ausführen eines Minecraft-Java-Edition-Servers mit Docker und Docker Compose.", techIcons: [container, yaml, shell, itSecurity], github: "https://github.com/A-Marbach/minecraft-server", doc: "/my-dso-blog/docs/projects/minecraft-server" },
    { img: project4, title: "WordPress-Blog", description: "Ein Docker-Compose-Setup, das WordPress mit einer MySQL-Datenbank bereitstellt – mit persistenten Daten, konfigurierbaren Umgebungsvariablen und einfachem Deployment.", techIcons: [container, yaml, shell, itSecurity], github: "https://github.com/A-Marbach/wordpress", doc: "/my-dso-blog/docs/projects/wordpress-blog" },
    { img: project5, title: "Baby-Tools-Shop", description: "Deployment eines containerisierten Django-E-Commerce-Shops mit PostgreSQL, sicherer Konfiguration via Umgebungsvariablen und Verwaltung über das Admin-Panel.", techIcons: [container, shell, itSecurity], github: "https://github.com/A-Marbach/baby-tools-shop", doc: "/my-dso-blog/docs/projects/baby-tools-shop" },

  ];

  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section id="my-projects" className={styles.myProjectHighlights}>
      <h2>My Project Highlights</h2>
      <p>Here are some of my project highlights.</p>

      {/* Desktop */}
      <div className={styles.projectsContainer}>
        <div className={styles.projectList}>
          {projects.map((project, index) => (
            <div
              key={index}
              className={`${styles.projectListItem} ${activeIndex === index ? styles.activeItem : ''}`}
              onClick={() => setActiveIndex(index)}
            >
              <span className={styles.projectNumber}>{index + 1}.</span> {project.title}

            </div>
          ))}
          <div className={styles.seeMoreWrapper}>
            <img src={seeMore} alt="See more projects" className={styles.seeMoreImage} />
          </div>
        </div>
        <div className={styles.projectCardWrapper}>
          <div className={styles.projectCard}>
            <div className={styles.leftColumn}>
              <h3 className={styles.projectTitle}>{projects[activeIndex].title}</h3>

              <img src={projects[activeIndex].img} alt={projects[activeIndex].title} className={styles.projectImage} />
            </div>
            <div className={styles.rightColumn}>
              {projects[activeIndex].techIcons.length > 0 && (
                <div className={styles.techIcons}>
                  {projects[activeIndex].techIcons.map((icon, idx) => (
                    <img key={idx} src={icon} alt="Tech icon" />
                  ))}
                </div>
              )}
              <p className={styles.projectDescription}>{projects[activeIndex].description}</p>
              <div className={styles.buttons}>
                <a href={projects[activeIndex].doc} target="_blank" rel="noopener noreferrer" className={styles.docBtn}>Documentation</a>
                <a href={projects[activeIndex].github} target="_blank" rel="noopener noreferrer" className={styles.githubBtn}>GitHub</a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Responsive */}
      <div className={styles.projectResponsive}>
        {projects.map((project, index) => (
          <div key={index} className={styles.respCard}>
            <h3 className={styles.respTitle}>{index + 1}. {project.title}</h3>
            {project.techIcons.length > 0 && (
              <div className={styles.respTags}>
                {project.techIcons.map((icon, idx) => (
                  <img key={idx} src={icon} alt="Tech icon" className={styles.respTagIcon} />
                ))}
              </div>
            )}
            <img src={project.img} alt={project.title} className={styles.respImage} />
            <p className={styles.respDescription}>{project.description}</p>
            <div className={styles.respButtons}>
              <a href={project.doc} target="_blank" rel="noreferrer">
                <button className={styles.respButtonLight}>Documentation</button>
              </a>
              <a href={project.github} target="_blank" rel="noreferrer">
                <button className={styles.respButtonOutline}>GitHub</button>
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
