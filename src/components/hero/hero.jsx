import styles from "./hero.module.css";

const Hero = ({
  title,
  location,
  dimension,
  type,
  episode_name,
  air_date,
  search,
}) => {
  return (
    <div className={styles.hero}>
      {title && <h1 className={styles.key}>{title}</h1>}
      {location && (
        <h1 className={styles.key}>
          Location: <span className={styles.name}>{location}</span>
        </h1>
      )}
      {dimension && <h3 className={styles.sub}>Dimension: {dimension}</h3>}
      {type && <h3 className={styles.sub}>Type: {type}</h3>}
      {episode_name && (
        <h1 className={styles.key}>
          Episode Name: <span className={styles.name}>{episode_name}</span>
        </h1>
      )}
      {air_date && <h3 className={styles.sub}>Air Date: {air_date}</h3>}
      {search && <h3 className={styles.sub}>Search</h3>}
    </div>
  );
};

export default Hero;
