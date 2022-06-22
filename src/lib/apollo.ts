import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
  uri: 'https://api-sa-east-1.graphcms.com/v2/cl4o6307n0rnm01xm8fh8d1p7/master',
  cache: new InMemoryCache()
})