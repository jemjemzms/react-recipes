import React, { Component } from "react";
import axios from "axios";

const Context = React.createContext();

export class Provider extends Component {
  state = {
    recipe_list: [],
    heading: "Top 10 Recipes"
  };

  componentDidMount() {
    axios
      .get(
        `https://www.food2fork.com/api/search?key=${
          process.env.REACT_APP_MM_KEY
        }&q=`
      )
      .then(res => {
        this.setState({ recipe_list: res.data.recipes });
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
