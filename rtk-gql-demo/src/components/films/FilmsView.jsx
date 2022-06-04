import React from "react";
import { useSelector } from "react-redux";
import FilmsContainer from "./FilmsContainer";
import FilmsList from "./FilmsList";
import { selectFilmIds, useGetFilmsQuery } from "./filmsSlice";

const FilmsView = () => {
  const { isLoading, isSuccess, isError, error } = useGetFilmsQuery();

  // const filmIds = useSelector(selectFilmIds);

  let content;
  if (isLoading) {
    content = <div>Loading...</div>;
  } else if (isSuccess) {
    content = (
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
    );
  } else if (isError) {
    content = <div>Error: {error}</div>;
  }
  return <React.Fragment>{content}</React.Fragment>;
};

export default FilmsView;
