import Button from "elements/button/button";
import Card from "elements/card/card";
import styles from "./wikiDetails.module.css";

import sampleImage from "../../assets/1.jpeg";

const WikiDetails = () => {
  return (
    <div className={styles.wikiDetails}>
      <Card>
        <Button primary alive>
          alive
        </Button>
        <img src={sampleImage} alt="image" />
        <h1>Rick Sanchez</h1>
        <h3> Last Location </h3>
        <p>c-123</p>
      </Card>
    </div>
  );
};

export default WikiDetails;
