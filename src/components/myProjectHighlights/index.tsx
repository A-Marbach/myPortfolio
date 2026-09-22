import { useState } from 'react';
import styles from './my-project-highlights.module.css';


export default function MyProjectHighlights() {
  const projects = [
  {
    img: "img/aws-vikunja.png",
    title: "Vikunja on AWS ECS Fargate",
    description:
      "Built an AWS environment with Terraform using ECS Fargate, RDS PostgreSQL, S3, Secrets Manager, CloudWatch and SNS. Tested service recovery, persistent storage and database backup and recovery.",
    techIcons: [
      "img/container.png",
      "img/cicd.png",
      "img/security.png",
      "img/yaml.png"
    ],
    github: "https://github.com/A-Marbach/vikunja-aws-fargate",
    doc: "/myPortfolio/docs/projects/vikunja-aws-fargate"
  },

  {
    img: "img/aws-img.png",
    title: "Conduit AWS Infrastructure",
    description:
      "Provisioned AWS infrastructure with Terraform including VPC, IAM, security groups and EC2. Automated Ubuntu configuration with Ansible, deployed the application with Docker and added GitHub Actions and CloudWatch monitoring.",
    techIcons: [
      "img/container.png",
      "img/yaml.png",
      "img/security.png",
      "img/cicd.png"
    ],
    github: "https://github.com/A-Marbach/conduit-aws",
    doc: "/myPortfolio/docs/projects/conduit-aws"
  },

  {
    img: "img/k3s-img.png",
    title: "k3s Infrastructure",
    description:
      "Built a multi-node Kubernetes cluster on Hetzner Cloud using Terraform and Ansible. Configured Traefik, cert-manager, Helm deployments and Kubernetes observability with Prometheus and Grafana.",
    techIcons: [
      "img/container.png",
      "img/security.png",
      "img/yaml.png"
    ],
    github: "https://github.com/A-Marbach/k3s-infrastructure",
    doc: "/myPortfolio/docs/projects/k3s-infrastructure"
  },

  {
    img: "img/bookstore-img.png",
    title: "BookStore DevSecOps Pipeline",
    description:
      "Containerized an ASP.NET Core REST API with MongoDB and implemented CI/CD with GitHub Actions. Integrated Hadolint, Trivy and Gitleaks security scanning and monitored the deployment with Prometheus and Grafana.",
    techIcons: [
      "img/container.png",
      "img/shell.png",
      "img/cicd.png",
      "img/yaml.png",
      "img/security.png"
    ],
    github: "https://github.com/A-Marbach/bookStoreAPI",
    doc: "/myPortfolio/docs/projects/bookstore-api"
  },

  {
    img: "img/linux-server-automation.png",
    title: "Linux Server Automation",
    description:
      "Provisioned an Ubuntu 24.04 server with Terraform and automated configuration with Ansible, including user management, SSH hardening, firewall rules, NGINX and Fail2Ban.",
    techIcons: [
      "img/yaml.png",
      "img/security.png"
    ],
    github: "https://github.com/A-Marbach/terraform-ansible-hetzner",
    doc: "/myPortfolio/docs/projects/terraform-ansible-hetzner"
  }
];
  const [isHovered, setIsHovered] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section id="my-projects" className={styles.myProjectHighlights}>
      <div className={styles.wrapper}>
        <h1>My Project Highlights</h1>
        <p className={styles.subtitle}>
         My projects focus on cloud infrastructure, automation, CI/CD and monitoring with Terraform, Ansible, Docker, AWS and Kubernetes.
        </p>

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
              href="https://a-marbach.github.io/myPortfolio/docs/projects/overview/"
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