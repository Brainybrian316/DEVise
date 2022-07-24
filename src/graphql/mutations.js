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

export const LOGOUT_MUTATION = gql`
  mutation Logout {
    logout
  }
`;

export const CREATE_USER_MUTATION = gql`
  mutation CreateUser($firstName: String!, $lastName: String!, $username: String!, $email: String!, $password: String!) {
    createUser(firstName: $firstName, lastName: $lastName, username: $username, email: $email, password: $password) {
      firstName
      lastName
      username
      email
    }
  }
`;

export const UPDATE_USER_MUTATION = gql`
  mutation UpdateUser($firstName: String!, $lastName: String!, $username: String!, $email: String!) {
    updateUser(firstName: $firstName, lastName: $lastName, username: $username, email: $email) {
      firstName
      lastName
      username
      email
    }
  }
`;
