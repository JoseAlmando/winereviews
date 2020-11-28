import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./assets/main.css";
import { BrowserRouter as Router } from "react-router-dom";

import { ApolloClient, InMemoryCache } from "@apollo/client";
import { gql } from "@apollo/client";

const client = new ApolloClient({
  uri: "http://localhost:8080/",
  cache: new InMemoryCache(),
  connectToDevTools: true
});

client
  .query({
    query: gql`
      query {
        reviews {
          id
          score
          text
        }
      }
    `,
  })
  .then((result) => console.log(result.data))
  .catch(err => console.log("error",err));

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <App />
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
