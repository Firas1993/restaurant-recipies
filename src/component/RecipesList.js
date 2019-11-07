import React, { Component } from "react";
import Recipe from "./Recipe";
export default class RecipesList extends Component {
  render() {
    const recipes = this.props.recipes;
    console.log(recipes);
    return (
      <div>
        <div className="container py-5">
          {/** title */}
          <div className="col-10 mx-auto col-md-6 text-center text-text-uppercase mb-3">
            <h1 className="text-slanted">
            recipe list
            </h1>
          </div>
          {/**end of title */}
          <div className="row">
          {
            recipes.map(recipe =>{
              return <Recipe   
              key={recipe.recipe_id}
              recipe={recipe}
                     />;})
           }
          </div>
        </div>
      </div>
    );
  }
}
