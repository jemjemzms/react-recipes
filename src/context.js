import React, { Component } from "react";
import axios from "axios";

const Context = React.createContext();

export class Provider extends Component {
  state = {
    recipe_list: [],
    heading: "Latest Recipes"
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
