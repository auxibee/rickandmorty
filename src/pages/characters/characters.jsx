import Hero from "components/hero/hero";
import WikiDetails from "components/wikiDetails/wikiDetails";
import Button from "elements/button/button";
import SearchInput from "elements/input/input";

import styles from "../styles.module.css";

const sample = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19,
];

const Characters = () => {
  return (
    <div className={styles.main}>
      <section>
        <Hero>
          <h1>Characters</h1>
          <div className={styles.heroSub}>
            <SearchInput />
            <Button primary>Search</Button>
          </div>
        </Hero>
      </section>
      <aside>
        <h3>Filters</h3>
        <p>clear Filters</p>
      </aside>
      <div className={styles.content}>
        {sample.map((wiki) => (
          <WikiDetails />
        ))}
      </div>
    </div>
  );
};

export default Characters;
