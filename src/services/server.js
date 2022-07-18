const express = require('express');
const path = require('path');
const db = require('./config/connection');
const { ApolloServer } = require('apollo-server-express');
const { resolvers } = require('./schemas/resolvers');
// const { typeDefs }  = require('./schemas/schema.graphql');
const { readFile } = require('fs/promises');
// import { expressjwt } from 'express-jwt';
// import jwt from 'jsonwebtoken';
// import { authMiddleware } from './utils/auth';


const PORT = process.env.PORT || 3000;

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));


const typeDefs = readFile(path.join(__dirname, './schemas/schema.graphql'), 'utf-8');

const server = new ApolloServer({
  typeDefs,
  resolvers,
  // context: authMiddleware,
});


 server.start();
server.applyMiddleware({ app, path: '/graphql' });



// if we're in production, serve client/build as static assets
// if (process.env.NODE_ENV === 'production') {
//   app.use(express.static(path.join(__dirname, '../client/build')));
// }

// // get all is *
// app.get('*', (req, res) => {
//   res.sendFile(path.join(__dirname, '../client/build/index.html'));
// });

db.once('open', () => {
  app.listen({ port: PORT }, () => {
    console.log(`Server running on port http://localhost:${PORT}`);
    console.log(`GraphQL endpoint at http://localhost:${PORT}/graphql`)
  });
});
