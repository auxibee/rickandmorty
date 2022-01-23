import Header from "components/header/header";

import styles from "./layout.module.css";
import { useState } from "react";

const Layout = ({ children }) => {
  const [selected, setSelected] = useState("characters");
  return (
    <div className={styles.layout}>
      <header>
        <Header
          buttons={["characters", "location", "episodes"]}
          selected={selected}
          setSelected={setSelected}
        />
      </header>
      <main>{children}</main>
    </div>
  );
};

export default Layout;
