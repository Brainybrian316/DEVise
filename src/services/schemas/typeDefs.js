
const {gql } = require('apollo-server-express');

const typeDefs = gql`
########### 'GET' requests ###########
type Query {
  users: [User]
  devProjects: [DevProjects]
  user(id: ID!): User
  devProject(id: ID!): DevProjects
  userProjects: [UserProjects]
}

########### 'POST', 'PUT', 'DELETE' requests ###########

type Mutation {
  createUser(input: CreateUserInput!): User
  updateUser(id: ID!, input: UpdateUserInput!): User
  deleteUser(id: ID!): User
  createDevProject(input: CreateDevProjectInput!): DevProjects
  updateDevProject(id: ID!, input: UpdateDevProjectInput!): DevProjects
  deleteDevProject(id: ID!): DevProjects
}


############### User schema ###############
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

############### Dev Projects schema ###############

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

############### User Projects schema ##############

type UserProjects {
  _id: ID
  user: ID
  title: String
  description: String
  summary: String
  contributors: [String]
  mainImage: String
  images: [String]
  videos: [String]
  tags: [String]
  rating: Int
  numReviews: Int
  price: Float
}
`;

module.exports = typeDefs;


