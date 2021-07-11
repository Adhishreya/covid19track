import React, { Component } from "react";
import { render } from "react-dom";
import Courses from "./Courses";
import { ApolloProvider } from "react-apollo";
import ApolloClient from "apollo-boost";
import StateWise from "./Statewise";
const client = new ApolloClient({
  uri: " https://covidstat.info/graphql"
});
const Statistics = () => (
  <StateWise />
  // <ApolloProvider client={client}>
  //   <div>

  //     <div>

  //   <Courses />

  //     </div>
  //   </div>
  // </ApolloProvider>
);

export default Statistics;
