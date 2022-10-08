import React from "react";
import "./App.css";
import Header from "./Header";
import Sidebar from "./Sidebar";

function App() {
  return (
    <div className="app">
      {/* header */}
      <Header />

      {/* App Body */}
      <div className="app__body">
        {/* inside app body we have: */}
        {/* Sidebar */}
        <Sidebar />

        {/* feed */}
        {/* widgets */}
      </div>
    </div>
  );
}

export default App;
