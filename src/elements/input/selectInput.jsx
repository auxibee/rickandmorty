import styles from "./input.module.css";

const SelectInput = ({ name, options, onChange }) => {
  return (
    <select
      name={name}
      id={name}
      className={styles.selectInput}
      onChange={onChange}
    >
      <option value={1}>Choose....</option>
      {[...Array(options).keys()].map((x) => {
        return (
          <option key={x + 1} value={x + 1}>
            {name} - {x + 1}
          </option>
        );
      })}
    </select>
  );
};

export default SelectInput;
