import { ApolloClient, gql, InMemoryCache } from '@apollo/client';

const GRAPH_URL = 'http://localhost:4000/graphql';

export const client = new ApolloClient({
  uri: GRAPH_URL,
  cache: new InMemoryCache(),
});

// login 
export const LOGIN_MUTATION = gql`
  mutation Login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        firstName
        lastName
        username
        email
      }
    }
  }
`;