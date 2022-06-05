import { useState } from "react";
import Hero from "components/hero/hero";
import SelectInput from "elements/input/selectInput";

import Head from "components/head/head";
import useFetch from "hooks/useFetch";
import MainContent from "components/maincontent/maincontent";
import Sidebar from "components/sidebar/sidebar";
import WikiDetails from "components/wikiDetails/wikiDetails";
import WikiList from "./../../components/wikiDetails/wikiList";
import SvgSpinner from "elements/logo/Spinner";

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

      <Hero
        episode_name={wiki.info?.name}
        air_date={wiki.info ? wiki.info.air_date : null}
      />
      <MainContent>
        <Sidebar>
          <h3>Filter</h3>
          <SelectInput
            name={"Episode"}
            onChange={handleChange}
            options={count}
          />
        </Sidebar>
        {!wiki.characters && (
          <div className="loading">
            <SvgSpinner />
          </div>
        )}

        <WikiList>
          {wiki.characters?.map(({ name, id, status, location, image }) => (
            <WikiDetails
              key={id}
              name={name}
              id={id}
              status={status}
              location={location}
              image={image}
            />
          ))}
        </WikiList>
      </MainContent>
    </>
  );
};

export default Episodes;
