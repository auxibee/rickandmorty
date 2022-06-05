import styles from "./sidebar.module.css";

const Sidebar = ({ children }) => {
  return <div className={styles.container}>{children}</div>;
};

export default Sidebar;
