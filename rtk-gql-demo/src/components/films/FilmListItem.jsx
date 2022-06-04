import React from "react";
import { useSelector } from "react-redux";

const FilmListItem = ({ film }) => {
  const filmSelected = (filmId) => {
    console.log(filmId);
  };
  return (
    <React.Fragment>
      <div
        key={film.id}
        style={{
          height: "50px",
          backgroundColor: "lightblue",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          border: "1px solid white",
          cursor: "pointer",
        }}
        onClick={() => filmSelected(film.id)}
      >
        <span>{film.title}</span>
      </div>
    </React.Fragment>
  );
};

export default FilmListItem;
