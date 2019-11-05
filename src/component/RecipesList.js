import React, { Component } from 'react'
import Recipe from "./Recipe";
export default class RecipesList extends Component {
    render() {
        return (
          <div>
            <h1>recipes list</h1>
            <h3><Recipe/></h3>
          </div>
        );
    }
}
