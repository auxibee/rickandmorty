import styles from "./input.module.css";

const SearchInput = () => {
  return (
    <input
      className={styles.searchInput}
      type="text"
      placeholder="Search for characters"
    />
  );
};

export default SearchInput;
