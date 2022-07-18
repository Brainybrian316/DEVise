const express = require('express');
const path = require('path');
const db = require('./config/connection');
const { ApolloServer } = require('apollo-server-express');
const { resolvers } = require('./schemas/resolvers');
const { readFile } = require('fs/promises');
// import { expressjwt } from 'express-jwt';
// import jwt from 'jsonwebtoken';
// import { authMiddleware } from './utils/auth';


const PORT = process.env.PORT || 3000;

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));


const typeDefs =  readFile('./schemas/schema.graphql', 'utf-8');

const apolloServer = new ApolloServer({
  typeDefs,
  resolvers,
  // context: authMiddleware,
});


 apolloServer.start();
apolloServer.applyMiddleware({ app, path: '/graphql' });



// if we're in production, serve client/build as static assets
if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '../client/build')));
}

// get all is *
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../client/build/index.html'));
});

db.once('open', () => {
  app.listen(PORT, () => {
    console.log(`API server running on port ${PORT}!`);
    console.log(`Use GraphQL at http://localhost:${PORT}${apolloServer.graphqlPath}`);
  });
});
