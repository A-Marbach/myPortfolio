import styles from './hero.module.css';

export default function Hero() {
  return (
    <section id="about-me" className={styles.hero}>
      <div className={styles.wrapper}>

      <div className={styles.heroText}>
        <div className={styles.heroIntro}>
          <h1>Hey there. I am</h1>
          <h2>Artur Marbach</h2>
          <h3>DevSecOps Engineer</h3>
        </div>

        <div className={styles.heroBody}>
          <p>
            I build IT infrastructure that is secure by design — automated, cloud-native, and ready to scale.
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
          I build IT infrastructure that is secure by design — automated, cloud-native, and ready to scale.
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
