import React, { Component } from "react";
import Search from "./Search";

export default class Menu extends Component {
  state = { value: "" };

  handleKeyPress = (e) => {
    if (e.key === "Enter") {
      this.props.getWine(this.state.value);
    }
  };

  handleOnChanges = (e) => this.setState({ value: e.target.value });

  render() {
    return (
      <div>
        <div className="flex p-4 justify-between items-center">
          <div className="flex items-center w-6/12">
            <h1 className="px-4">Logo</h1>
            <Search
              onChange={this.handleOnChanges}
              onKeyPress={this.handleKeyPress}
            />
          </div>
          <div className="flex w-2/12 justify-between">
            <button className="border-2 border-projectPalette-red hover:bg-blue-dark text-projectPalette-black font-bold py-2 px-6 rounded">
              Sign In
            </button>
            <button className=" border-2 border-projectPalette-red hover:bg-blue-dark text-projectPalette-black font-bold py-2 px-6 rounded">
              Sign Up
            </button>
          </div>
        </div>
      </div>
    );
  }
}
