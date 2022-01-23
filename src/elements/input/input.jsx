import styles from "./input.module.css";

const SearchInput = ({ value, onInputChange }) => {
  return (
    <input
      className={styles.searchInput}
      value={value}
      onChange={onInputChange}
      type="text"
      placeholder="Search for characters"
    />
  );
};

export default SearchInput;
