import React from "react";
import { connect } from "react-redux";

const FilmsList = ({ films }) => {
  const filmSelected = (filmId) => {
    console.log(filmId);
  };

  return (
    <div style={{ width: "30%" }}>
      {films?.map((film) => (
        <div
          key={`${film.id}-${film.title}`}
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
      ))}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    films: state.films?.films,
  };
};

export default connect(mapStateToProps)(FilmsList);
