import Hero from "components/hero/hero";
import WikiList from "components/wikiDetails/wikiDetails";
import SelectInput from "elements/input/selectInput";
import { useEffect, useState } from "react";
import Head from "components/head/head";
import styles from "../styles.module.css";
import { fetchAxios } from "./../api";

const Location = () => {
  const [currentWiki, setCurrentWiki] = useState(1);
  const [wikiInfo, setWikiInfo] = useState({});
  const { dimension, type, name } = wikiInfo;
  const [residence, setResidence] = useState([]);

  const count = 126;

  const handleChange = (event) => {
    setCurrentWiki(event.target.value);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetchAxios(
          `https://rickandmortyapi.com/api/location/${currentWiki}`
        );

        const { data } = response;

        setWikiInfo(data);

        const dt = await Promise.all(
          data.residents.map(async (resident) => {
            const response = await fetchAxios(resident);

            const { data } = response;

            return data;
          })
        );

        setResidence(dt);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, [currentWiki]);

  return (
    <>
      <Head title="Rick and Morty | Location" />
      <div className={styles.main}>
        <section>
          <Hero>
            <h1>
              Location: <span>{name}</span>
            </h1>
            <h3>Dimension: {dimension}</h3>
            <h2>Type: {type}</h2>
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
        <div className={styles.content}>{<WikiList results={residence} />}</div>
      </div>
    </>
  );
};

export default Location;
