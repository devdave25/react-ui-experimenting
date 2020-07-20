import React from "react";
import { Textbox } from '../textbox/Textbox';
import "./App.css";

export default class App extends React.Component {
  render() {
    return (
      <div className="component-app">
        <Textbox />
      </div>
    );
  }
}