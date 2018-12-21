import React from "react";
import ReactDOM from "react-dom";
import DataProvider from "./DataProvider";
import PSTable from "./PSTable";

const App = () => (
  <DataProvider endpoint="api/psproperties/"
                render={data => <PSTable data={data} />} />
);
const wrapper = document.getElementById("app");
wrapper ? ReactDOM.render(<App />, wrapper) : null;
