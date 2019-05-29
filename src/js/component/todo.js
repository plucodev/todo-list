import React from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext.jsx";

export default class Todo extends React.Component {
  render() {
    return (
      <Context.Consumer>
        {({ store, actions }) => {
          return <div>todo</div>;
        }}
      </Context.Consumer>
    );
  }
}
