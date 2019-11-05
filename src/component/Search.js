import React, { Component } from "react";

export default class Search extends Component {
  render() {
    const handleChange = this.props.handleChange;
    const search = this.props.search;
    const handleSubmit = this.props.handleSubmit;
    return (
      <div className="row">
        <div className="text-center col-10 mx-auto col-md-8 mt-5">
          <h1 className="text-slanted text-capitalize">
            search recipes with{" "}
            <strong className="text-orange">
              Tunisia<span className="text-4">4</span>Restaurant
            </strong>
          </h1>
          <form className="mt-4">
            <label htmlFor="search" className="text-capitalize">
              types recipes with separated comma
            </label>
            {/*    <input onChange={handleChange} value={search} />*/}
            <div className="input-group">
            <input 
            type="text"
            name="search"
            className="form-control form-group-lg"
            placeholder="chiken,onion,carrots"
            value={search}
            onChange={handleChange}/>
            <div className="input-group-append">
            <button 
            type="submit"
            className="input-group-text bg-primary text-white"
            onClick={handleSubmit}
            >
            <i className="fas fa-search"></i>
            </button>
            </div>
            </div>
          </form>
        </div>
      </div>
    );
  }
}
