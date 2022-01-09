import styles from "./header.module.css";
import Logo from "elements/logo/logo";
import Button from "elements/button/button";

const Header = () => {
  return (
    <div className={styles.header}>
      <Logo />
      <nav>
        <Button href="/" active>
          Characters
        </Button>
        <Button href="episodes" notactive>
          Episodes
        </Button>
        <Button href="location" notactive>
          Location
        </Button>
      </nav>
    </div>
  );
};

export default Header;
