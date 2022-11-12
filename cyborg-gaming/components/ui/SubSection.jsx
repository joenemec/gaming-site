import styles from "./SubSection.module.scss";

const SubSection = (props) => (
  <div className={styles.subSection}>{props.children}</div>
);

export default SubSection;
