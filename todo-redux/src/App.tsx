import React from "react";
import { AddList } from "./components/AddList/AddList";
import { List } from "./components/List/List";
import "./styles/App.scss";

export const App = () => {
  return (
    <div className="app">
      <div className="header">
        <h1>Hello world</h1>
      </div>
      <AddList />
      <List />
    </div>
  );
};
