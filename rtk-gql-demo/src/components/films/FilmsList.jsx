import React from "react";
import FilmListItem from "./FilmListItem";
import { useGetFilmsQuery } from "./filmsSlice";

const FilmsList = ({ filmIds }) => {
  const {
    data: {
      allFilms: { films },
    },
  } = useGetFilmsQuery();

  return (
    <div style={{ width: "30%" }}>
      {films?.map((film) => (
        <FilmListItem key={film.id} film={film} />
      ))}
    </div>
  );
};

export default FilmsList;
