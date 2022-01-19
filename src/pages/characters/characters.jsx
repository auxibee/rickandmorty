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

const Characters = () => {
  const [characters, setCharacters] = useState([]);
  const [filter, setFilter] = useState("");
  let [currentPage, setCurrentPage] = useState(1);

  const totalCount = 826;
  const pageSize = 20;

  const [firstPage, currPage, lastPage] = usePagination({
    totalCount,
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
  };
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetchAxios(
          `https://rickandmortyapi.com/api/character/?page=${currentPage}&${filter}`
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
  }, [filter, currentPage]);

  return (
    <>
      <Head title="Rick and Morty | Characters" />
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
          <Accordion items={filterItems} onFilter={handleFilter} />
        </aside>
        <div className={styles.content}>
          {<WikiList results={characters} />}
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
