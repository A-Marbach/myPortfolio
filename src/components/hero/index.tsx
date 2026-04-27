import styles from './hero.module.css';

export default function Hero() {
  return (
    <section id="about-me" className={styles.hero}>
      <div className={styles.heroText}>
        <div className={styles.heroIntro}>
          <h1>Hey there. I am</h1>
          <h2>Artur Marbach</h2>
          <h3>DevSecOps Engineer</h3>
        </div>

        <div className={styles.heroBody}>
          <p>
            I support companies in designing their IT infrastructure in a secure, efficient, and scalable way.
            With a focus on automation, cloud solutions, and IT security, I ensure reliable and high-performance systems.
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
          I support companies in designing their IT infrastructure in a secure, efficient, and scalable way.
          With a focus on automation, cloud solutions, and IT security, I ensure reliable and high-performance systems.
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
    </section>
  );
}
