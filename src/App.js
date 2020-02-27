import React from "react";
import Table from "./components/Table";
import "./App.css";
import { data } from "./services/employees";

const App = () => <Table heading={data.heading} data={data.employees} />;

export default App;
