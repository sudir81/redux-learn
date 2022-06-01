import React, { useEffect } from "react";
import { connect, useDispatch } from "react-redux";
import { fetchFilmById } from "../../redux/actions/films.action";
import { v4 as uuidv4 } from "uuid";
const Film = ({ film }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    const timer = setTimeout(() => {
      dispatch(fetchFilmById({ filmId: film?.id }));
    }, 1000);
    return () => clearTimeout(timer);
  }, []);
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
            {film.producers && (
              <>
                <div>
                  <label>Producers : </label>
                  {film.producers.map((producer) => (
                    <span key={uuidv4()}>{producer}</span>
                  ))}
                </div>
                <div>
                  <label>Opening Crawl : </label>
                  <span>{film.openingCrawl}</span>
                </div>
              </>
            )}
          </div>
        </>
      )}
    </>
  );
};

// const mapDispatchToProps = (dispatch, ownProps) => {
//   const {
//     film: { id },
//   } = ownProps;
//   dispatch(fetchFilmById({ filmId: id }));
//   return {};
// };

export default Film;
