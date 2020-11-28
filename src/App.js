import React, { Component } from "react";

import "./App.css";
import axios from "axios";

import Menu from "./components/Menu";
import Wine from "./components/Wine";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      vinos: [],
    };
  }

  componentDidMount() {
   console.log("Si")
    // const getWine = async (x) => {
    //   const res = axios.get(`https://jsonplaceholder.typicode.com/users/${x}`);
    //   let data = await res;
    //   let vinos = this.state.vinos;

    //   if (vinos.length < 1) {
    //     vinos.push(await data.data);
    //     vinos = [vinos];
    //   } else {
    //     vinos[0].push(await data.data);
    //   }
    //   this.setState({ vinos });
    // };
  }

  render() {
    return (
      <div>
        <Menu getWine={this.getWine} />
        {/* 
        {this.state.vinos.length > 0 ? (
          <div className="flex flex-wrap justify-between">
            {this.state.vinos[0].map((wine) => (
              <Wine wine={wine} key={wine.id} />
            ))}
          </div>
        ) : (
          <p>No hay elementos</p>
        )} */}
      </div>
    );
  }
}

export default App;
