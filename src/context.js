import React, { Component } from "react";
import axios from "axios";

const Context = React.createContext();

const reducer = (state, action) => {
  switch (action.type) {
    case "SEARCH_RECIPES":
      return {
        ...state,
        recipe_list: action.payload,
        heading: "Search Results"
      };
    default:
      return state;
  }
};

export class Provider extends Component {
  state = {
    recipe_list: [],
    heading: "Latest Recipes",
    dispatch: action => this.setState(state => reducer(state, action))
  };

  componentDidMount() {
    axios
      .get(
        `https://www.themealdb.com/api/json/v1/${
          process.env.REACT_APP_MM_KEY
        }/latest.php`
      )
      .then(res => {
        // console.log(res.data);
        this.setState({ recipe_list: res.data.meals });
      })
      .catch(err => console.log(err));
  }

  render() {
    return (
      <Context.Provider value={this.state}>
        {this.props.children}
      </Context.Provider>
    );
  }
}

export const Consumer = Context.Consumer;
