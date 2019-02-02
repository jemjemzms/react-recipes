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
        `https://www.themealdb.com/api/json/v1/${
          process.env.REACT_APP_MM_KEY
        }/lookup.php?i=${this.props.match.params.id}`
      )
      .then(res => {
        this.setState({ recipe: res.data.meals[0] });
      })
      .catch(err => console.log(err));
  }

  render() {
    const { recipe } = this.state;

    if (recipe === undefined || Object.keys(recipe).length === 0) {
      return <Spinner />;
    } else {
      let youtube = "";
      let youtubeView = "";
      if (recipe.strYoutube) {
        youtube = recipe.strYoutube;
        const youtubeArray = youtube.split("v=");
        youtube = `https://www.youtube.com/embed/${youtubeArray[1]}`;
        youtubeView = (
          <iframe
            src={youtube}
            style={{ width: "100%", height: "500px" }}
            title={recipe.strMeal}
          />
        );
      } else {
        youtubeView = (
          <img
            src={recipe.strMealThumb}
            style={{ width: "50%" }}
            className="mb-2"
            alt={recipe.strMeal}
          />
        );
      }

      let tagView = "";
      if (recipe.strTags !== null) {
        tagView = (
          <li className="list-group-item">
            <strong>Tags</strong>: {recipe.strTags}
          </li>
        );
      }

      // var ingredients = [];
      // for (var i = 0; i < 20; i++) {
      //   if (recipe.strIngredient){
      //     ingredients.push(ObjectRow());
      //   }
      // }

      console.log(`${recipe.strIngredient + "1"}`);

      return (
        <React.Fragment>
          <Link to="/" className="btn btn-dark btn-sm mb-4">
            Go Back
          </Link>
          <div className="card">
            <h5 className="card-header">{recipe.strMeal}</h5>
            <div className="card-body">
              {youtubeView}
              <div className="card-text">{recipe.instructions}</div>
            </div>
          </div>
          <ul className="list-group mt-3">
            <li className="list-group-item">
              <strong>Cuisine</strong>: {recipe.strArea}
            </li>
            <li className="list-group-item">
              <strong>Category</strong>: {recipe.strCategory}
            </li>
            <li className="list-group-item">
              <strong>Source</strong>:{" "}
              <a
                href={recipe.strSource}
                target="_blank"
                rel="noopener noreferrer"
              >
                Click Here
              </a>
            </li>
            {tagView}
          </ul>
        </React.Fragment>
      );
    }
  }
}

export default RecipeDetail;
