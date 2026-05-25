import { useState } from 'react';
import styles from './my-project-highlights.module.css';


export default function MyProjectHighlights() {
  const projects = [
    
    {
      img: "img/bookstore-api.jpg",
      title: "Book-Store API",
      description: "Built a containerized ASP.NET Core 8 REST API with MongoDB — featuring a multi-stage Dockerfile, automated CI/CD pipeline with Hadolint, Trivy and Gitleaks security scanning, and live monitoring via Prometheus and Grafana on a Hetzner VM.",
      techIcons: [
        "img/container.png",
        "img/shell.png",
        "img/cicd.png",
        "img/security.png"],
      github: "https://github.com/A-Marbach/bookStoreAPI",
      doc: "/myPortfolio/docs/projects/bookstore-api"
    },
    {
      img: "img/conduit.png",
      title: "Conduit-Container",
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
      doc: "/myPortfolio/docs/projects/conduit-container"
    },
     {
      img: "img/da-bubble.png",
      imgRadius: "36px",
      title: "Da-Bubble",
      description: "Containerized an Angular chat application and deployed it via a fully automated CI/CD pipeline — including Docker builds, GHCR image registry, CodeQL security scanning, SSH-based VM deployment, and Kubernetes orchestration with minikube.",
      techIcons: [
        "img/container.png",
        "img/yaml.png",
        "img/security.png",
        "img/cicd.png"
      ],
      github: "https://github.com/A-Marbach/daBubble",
      doc: "/myPortfolio/docs/projects/da-bubble"
    },
    {
      img: "img/truck_signs_api.png",
      title: "Truck Signs API",
      description: "Deployed a containerized REST API with PostgreSQL on a self-managed VM — featuring Docker networking, environment-based configuration, and automated deployment scripts.",
      techIcons: [
        "img/container.png",
        "img/shell.png",
        "img/yaml.png",
        "img/security.png"
      ],
      github: "https://github.com/A-Marbach/truck_signs_api",
      doc: "/myPortfolio/docs/projects/truck-signs-api"
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
      doc: "/myPortfolio/docs/projects/wordpress-blog"
    },
    

  ];
  const [isHovered, setIsHovered] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section id="my-projects" className={styles.myProjectHighlights}>
      <div className={styles.wrapper}>
        <h1>My Project Highlights</h1>
        <p className={styles.subtitle}>Each project was containerized, automated with CI/CD pipelines, and deployed using Docker or Docker Compose — from development to production.</p>

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
                href="https://a-marbach.github.io/myPortfolio/docs/projects/overview/"
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

                <img src={projects[activeIndex].img} alt={projects[activeIndex].title} className={styles.projectImage} style={projects[activeIndex].imgRadius ? { borderRadius: projects[activeIndex].imgRadius } : {}} />
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
              <img src={project.img} alt={project.title} className={styles.respImage} style={project.imgRadius ? { borderRadius: project.imgRadius } : {}} />
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