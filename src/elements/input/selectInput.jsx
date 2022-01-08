import styles from "./input.module.css";

const SelectInput = ({ name, options }) => {
  return (
    <select name={name} id={name} className={styles.selectInput}>
      {options.map((option) => (
        <option value={option}> {option} </option>
      ))}
    </select>
  );
};

export default SelectInput;
