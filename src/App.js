import React from "react";
import './App.css';
import Product from "./Product";

function App() {
  return (
    <div className="App">
      <h1>Hello World</h1>
      <Product title='Amazon Echo' price={19.99}/>
      <Product title='Apple Iphone 12' price={1199}/>
    </div>
  );
}

export default App;
