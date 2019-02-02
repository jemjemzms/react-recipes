import React from "react";
import { Link } from "react-router-dom";

const Recipe = props => {
  const { recipe } = props;

  return (
    <div className="col-md-6">
      <div className="card mb-4 shadow-sm">
        <div className="card-body">
          <img
            src={recipe.strMealThumb}
            style={{ width: "100%" }}
            className="mb-2"
            alt={recipe.strMeal}
          />
          <h5>{recipe.strMeal}</h5>
          <p className="card-text">
            <strong>
              <i className="fas fa-play" /> Category
            </strong>
            : {recipe.strCategory}
            <br />
            <strong>
              <i className="fas fa-compact-disc" /> Area
            </strong>
            : {recipe.strArea}
          </p>
          <Link
            to={`recipes/detail/${recipe.idMeal}`}
            className="btn btn-dark btn-block"
          >
            <i className="fas fa-chevron-right" /> View Recipe
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Recipe;
