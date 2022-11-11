import styles from "./HeroHome.module.scss";

const HeroHome = () => {
  return (
    <section className={styles.hero}>
      <div className={styles.content}>
        <span>Welcome To Cyborg</span>
        <h1>
          <span>BROWSE</span> OUR POPULAR GAMES HERE
        </h1>
        <button>Browse Now</button>
      </div>
    </section>
  );
};

export default HeroHome;
