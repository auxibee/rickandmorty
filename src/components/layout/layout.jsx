import Header from "components/header/header";

import styles from "./layout.module.css";

const Layout = ({ children }) => {
  return (
    <div className={styles.layout}>
      <header>
        <Header />
      </header>
      <main>{children}</main>
    </div>
  );
};

export default Layout;
