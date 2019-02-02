import React, { Component } from "react";
import axios from "axios";
import { Consumer } from "../../context";

class Search extends Component {
  state = {
    recipeTitle: ""
  };

  findTrack = (dispatch, e) => {
    e.preventDefault();

    axios
      .get(
        `https://www.themealdb.com/api/json/v1/${
          process.env.REACT_APP_MM_KEY
        }/search.php?s=${this.state.recipeTitle}`
      )
      .then(res => {
        dispatch({
          type: "SEARCH_RECIPES",
          payload: res.data.meals
        });

        this.setState({ recipeTitle: "" });
      })
      .catch(err => console.log(err));
  };

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    return (
      <Consumer>
        {value => {
          const { dispatch } = value;
          return (
            <div className="card card-body mb-4 p-4">
              <h1 className="display-4 text-center">
                <i className="fas fa-utensils" /> Search For A Recipe
              </h1>
              <p className="lead text-center">Get the recipe for any meals</p>
              <form onSubmit={this.findTrack.bind(this, dispatch)}>
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control form-control-lg"
                    placeholder="Recipe title..."
                    name="recipeTitle"
                    value={this.state.recipeTitle}
                    onChange={this.onChange}
                  />
                </div>
                <button
                  className="btn btn-primary btn-lg btn-block mb-5"
                  type="submit"
                >
                  Get Recipes
                </button>
              </form>
            </div>
          );
        }}
      </Consumer>
    );
  }
}

export default Search;
