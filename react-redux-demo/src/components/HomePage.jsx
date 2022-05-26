import React from "react";
import { connect } from "react-redux";
import { fetchFilms } from "../redux/actions/films.action";
import FilmsView from "./films/FilmsView";

const HomePage = () => {
  return (
    <React.Fragment>
      <div>HomePage</div>
      <FilmsView />
    </React.Fragment>
  );
};

const mapDispatchToProps = (dispatch) => {
  dispatch(fetchFilms());
  return {};
};

export default connect(null, mapDispatchToProps)(HomePage);
