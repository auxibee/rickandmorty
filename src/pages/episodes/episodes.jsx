import { useEffect, useState } from "react";
import Hero from "components/hero/hero";
import WikiList from "components/wikiDetails/wikiDetails";
import SelectInput from "elements/input/selectInput";
import { fetchAxios } from "./../api";
import styles from "../styles.module.css";
import Head from "components/head/head";

const Episodes = () => {
  const [currentWiki, setCurrentWiki] = useState(1);
  const [wikiInfo, setWikiInfo] = useState({});
  const { name, air_date } = wikiInfo;
  const [characters, setCharacters] = useState([]);

  const count = 51;

  const handleChange = (event) => {
    setCurrentWiki(event.target.value);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetchAxios(
          `https://rickandmortyapi.com/api/episode/${currentWiki}`
        );

        const { data } = response;

        setWikiInfo(data);
        const dt = await Promise.all(
          data.characters.map(async (resident) => {
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
  }, [currentWiki]);
  return (
    <>
      <Head title="Rick and Morty | Episodes" />
      <div className={styles.main}>
        <section>
          <Hero>
            <h1>
              Episode name: <span>{name}</span>
            </h1>
            <h3>Air Date: {air_date}</h3>
          </Hero>
        </section>
        <aside>
          <h3>Pick an Episode:</h3>
          <SelectInput name="Episode" options={count} onChange={handleChange} />
        </aside>
        <div className={styles.content}>
          {<WikiList results={characters} />}
        </div>
      </div>
    </>
  );
};

export default Episodes;
