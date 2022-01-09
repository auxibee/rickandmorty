import Hero from "components/hero/hero";
import WikiDetails from "components/wikiDetails/wikiDetails";
import SelectInput from "elements/input/selectInput";
import { useEffect } from "react";

import styles from "../styles.module.css";
import { getLocation } from "./../api";

const sample = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19,
];

const options = ["Choose....", "episode-1", "espisode-2", "episode-3"];

const Location = () => {
  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await getLocation();
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);
  return (
    <div className={styles.main}>
      <section>
        <Hero>
          <h1>
            Location: <span>Earth(c-12)</span>
          </h1>
          <h3>Dimension: Dimension c-12</h3>
          <h2>Type: Planet</h2>
        </Hero>
      </section>
      <aside>
        <h3>Pick an Episode:</h3>
        <SelectInput name="location" options={options} />
      </aside>
      <div className={styles.content}>
        {sample.map((wiki) => (
          <WikiDetails />
        ))}
      </div>
    </div>
  );
};

export default Location;
