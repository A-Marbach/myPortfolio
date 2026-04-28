import { useState } from 'react';
import styles from './my-project-highlights.module.css';


export default function MyProjectHighlights() {
  const projects = [
    {
      img: "img/conduit.png",
      title: "Conduit",
      description:
        "Containerized a full-stack Django + Angular application, built automated CI/CD pipelines for zero-touch deployments, and enforced infrastructure stability through scripted configuration management.",
      techIcons: [
        "img/container.png",
        "img/yaml.png",
        "img/shell.png",
        "img/security.png",
        "img/cicd.png"
      ],
      github: "https://github.com/A-Marbach/conduit-container",
      doc: "/my-dso-blog/docs/projects/conduit-container"
    },
    {
      img: "img/truck_signs_api.png",
      title: "Truck Signs API",
      description: "Deployed a production-ready REST API with containerized database on a self-managed VM — covering infrastructure provisioning, container orchestration, secure DB integration, and shell-scripted automation.",
      techIcons: [
        "img/container.png",
        "img/shell.png",
        "img/yaml.png",
        "img/security.png"
      ],
      github: "https://github.com/A-Marbach/truck_signs_api",
      doc: "/my-dso-blog/docs/projects/truck-signs-api"
    },
    {
      img: "img/Minecraft.png",
      title: "Minecraft Project",
      description: "Provisioned a containerized game server with Docker Compose, focusing on resource isolation, persistent volume management, and a fully reproducible infrastructure-as-code setup.",
      techIcons: [
        "img/container.png",
        "img/yaml.png",
        "img/shell.png",
        "img/security.png"
      ],
      github: "https://github.com/A-Marbach/minecraft-server",
      doc: "/my-dso-blog/docs/projects/minecraft-server"
    },
    {
      img: "img/wordpress.png",
      title: "WordPress-Blog",
      description: "Orchestrated a multi-service WordPress + MySQL stack with Docker Compose — featuring persistent data volumes, environment-based secret management, and a single-command deployment workflow.",
      techIcons: [
        "img/container.png",
        "img/yaml.png",
        "img/shell.png",
        "img/security.png"
      ],
      github: "https://github.com/A-Marbach/wordpress",
      doc: "/my-dso-blog/docs/projects/wordpress-blog"
    },
    {
      img: "img/Baby_Tools.png",
      title: "Baby-Tools-Shop",
      description: "Deployed a containerized Django e-commerce app backed by PostgreSQL — security-hardened via environment variables, with isolated networking and production-ready container management.",
      techIcons: [
        "img/container.png",
        "img/shell.png",
        "img/security.png"],
      github: "https://github.com/A-Marbach/baby-tools-shop",
      doc: "/my-dso-blog/docs/projects/baby-tools-shop"
    },

  ];
  const [isHovered, setIsHovered] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section id="my-projects" className={styles.myProjectHighlights}>
      <div className={styles.wrapper}>
        <h1>My Project Highlights</h1>
        <p className={styles.subtitle}>Here are some of my project highlights.</p>

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
            <div
              className={styles.seeMoreWrapper}
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              <a
                href="https://github.com/A-Marbach?tab=repositories"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={isHovered ? "img/see-more-hover.png" : "img/see-more.png"}
                  alt="See more projects"
                  className={styles.seeMoreImage}
                />
              </a>
            </div>
          </div>
          <div className={styles.projectCardWrapper}>
            <div className={styles.projectCard}>
              <div className={styles.leftColumn}>
                <h2 className={styles.projectTitle}>{projects[activeIndex].title}</h2>

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

          <div className={styles.seeMoreWrapper}>
            <a
              href="https://github.com/A-Marbach?tab=repositories"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={isHovered ? "img/see-more-hover.png" : "img/see-more.png"}
                alt="See more projects"
                className={styles.seeMoreImage}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
              />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}