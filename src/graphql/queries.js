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
    userProject(id: $id) {
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

  export const GET_ALL_USER_PROJECTS_QUERY = gql`
  query GetAllUserProjects {
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
  `;

  export const GET_ME_QUERY = gql`
  query GetMe {
    me {
      _id 
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

export const GET_DEVPROJECTS_QUERY = gql`
  query GetDevProjects {
    devProjects{
      _id
      title 
      description
      summary
      authors
      mainImage
      images
      videos
      tags
    }
  }
  `;

  export const GET_ONE_DEVPROJECT_QUERY = gql`
  query GetOneDevProject($id: ID!) {
    devProject(id: $id) {
      title 
      description
      summary
      authors
      mainImage
      images
      videos
      tags
    }
  }
  `;


