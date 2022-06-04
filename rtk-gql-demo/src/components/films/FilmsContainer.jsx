import React from "react";
import Film from "./Film";
import { useGetFilmsQuery } from "./filmsSlice";

const FilmsContainer = () => {
  const {
    data: {
      allFilms: { films },
    },
  } = useGetFilmsQuery();
  const divRender = [];

  for (var i = 0; i < films?.length; i += 3) {
    divRender.push(
      <div key={i} style={{ display: "flex", justifyContent: "space-between" }}>
        {films.slice(i, i + 3).map((film) => (
          <Film key={film.id} filmId={film.id} filmData={film} />
        ))}
      </div>
    );
  }

  return (
    <div style={{ width: "69%", backgroundColor: "lightblue" }}>
      {divRender}
    </div>
  );
};

export default FilmsContainer;
