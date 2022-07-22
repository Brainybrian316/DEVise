const { gql } = require('apollo-server-express');

const typeDefs = gql`
  ########### 'GET' requests ###########
  type Query {
    users: [User]
    user(id: ID!): User
    devProjects: [DevProjects]
    devProject(id: ID!): DevProjects
    userProjects: [UserProjects]
    userProject(id: ID!): UserProjects
    me: User
  }

  ########### 'POST', 'PUT', 'DELETE' requests ###########

  type Mutation {
    createUser(input: CreateUserInput!): Auth
    login(email: String!, password: String!): Auth
    updateUser(input: UpdateUserInput): User
    deleteUser(id: ID!): User
    createDevProject(input: CreateDevProjectInput!): DevProjects
    updateDevProject(id: ID!, input: UpdateDevProjectInput!): DevProjects
    deleteDevProject(id: ID!): DevProjects
    createUserProjects(input: CreateUserProjectsInput ): UserProjects
    updateUserProjects(id: ID!, input: UpdateUserProjectsInput!): UserProjects
    deleteUserProjects(id: ID!): UserProjects
  }

  ########### Auth ###########
  type Auth {
    token: ID!
    user: User
  }

  ############### User schema ###############
  type User {
    _id: ID!
    firstName: String
    lastName: String
    username: String
    email: String
    password: String
    userProjects: [UserProjects]
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
    price: Int
    user: User
  }

  input CreateUserProjectsInput {
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
    price: Int
    user: ID
  }

  input UpdateUserProjectsInput {
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
    price: Int
    user: ID
  }
`;

module.exports = typeDefs;
