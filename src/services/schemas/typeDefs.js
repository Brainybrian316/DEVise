
const {gql } = require('apollo-server-express');

const typeDefs = gql`
type Query {
  user: User
}


type User {
  _id: ID!
  firstName: String
  lastName: String
  username: String
  email: String
  password: String
}
`;

module.exports = typeDefs;


