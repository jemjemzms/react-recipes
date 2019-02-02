import React from "react";
import { Link } from "react-router-dom";

const Recipe = props => {
  const { recipe } = props;

  return (
    <div className="col-md-6">
      <div className="card mb-4 shadow-sm">
        <div className="card-body">
          <img
            src={recipe.image_url}
            style={{ width: "100%" }}
            className="mb-2"
            alt={recipe.title}
          />
          <h5>{recipe.title}</h5>
          <p className="card-text">
            <strong>
              <i className="fas fa-play" /> Rank
            </strong>
            : {recipe.social_rank}
            <br />
            <strong>
              <i className="fas fa-compact-disc" /> Publisher
            </strong>
            : {recipe.publisher}
          </p>
          <Link
            to={`recipes/recipe/${recipe.recipe_id}`}
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
