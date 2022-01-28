import { useState } from "react";
import Hero from "components/hero/hero";
import WikiList from "components/wikiDetails/wikiDetails";
import SelectInput from "elements/input/selectInput";

import styles from "../styles.module.css";
import Head from "components/head/head";
import useFetch from "hooks/useFetch";

const Episodes = () => {
  const [currentWiki, setCurrentWiki] = useState(1);

  const { wiki } = useFetch(
    `https://rickandmortyapi.com/api/episode/${currentWiki}`
  );

  const count = 51;

  const handleChange = (event) => {
    setCurrentWiki(event.target.value);
  };

  return (
    <>
      <Head title="Rick and Morty | Episodes" />
      <div className={styles.main}>
        <section>
          <Hero>
            <h1>
              Episode name: <span>{wiki.info ? wiki.info.name : null}</span>
            </h1>
            <h3>Air Date: {wiki.info ? wiki.info.air_date : null}</h3>
          </Hero>
        </section>
        <aside>
          <h3>Pick an Episode:</h3>
          <SelectInput name="Episode" options={count} onChange={handleChange} />
        </aside>
        <div className={styles.content}>
          {wiki.characters ? (
            <WikiList results={wiki.characters} />
          ) : (
            <p>loading ....</p>
          )}
        </div>
      </div>
    </>
  );
};

export default Episodes;
