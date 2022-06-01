import React, { useEffect } from "react";
import { connect } from "react-redux";
import Film from "./Film";

const FilmsContainer = ({ films }) => {
  // const divRender = [];

  // for (var i = 0; i < films?.length; i += 3) {
  //   divRender.push(
  //     <div key={i} style={{ display: "flex", justifyContent: "space-between" }}>
  //       {films.slice(i, i + 3).map((film) => (
  //         <Film key={`${film.id}-${film.title}`} film={film} />
  //       ))}
  //     </div>
  //   );
  // }

  return (
    <div style={{ width: "69%", backgroundColor: "lightblue" }}>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
        }}
      >
        {films &&
          films.map((film) => (
            <Film key={`${film.id}-${film.title}`} film={film} />
          ))}
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    films: state.films?.films,
  };
};

export default connect(mapStateToProps)(FilmsContainer);
