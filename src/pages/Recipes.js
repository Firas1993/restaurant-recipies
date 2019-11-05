import React, { Component } from 'react'
import RecipesList from "../component/RecipesList";
import Search from "../component/Search";
import {recipeData} from "../data/tempDetails";
export default class Recipes extends Component {
    
    state={
        recipes:recipeData,
        search:''
    }
    handleChange = (e)=>{
        this.setState({
            search:e.target.value
        })
        console.log(this.state.search);
    }
    handleSubmit = (e) =>{
        e.preventDefault();
    }
    render() {
        return (
          <>
            <Search
              search={this.state.search}
              handleChange={this.handleChange}
              handleSubmit={this.handleSubmit}
            />
            <RecipesList recipes={this.state.recipes} />
          </>
        );
    }
}
