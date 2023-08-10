import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Home from "./Pages/Home/Home";
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import Layout from "./Pages/Layout/Layout";
import { BrowserRouterProps } from "react-router-dom";

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <div>
        <Layout />
        <Routes>
          <Route path="/home" Component={Home} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;

