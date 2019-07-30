import React from "react";
import { connect } from "react-redux";
import Filter from "./components/Filter/Filter";
import Map from "./components/Map/Map";
import People from "./components/People/People";
import "./App.css";

const App = props => {
  return (
    <div className={"App"}>
      <h1>Basic React Map</h1>
      <div className={"container"}>
        <div className={"search-box"}>
          <Filter />
          <People />
        </div>
        <div className={"map-box"}>
          <Map people={props.people} />
        </div>
      </div>
      <p className={"footer"}>by Richard Miles</p>
    </div>
  );
};

function mapState(state) {
  return state;
}

export default connect(mapState)(App);
