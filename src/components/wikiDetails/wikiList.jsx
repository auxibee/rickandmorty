import styles from "./wikiList.module.css";

const WikiList = ({ children }) => {
  return <div className={styles.container}>{children}</div>;
};

export default WikiList;
