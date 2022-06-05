import Header from "components/header/header";

import styles from "./layout.module.css";
import { useState } from "react";
import Main from "./main/main";

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
      <Main>{children}</Main>
    </div>
  );
};

export default Layout;
