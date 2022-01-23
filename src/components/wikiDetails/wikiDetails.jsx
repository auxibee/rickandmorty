import Button from "elements/button/button";
import Card from "elements/card/card";
import { Link } from "react-router-dom";
import styles from "./wikiDetails.module.css";

const WikiList = ({ results }) => {
  return results.map((result) => (
    <WikiDetails
      key={result.id}
      id={result.id}
      name={result.name}
      status={result.status.toLowerCase()}
      location={result.location.name}
      image={result.image}
    />
  ));
};

export default WikiList;

const WikiDetails = ({ name, id, status, location, image }) => {
  return (
    <div className={styles.wikiDetails}>
      <Link to={`/character/${id}`}>
        <Card>
          <Button primary status={status}>
            {status}
          </Button>
          <img src={image} alt="image" />
          <div className={styles.wikiName}>{name}</div>
          <div>hello</div>
          <h3> Last Location </h3>
          <p>{location}</p>
        </Card>
      </Link>
    </div>
  );
};
