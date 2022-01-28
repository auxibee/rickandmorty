import Hero from "components/hero/hero";
import WikiList from "components/wikiDetails/wikiDetails";
import SelectInput from "elements/input/selectInput";
import { useState } from "react";
import Head from "components/head/head";
import styles from "../styles.module.css";

import useFetch from "hooks/useFetch";

const Location = () => {
  const [currentWiki, setCurrentWiki] = useState(1);
  const { wiki } = useFetch(
    `https://rickandmortyapi.com/api/location/${currentWiki}`
  );

  console.log(wiki.info);

  const count = 126;

  const handleChange = (event) => {
    setCurrentWiki(event.target.value);
  };

  return (
    <>
      <Head title="Rick and Morty | Location" />
      <div className={styles.main}>
        <section>
          <Hero>
            <h1>
              Location: <span>{wiki.info ? wiki.info.name : null}</span>
            </h1>
            <h3>Dimension: {wiki.info ? wiki.info.dimension : null}</h3>
            <h2>Type: {wiki.info ? wiki.info.type : null}</h2>
          </Hero>
        </section>
        <aside>
          <h3>Pick an Episode:</h3>
          <SelectInput
            name="Location"
            options={count}
            onChange={handleChange}
          />
        </aside>
        <div className={styles.content}>
          {wiki.characters ? (
            <WikiList results={wiki.characters} />
          ) : (
            <p>loading </p>
          )}
        </div>
      </div>
    </>
  );
};

export default Location;
