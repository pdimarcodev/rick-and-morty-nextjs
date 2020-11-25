import { ApolloClient, InMemoryCache } from "@apollo/client";
import { createHttpLink } from "apollo-link-http";
//import { InMemoryCache } from "apollo-cache-inmemory";

//  const link = createHttpLink({
//   uri: "https://rickandmortyapi.com/graphql/"
// });

export const client = new ApolloClient({
  uri: "https://rickandmortyapi.com/graphql/",
  cache: new InMemoryCache(),
});

