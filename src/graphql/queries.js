import { ApolloClient, gql, InMemoryCache } from '@apollo/client';


const GRAPH_URL = 'http://localhost:4000/graphql';

export const client = new ApolloClient({
  uri: GRAPH_URL,
  cache: new InMemoryCache(),
});

//  const USER_PROJECTS_FRAGMENT = gql`
//   fragment projects on UserProjects {
//     _id
//     title
//     description
//     summary
//     contributors
//     mainImage
//     images
//     videos
//     tags
//     rating
//     numReviews
//     price
//   }
// `;

export const GET_USER_QUERY = gql`
  query GetUser($id: ID!) {
    user(id: $id) {
      firstName
      lastName
      username
      email
      userProjects {
        _id
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
    }
  }

`;

export const GET_USERS_QUERY = gql`
  query GetUsers {
    users {
      firstName
      lastName
      username
      email
    }
  }
`;

export const GET_USER_PROJECTS_QUERY = gql` 
  query GetUserProjects($id: ID!) {
    userProjects(id: $id) {
      _id
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
  }
  `;


