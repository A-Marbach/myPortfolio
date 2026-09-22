import styles from './hero.module.css';

export default function Hero() {
  return (
    <section id="about-me" className={styles.hero}>
      <div className={styles.wrapper}>

        <div className={styles.heroText}>
          <div className={styles.heroIntro}>
            <h1>Hey there, I am</h1>
            <h2>Artur Marbach</h2>
            <h3>Junior DevOps Engineer | Linux & Cloud Infrastructure</h3>
          </div>

          <div className={styles.heroBody}>
            <p>
              Building and automating cloud infrastructure with Linux, Docker, Terraform, Ansible, AWS and CI/CD.
              Focused on Infrastructure as Code, containerized deployments, monitoring and reliable operations.
            </p>
            <button
              onClick={() => {
                document.getElementById("contact")?.scrollIntoView({
                  behavior: "smooth",
                });
              }}
            >
              Contact me
            </button>
          </div>
        </div>

        <div className={styles.heroImage}>
          <img
            className={styles.myPhoto}
            src="img/profile.png"
            alt="Artur Marbach"
          />
        </div>
        <div className={styles.heroBodyMobile}>
          <p>
            Building and automating cloud infrastructure with Linux, Docker, Terraform, Ansible, AWS and CI/CD.
            Focused on Infrastructure as Code, containerized deployments, monitoring and reliable operations.
          </p>
          <button
            onClick={() => {
              document.getElementById("contact")?.scrollIntoView({
                behavior: "smooth",
              });
            }}
          >
            Contact me
          </button>
        </div>
      </div>
    </section>
  );
}
