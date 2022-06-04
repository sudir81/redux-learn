import React, { useEffect, useState } from "react";
import { useGetFilmByIdQuery } from "./filmsSlice";
import { v4 as uuidv4 } from "uuid";

const Film = ({ filmId, filmData }) => {
  const [filmDetails, setFilmDetails] = useState(filmData);

  const { data, loading, error } = useGetFilmByIdQuery(filmId);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (data?.film) {
        setFilmDetails(data?.film);
      }
    }, 3000);
    return () => clearTimeout(timer);
  }, [data]);

  return (
    <>
      {filmDetails && (
        <>
          <div style={{ backgroundColor: "lightcoral", margin: "10px" }}>
            <h4>{filmDetails.title}</h4>
            <div>
              <label>Title : </label>
              <span>{filmDetails.title}</span>
            </div>
            <div>
              <label>Director : </label>
              <span>{filmDetails.director}</span>
            </div>
            <div>
              <label>Created Date : </label>
              <span>{filmDetails.created}</span>
            </div>
          </div>
          {filmDetails.producers && (
            <>
              <div>
                <label>Producers : </label>
                {filmDetails.producers.map((producer) => (
                  <span key={uuidv4()}>{producer}</span>
                ))}
              </div>
              <div>
                <label>Opening Crawl : </label>
                <span>{filmDetails.openingCrawl}</span>
              </div>
            </>
          )}
        </>
      )}
    </>
  );
};

export default Film;
