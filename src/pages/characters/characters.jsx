import Hero from "components/hero/hero";
import WikiList from "components/wikiDetails/wikiDetails";
import Button from "elements/button/button";
import SearchInput from "elements/input/input";
import { useEffect, useState } from "react";

import { fetchAxios } from "./../api";

import styles from "../styles.module.css";
import Accordion from "components/accordion/accordion";
import usePagination from "components/pagination/usePagination";
import Pagination from "components/pagination/pagination";
import Head from "components/head/head";
import useFetch from "hooks/useFetch";

const Characters = () => {
  const [filter, setFilter] = useState("");
  const [inputValue, setInputValue] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);

  const { wiki } = useFetch(
    `https://rickandmortyapi.com/api/character/?page=${currentPage}&${filter}&name=${searchTerm}`
  );

  console.log(currentPage, filter, searchTerm);

  const pageSize = 20;

  const [firstPage, currPage, lastPage] = usePagination({
    totalCount: wiki.count ? wiki.count : 10,
    pageSize,
    currentPage,
  });

  const btnNext = currentPage === lastPage ? true : false;
  const btnPrevious =
    currentPage === firstPage || currentPage === 1 ? true : false;

  const handlePageNext = () => {
    setCurrentPage(currentPage + 1);
  };

  const handlePagePrev = () => {
    setCurrentPage(currentPage - 1);
  };

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const filterItems = [
    { title: "Status", buttons: ["alive", "dead", "unknown"] },
    {
      title: "Species",
      buttons: [
        "Human",
        "Alien",
        "Humanoid",
        "Poopybutthole",
        "Mythological",
        "Unknown",
        "Animal",
        "Disease",
        "Robot",
        "Cronenberg",
      ],
    },
    { title: "Gender", buttons: ["female", "male", "genderless", "unknown"] },
  ];

  const handleFilter = (event) => {
    setFilter(event.target.value.toLowerCase());
    // reset currentPage to 1
    setCurrentPage(1);
  };

  return (
    <>
      <Head title="Rick and Morty | Characters" />
      <div className={styles.main}>
        <section>
          <Hero>
            <h1>Characters</h1>
            <div className={styles.heroSub}>
              <SearchInput
                value={inputValue}
                onInputChange={handleInputChange}
              />
              <Button primary onClick={() => setSearchTerm(inputValue)}>
                Search
              </Button>
            </div>
          </Hero>
        </section>
        <aside>
          <h3 className={styles.filterBy}>Filter By</h3>
          <Accordion items={filterItems} onFilter={handleFilter} />
        </aside>
        <div className={styles.content}>
          {wiki.characters ? (
            <WikiList results={wiki.characters} />
          ) : (
            <p>loading</p>
          )}
        </div>
        <footer>
          {currPage && (
            <Pagination
              currentPage={currentPage}
              lastPage={lastPage}
              onPageNext={handlePageNext}
              onPagePrevious={handlePagePrev}
              nextBtnState={btnNext}
              prevBtnState={btnPrevious}
            />
          )}
        </footer>
      </div>
    </>
  );
};

export default Characters;
