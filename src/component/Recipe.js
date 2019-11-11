import React, { Component } from 'react'
import {Link} from "react-router-dom";
export default class Recipe extends Component {
    render() {
        const {image_url, source_url, title,publisher,recipe_id} = this.props.recipe;
        return(
            <div className="col-10 mx-auto col-md-6 col-lg-4 my-3">
              <div className="card" style={{height:"100%"}}>
                <img className="card-img-top" alt="recipe image" style={{height:"14rem"}} src={image_url} />
                <div className="card-body text-capitalize">
                  <h6>{title}</h6>
                  <h6 className="text-warning text-slanted">Provided by {publisher} </h6>
                  <Link 
                  to={`/recipes/${recipe_id}`}
                  className="btn btn-primary mx-2 text-capitalize"
                  >details </Link>
                  <a 
                  className="btn btn-success mx-2 text-capitalize"
                  href={source_url}
                  target="_blank"
                  rel="noopner noreferrer">recipe source
                  </a>
                 
                </div>
              </div>
            </div>

        );
    }
}
