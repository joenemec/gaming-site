import styles from "./Section.module.scss";

const Section = (props) => {
  return <div className={styles.section}>{props.children}</div>;
};

export default Section;
