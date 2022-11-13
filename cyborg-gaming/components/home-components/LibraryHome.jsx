import { LibraryHomeContent, LibraryHomeRows } from "./HomeContent";
import SubSection from "../ui/SubSection";
import SectionHeading from "../ui/SectionHeading";
import Button from "../ui/Button";

import styles from "./LibraryHome.module.scss";
import LibraryRows from "./LibraryRows";

const LibraryHome = (props) => {
  return (
    <SubSection>
      <div className={styles.library}>
        <div className={styles.content}>
          <SectionHeading items={LibraryHomeContent} />
          <LibraryRows items={LibraryHomeRows} />
          <Button items={LibraryHomeContent} />
        </div>
      </div>
    </SubSection>
  );
};

export default LibraryHome;
