import Button from "elements/button/button";
import { fetchAxios } from "pages/api";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import styles from "./cardDetails.module.css";

const CardDetails = () => {
  const [info, setInfo] = useState({});
  const params = useParams();
  const { id } = params;
  useEffect(() => {
    const getDetails = async () => {
      const url = `https://rickandmortyapi.com/api/character/${id}`;
      const { data } = await fetchAxios(url);
      console.log(data);
      const { name, image, status, gender, location, origin, species } = data;
      const location_ = location.name;
      const origin_ = origin.name;
      setInfo({ name, image, status, gender, location_, origin_, species });
    };

    getDetails();
  }, []);
  return (
    <div className={styles.wikiCard}>
      <h1>{info.name}</h1>
      <img src={info.image} alt="image" />

      <p>
        Status : <span>{info.status}</span>
      </p>
      <p>
        Gender : <span>{info.gender}</span>
      </p>
      <p>
        Location : <span>{info.location_}</span>
      </p>
      <p>
        Origin: <span>{info.origin_}</span>
      </p>
      <p>
        Species : <span>{info.species}</span>
      </p>
    </div>
  );
};

export default CardDetails;
