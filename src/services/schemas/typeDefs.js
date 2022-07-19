
const {gql } = require('apollo-server-express');

const typeDefs = gql`
type Query {
  users: [User]
  devProjects: [DevProjects]
}


type User {
  _id: ID!
  firstName: String
  lastName: String
  username: String
  email: String
  password: String
}

type DevProjects {
  _id: ID!
  title: String
  description: String
  summary: String
  authors: String
  mainImage: String
  images: [String]
  videos: [String]
  tags: [String]
  createdAt: String
  updatedAt: String
}
`;

module.exports = typeDefs;


