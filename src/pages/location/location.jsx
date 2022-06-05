import Hero from "components/hero/hero";
import SelectInput from "elements/input/selectInput";
import { useState } from "react";
import Head from "components/head/head";
import useFetch from "hooks/useFetch";
import MainContent from "components/maincontent/maincontent";
import Sidebar from "components/sidebar/sidebar";
import WikiList from "components/wikiDetails/wikiList";
import WikiDetails from "components/wikiDetails/wikiDetails";
import Accordion from "components/accordion/accordion";
import SvgSpinner from "elements/logo/Spinner";

const Location = () => {
  const [currentWiki, setCurrentWiki] = useState(1);
  const [filter, setFilter] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const { wiki } = useFetch(
    `https://rickandmortyapi.com/api/location/${currentWiki}`
  );

  const count = 126;

  const handleChange = (event) => {
    setCurrentWiki(event.target.value);
  };

  const handleFilter = (event) => {
    setFilter(event.target.value.toLowerCase());
    // reset currentPage to 1
    setCurrentPage(1);
  };

  return (
    <>
      <Head title="Rick and Morty | Location" />

      <Hero
        location={wiki.info ? wiki.info.name : null}
        dimension={wiki.info ? wiki.info.dimension : null}
        type={wiki.info ? wiki.info.type : null}
      />

      <MainContent>
        <Sidebar>
          <h3> Filter By </h3>
          <Accordion onFilter={handleFilter} />
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

export default Location;
