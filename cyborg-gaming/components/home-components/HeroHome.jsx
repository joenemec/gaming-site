import Link from "next/link";

import { HeroHomeContent } from "./HomeContent";

import styles from "./HeroHome.module.scss";

const HeroHome = () => {
  return (
    <div className={styles.hero}>
      {HeroHomeContent.map((content, index) => (
        <div className={styles.content} key={index}>
          <span className={styles.subTitle}>{content.subTitle}</span>
          <h1>
            <span>{content.span}</span> {content.title}
          </h1>
          <button className="btn">
            <Link href={content.button.url}>{content.button.text}</Link>
          </button>
        </div>
      ))}
    </div>
  );
};

export default HeroHome;
