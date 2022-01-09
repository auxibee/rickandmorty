import Hero from "components/hero/hero";
import WikiDetails from "components/wikiDetails/wikiDetails";
import SelectInput from "elements/input/selectInput";

import styles from "../styles.module.css";

const sample = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19,
];

const options = ["Choose....", "episode-1", "espisode-2", "episode-3"];

const Episodes = () => {
  return (
    <div className={styles.main}>
      <section>
        <Hero>
          <h1>
            Episode name: <span>Run</span>
          </h1>
          <h3>Air Date: March 10,2014</h3>
        </Hero>
      </section>
      <aside>
        <h3>Pick an Episode:</h3>
        <SelectInput name="episodes" options={options} />
      </aside>
      <div className={styles.content}>
        {sample.map((wiki) => (
          <WikiDetails />
        ))}
      </div>
    </div>
  );
};

export default Episodes;
