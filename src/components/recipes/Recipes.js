import React, { Component } from "react";
import { Consumer } from "../../context";
import Spinner from "../layout/Spinner";
import Recipe from "./Recipe";

class Recipes extends Component {
  render() {
    return (
      <Consumer>
        {value => {
          const { recipe_list, heading } = value;

          if (recipe_list === undefined || recipe_list.length === 0) {
            return <Spinner />;
          } else {
            return (
              <React.Fragment>
                <h3 className="text-center mb-4">{heading}</h3>
                <div className="row">
                  {recipe_list.map(item => (
                    <Recipe key={item.recipe_id} recipe={item} />
                  ))}
                </div>
              </React.Fragment>
            );
          }
        }}
      </Consumer>
    );
  }
}

export default Recipes;
