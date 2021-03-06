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

      {isActive && (
        <div className={styles.filters}>
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

const Accordion = ({ onFilter }) => {
  const items = [
    { title: "Status", buttons: ["alive", "dead", "unknown"] },
    {
      title: "Species",
      buttons: [
        "Human",
        "Alien",
        "Humanoid",
        "Poopybutthole",
        "Mythological",
        "Unknown",
        "Animal",
        "Disease",
        "Robot",
        "Cronenberg",
      ],
    },
    { title: "Gender", buttons: ["female", "male", "genderless", "unknown"] },
  ];
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
