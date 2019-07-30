import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import Person from "./Person";
import "./People.css";

const People = props => {
  let people = <div className={"no-results"}>No results found</div>;

  if (props.people.length > 0) {
    people = props.people.map((person, index) => (
      <Person key={index} person={person} />
    ));
  }
  return <div className={"people"}>{people}</div>;
};

People.propTypes = {
  people: PropTypes.array.isRequired
};

function mapState(state) {
  return state;
}

export default connect(mapState)(People);
