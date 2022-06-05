import Button from "elements/button/button";
import Card from "elements/card/card";
import { Link } from "react-router-dom";
import styles from "./wikiDetails.module.css";

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
          <h3> Last Location </h3>
          <p>{location.name}</p>
        </Card>
      </Link>
    </div>
  );
};

export default WikiDetails;
