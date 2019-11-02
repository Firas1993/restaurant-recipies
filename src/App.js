import React from 'react';

import {BrowserRouter as Router,Route,Switch} from  "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";

import './App.css';

import Navbar from "./component/Navbar";
import Default from "./pages/Default";
import Home from "./pages/Home";
import Recipes from "./pages/Recipes";
import SingleRecipes from "./pages/SingleRecipes";
//about react router
function App() {
  return (
    <Router>
      <main>
      <Navbar />
        {/** navbar */}
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/recipes" exact component={Recipes} />
          <Route path="/recipes/:id" component={SingleRecipes} />
          <Route component={Default} />
        </Switch>
      </main>
    </Router>
  );
}

export default App;
