import { ApolloClient, gql, InMemoryCache } from '@apollo/client';


const GRAPH_URL = 'http://localhost:4000/graphql';

export const client = new ApolloClient({
  uri: GRAPH_URL,
  cache: new InMemoryCache(),
});

export const USER_PROJECTS_FRAGMENT = gql`
  fragment userProjects on User {
    id
    title
    description
    summary
    contributors
    mainImage
    images
    videos
    tags
    rating
    numReviews
    price
  }
`;

export const GET_USER_QUERY = gql`
  query GetUser($id: ID!) {
    user(id: $id) {
      id
      firstName
      lastName
      username
      email
      password
      ${USER_PROJECTS_FRAGMENT}
    }
  }
`;

export const GET_USERS_QUERY = gql`
  query GetUsers {
    users {
      id
      firstName
      lastName
      username
      email
      password
    }
  }
`;


