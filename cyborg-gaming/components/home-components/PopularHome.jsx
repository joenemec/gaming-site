import { PopularHomeContent, PopularHomeCards } from "./HomeContent";
import PopularCard from "./PopularCard";
import SubSection from "../ui/SubSection";
import SectionHeading from "../ui/SectionHeading";
import Button from "../ui/Button";

import styles from "./PopularHome.module.scss";

const PopularHome = () => {
  return (
    <SubSection>
      <div className={styles.popular}>
        <div className={styles.content}>
          <SectionHeading items={PopularHomeContent} />
          <PopularCard cards={PopularHomeCards} />
          <Button items={PopularHomeContent} />
        </div>
      </div>
    </SubSection>
  );
};

export default PopularHome;
