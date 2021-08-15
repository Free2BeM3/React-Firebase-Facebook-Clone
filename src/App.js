
import React from 'react';
import './App.css';
import Home from "./components/home/Home";
import { Route } from "react-router-dom";
import Profiles from "./components/profiles/Profiles";



function App() {


  return (
    <div className="app">
      <Route exact path="/" component={Home} />
      <Route path="/profiles" component={Profiles} />
      
        
    </div>
  );
}

export default App;