import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Spinner from "../layout/Spinner";

class RecipeDetail extends Component {
  state = {
    recipe: {}
  };

  componentDidMount() {
    axios
      .get(
        `https://www.food2fork.com/api/get?key=${
          process.env.REACT_APP_MM_KEY
        }&rId=${this.props.match.params.id}`
      )
      .then(res => {
        this.setState({ recipe: res.data.recipe });
      })
      .catch(err => console.log(err));
  }

  render() {
    const { recipe } = this.state;

    if (recipe === undefined || Object.keys(recipe).length === 0) {
      return <Spinner />;
    } else {
      const ingredients = recipe.ingredients;

      return (
        <React.Fragment>
          <Link to="/" className="btn btn-dark btn-sm mb-4">
            Go Back
          </Link>
          <div className="card">
            <h5 className="card-header">
              {recipe.title} by{" "}
              <span className="text-secondary">{recipe.publisher}</span>
            </h5>
            <div className="card-body">
              <img
                src={recipe.image_url}
                style={{ width: "50%" }}
                className="mb-2"
                alt={recipe.title}
              />
              <div className="card-text">
                <ol>
                  {ingredients.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ol>
              </div>
            </div>
          </div>

          <ul className="list-group mt-3">
            <li className="list-group-item">
              <strong>Recipe ID</strong>: {recipe.recipe_id}
            </li>
            <li className="list-group-item">
              <strong>Rank</strong>: {recipe.social_rank}
            </li>
          </ul>
        </React.Fragment>
      );
    }
  }
}

export default RecipeDetail;
