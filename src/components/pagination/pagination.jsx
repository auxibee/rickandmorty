import Button from "elements/button/button";
import styles from "./pagination.module.css";

const Pagination = ({
  currentPage,
  lastPage,
  onPageNext,
  nextBtnState,
  onPagePrevious,
  prevBtnState,
}) => {
  return (
    <div className={styles.pagination}>
      <Button primary onClick={onPagePrevious} disabled={prevBtnState}>
        Previous
      </Button>
      <span>{` ${currentPage} of ${lastPage}`}</span>
      <Button primary onClick={onPageNext} disabled={nextBtnState}>
        Next
      </Button>
    </div>
  );
};

export default Pagination;
