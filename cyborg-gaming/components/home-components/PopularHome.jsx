import Link from "next/link";

import SubSection from "../ui/SubSection";
import { PopularHomeContent, PoplarHomeCards } from "./HomeContent";
import PopularCard from "./PopularCard";

import styles from "./PopularHome.module.scss";

const PopularHome = () => {
  return (
    <SubSection>
      <div className={styles.popular}>
        {PopularHomeContent.map((content, index) => (
          <div className={styles.content} key={index}>
            <h4>
              <span>{content.span}</span> {content.title}
            </h4>
            <PopularCard cards={PoplarHomeCards} />
            <button className="btn">
              <Link href={content.button.url}>{content.button.text}</Link>
            </button>
          </div>
        ))}
      </div>
    </SubSection>
  );
};

export default PopularHome;
