import Hero from "components/hero/hero";
import WikiList from "components/wikiDetails/wikiDetails";
import Button from "elements/button/button";
import SearchInput from "elements/input/input";
import { useEffect, useState } from "react";

import { fetchAxios } from "./../api";

import styles from "../styles.module.css";

const sample = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19,
];

const Characters = () => {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetchAxios(
          `https://rickandmortyapi.com/api/character/?page=2`
        );

        const { data } = response;

        const dt = await Promise.all(
          data.results.map(async (resident) => {
            const response = await fetchAxios(resident);

            const { data } = response;

            return data;
          })
        );

        setCharacters(dt);
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
      <div className={styles.content}>{<WikiList results={characters} />}</div>
    </div>
  );
};

export default Characters;
