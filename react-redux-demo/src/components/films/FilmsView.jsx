import React from "react";
import FilmsContainer from "./FilmsContainer";
import FilmsList from "./FilmsList";

const FilmsView = () => {
  return (
    <React.Fragment>
      <div>FilmsView</div>
      <div
        style={{
          margin: "0 10%",
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <FilmsList />
        <FilmsContainer />
      </div>
    </React.Fragment>
  );
};

export default FilmsView;
