import { gql } from '@apollo/client';

export const USER_DETAIL_FRAGMENT = gql`
  fragment UserDetail on User {
    _id
    firstName
    lastName
    username
    email
  }
`;

 export const USER_PROJECTS_FRAGMENT = gql`
  fragment projects on UserProjects {
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
`;