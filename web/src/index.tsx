import React from "react";
import ReactDOM from "react-dom";
import reportWebVitals from "./reportWebVitals";
import { Application } from "./Application";
//import { SocketContext, client } from "./utils/socket/socket";
import { ChakraProvider } from "@chakra-ui/react";
import "./assets/main.css";
//import { ApolloProvider } from '@apollo/react-hooks';
import { ApolloClient } from "apollo-client";
import { ApolloProvider } from "@apollo/react-hooks";
import { InMemoryCache } from "apollo-cache-inmemory";
import { HttpLink } from "apollo-link-http";
//import { onError } from "apollo-link-error";
//import { ApolloLink, Observable } from "apollo-link";
//import { TokenRefreshLink } from "apollo-link-token-refresh";

const cache = new InMemoryCache();

const client: any = new ApolloClient({
  link: new HttpLink({
    uri: "http://localhost:4000/graphql",
  }),
  cache: cache,
});

ReactDOM.render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <ChakraProvider>
        <Application />
      </ChakraProvider>
    </ApolloProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
