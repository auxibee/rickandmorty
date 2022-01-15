import Button from "elements/button/button";
import Card from "elements/card/card";
import styles from "./wikiDetails.module.css";

const WikiList = ({ results }) => {
  return results.map((result) => (
    <WikiDetails
      key={result.id}
      name={result.name}
      status={result.status.toLowerCase()}
      location={result.location.name}
      image={result.image}
    />
  ));
};

export default WikiList;

const WikiDetails = ({ name, status, location, image }) => {
  return (
    <div className={styles.wikiDetails}>
      <Card>
        <Button primary status={status}>
          {status}
        </Button>
        <img src={image} alt="image" />
        <h1>{name}</h1>
        <h3> Last Location </h3>
        <p>{location}</p>
      </Card>
    </div>
  );
};
