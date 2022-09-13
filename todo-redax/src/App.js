import { useState } from "react";
import { AddList } from "./components/AddList/AddList";
import { List } from "./components/List/List";
import "./styles/App.scss"

export const App = () => {
  const [data, setData] = useState([]);
  return (
    <div className="App">
      <div className="header">
        <h1>Hello world</h1>
      </div>
      <AddList data={data} setData={setData} />
      <List data={data} setData={setData} />
    </div>
  );
}
