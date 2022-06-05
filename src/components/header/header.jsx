import styles from "./header.module.css";
import Logo from "elements/logo/logo";
import Button from "elements/button/button";

const Header = ({ buttons, selected, setSelected }) => {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <Logo />
        <nav>
          {buttons.map((button) => (
            <Button
              key={button}
              href={button == "characters" ? "/" : button}
              active={selected == button ? true : false}
              onClick={() => setSelected(button)}
              navLink
            >
              {button}
            </Button>
          ))}
        </nav>
      </div>
    </div>
  );
};

export default Header;
