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
      if (recipe.strTags) {
        tagView = (
          <li className="list-group-item">
            <strong>Tags</strong>: {recipe.strTags}
          </li>
        );
      }

      let ingredient1 = "";
      if (recipe.strIngredient1) {
        ingredient1 = (
          <li className="list-group-item">
            <strong>Ingredient 1</strong>: {recipe.strIngredient1}
          </li>
        );
      }

      let ingredient2 = "";
      if (recipe.strIngredient2) {
        ingredient2 = (
          <li className="list-group-item">
            <strong>Ingredient 2</strong>: {recipe.strIngredient2}
          </li>
        );
      }

      let ingredient3 = "";
      if (recipe.strIngredient3) {
        ingredient3 = (
          <li className="list-group-item">
            <strong>Ingredient 3</strong>: {recipe.strIngredient3}
          </li>
        );
      }

      let ingredient4 = "";
      if (recipe.strIngredient4) {
        ingredient4 = (
          <li className="list-group-item">
            <strong>Ingredient 4</strong>: {recipe.strIngredient4}
          </li>
        );
      }

      let ingredient5 = "";
      if (recipe.strIngredient5) {
        ingredient5 = (
          <li className="list-group-item">
            <strong>Ingredient 5</strong>: {recipe.strIngredient5}
          </li>
        );
      }

      let ingredient6 = "";
      if (recipe.strIngredient6) {
        ingredient6 = (
          <li className="list-group-item">
            <strong>Ingredient 6</strong>: {recipe.strIngredient6}
          </li>
        );
      }

      let ingredient7 = "";
      if (recipe.strIngredient7) {
        ingredient7 = (
          <li className="list-group-item">
            <strong>Ingredient 7</strong>: {recipe.strIngredient7}
          </li>
        );
      }

      let ingredient8 = "";
      if (recipe.strIngredient8) {
        ingredient8 = (
          <li className="list-group-item">
            <strong>Ingredient 8</strong>: {recipe.strIngredient8}
          </li>
        );
      }

      let ingredient9 = "";
      if (recipe.strIngredient9) {
        ingredient9 = (
          <li className="list-group-item">
            <strong>Ingredient 9</strong>: {recipe.strIngredient9}
          </li>
        );
      }

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
            {ingredient1}
            {ingredient2}
            {ingredient3}
            {ingredient4}
            {ingredient5}
            {ingredient6}
            {ingredient7}
            {ingredient8}
            {ingredient9}
            {tagView}
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
          </ul>
        </React.Fragment>
      );
    }
  }
}

export default RecipeDetail;
