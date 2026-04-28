import { useState } from 'react';
import styles from './my-project-highlights.module.css';


export default function MyProjectHighlights() {
  const projects = [
    {
      img: "img/conduit.png",
      title: "Conduit",
      description:
        "Multi-container app with Django backend and Angular frontend. Containerized with CI/CD pipelines, automated deployments, and stable infrastructure.",
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
      description: "Deployment of an API including a database on a virtual machine. The project demonstrates containerization, setup of a stable infrastructure on a custom VM, database integration, and fundamentals of automation.",
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
      description: "A lightweight, containerized setup for running a Minecraft Java Edition server with Docker and Docker Compose.",
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
      description: "A Docker-Compose setup that deploys WordPress with a MySQL database – with persistent data, configurable environment variables, and simple deployment.",
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
      description: "Deployment of a containerized Django E-Commerce shop with PostgreSQL, secure configuration via environment variables, and management through the admin panel.",
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
