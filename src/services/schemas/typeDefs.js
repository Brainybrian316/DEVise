
const {gql } = require('apollo-server-express');

const typeDefs = gql`
type Query {
  users: [User]
  devProjects: [DevProjects]
  user(id: ID!): User
  devProject(id: ID!): DevProjects
}

type Mutation {
  createUser(input: CreateUserInput!): User
  updateUser(id: ID!, input: UpdateUserInput!): User
  deleteUser(id: ID!): User
  createDevProject(input: CreateDevProjectInput!): DevProjects
  updateDevProject(id: ID!, input: UpdateDevProjectInput!): DevProjects
  deleteDevProject(id: ID!): DevProjects
}

type User {
  _id: ID!
  firstName: String
  lastName: String
  username: String
  email: String
  password: String
}

input CreateUserInput {
  firstName: String
  lastName: String
  username: String
  email: String
  password: String
}

input UpdateUserInput {
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
  authors: [String]
  mainImage: String
  images: [String]
  videos: [String]
  tags: [String]
  createdAt: String
  updatedAt: String
}

input CreateDevProjectInput {
  title: String
  description: String
  summary: String
  authors: [String]
  mainImage: String
  images: [String]
  videos: [String]
  tags: [String]
}

input UpdateDevProjectInput {
  title: String
  description: String
  summary: String
  authors: [String]
  mainImage: String
  images: [String]
  videos: [String]
  tags: [String]
}
`;

module.exports = typeDefs;


