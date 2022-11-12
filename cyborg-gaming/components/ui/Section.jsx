import styles from "./Section.module.scss";

const Section = (props) => (
  <div className={styles.section}>{props.children}</div>
);

export default Section;
