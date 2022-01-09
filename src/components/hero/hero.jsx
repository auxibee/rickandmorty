import styles from "./hero.module.css";

const Hero = ({ children }) => {
  return <div className={styles.hero}>{children}</div>;
};

export default Hero;
