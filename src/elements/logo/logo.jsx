import styles from "./logo.module.css";

const Logo = () => {
  return (
    <div className={styles.logo}>
      <h1>
        Rick &#38; Morty <span>Wiki</span>
      </h1>
    </div>
  );
};

export default Logo;
