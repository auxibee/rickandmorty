import Hero from "components/hero/hero";
import { useState } from "react";
import Accordion from "components/accordion/accordion";
import usePagination from "components/pagination/usePagination";
import Pagination from "components/pagination/pagination";
import Head from "components/head/head";
import useFetch from "hooks/useFetch";
import WikiDetails from "components/wikiDetails/wikiDetails";
import MainContent from "components/maincontent/maincontent";
import Sidebar from "components/sidebar/sidebar";
import WikiList from "components/wikiDetails/wikiList";
import SvgSpinner from "elements/logo/Spinner";

const Characters = () => {
  const [filter, setFilter] = useState("");
  const [inputValue, setInputValue] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);

  const { wiki } = useFetch(
    `https://rickandmortyapi.com/api/character/?page=${currentPage}&${filter}&name=${searchTerm}`
  );

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

  const handleFilter = (event) => {
    setFilter(event.target.value.toLowerCase());
    // reset currentPage to 1
    setCurrentPage(1);
  };

  return (
    <>
      <Head title="Rick and Morty | Characters" />

      <Hero title={"A simple Rick and Morty Wiki"} />
      {!wiki.characters && <p>loaiding</p>}

      <MainContent>
        <Sidebar>
          <h3>Filter By</h3>
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
    </>
  );
};

export default Characters;
