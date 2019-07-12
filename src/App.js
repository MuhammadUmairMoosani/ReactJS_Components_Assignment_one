import React from 'react';
import logo from './logo.svg';
import './App.css';
import Green from "./components/Green";
import Orange from "./components/Orange";
import Brown from "./components/Brown";
import Deeppink from "./components/Deeppink";

function App() {
  return (
    <div className="App">
      <Green/>
      <Orange/>
      <Brown/>
      <Deeppink/>
      <Deeppink/>
    </div>
  );
}

export default App;
