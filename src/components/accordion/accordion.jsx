import Button from "elements/button/button";
import styles from "./accordion.module.css";
import { useState } from "react";

const AccordionItem = ({ title, buttons, onFilter }) => {
  const [isActive, setIsActive] = useState(false);
  const handleToggle = (event) => {
    setIsActive(!isActive);
  };
  return (
    <div className={styles.accordion}>
      <h3 onClick={handleToggle}>{title}</h3>
      <span>{isActive ? "+" : "-"}</span>
      {isActive && (
        <div>
          {buttons.map((button) => (
            <Button
              key={button}
              primary
              onClick={onFilter}
              value={title + "=" + button}
            >
              {button}
            </Button>
          ))}
        </div>
      )}
    </div>
  );
};

const Accordion = ({ items, onFilter }) => {
  return (
    <div>
      {items.map(({ title, buttons }) => (
        <AccordionItem
          key={title}
          title={title}
          buttons={buttons}
          onFilter={onFilter}
        />
      ))}
    </div>
  );
};

export default Accordion;
