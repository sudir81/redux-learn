import React from "react";
import { connect } from "react-redux";
// import { fetchFilmById } from "../../redux/actions/films.action";

const Film = ({ film }) => {
  return (
    <>
      {film && (
        <>
          <div style={{ backgroundColor: "lightcoral", margin: "10px" }}>
            <h4>{film.title}</h4>
            <div>
              <label>Title : </label>
              <span>{film.title}</span>
            </div>
            <div>
              <label>Director : </label>
              <span>{film.director}</span>
            </div>
            <div>
              <label>Created Date : </label>
              <span>{film.created}</span>
            </div>
          </div>
          {film.producers && (
            <>
              <div>
                <label>Producers : </label>
                {film.producers.map((producer) => (
                  <span>{producer}</span>
                ))}
              </div>
              <div>
                <label>Opening Crawl : </label>
                <span>{film.openingCrawl}</span>
              </div>
            </>
          )}
        </>
      )}
    </>
  );
};

const mapDispatchToProps = (dispatch, ownProps) => {
  const {
    film: { id },
  } = ownProps;
  // dispatch(fetchFilmById({ filmId: id }));
  return {};
};

export default connect(null, mapDispatchToProps)(Film);
