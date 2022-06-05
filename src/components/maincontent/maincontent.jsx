import styles from "./maincontent.module.css";

const MainContent = ({ children }) => {
  return <div className={styles.container}>{children}</div>;
};

export default MainContent;
