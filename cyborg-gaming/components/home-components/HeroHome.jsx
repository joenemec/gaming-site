import { HeroHomeContent } from "./HomeContent";
import Button from "../ui/Button";

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
          <Button items={HeroHomeContent} />
        </div>
      ))}
    </div>
  );
};

export default HeroHome;
