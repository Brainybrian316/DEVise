const express = require('express');
const { ApolloServer } = require('apollo-server-express');
const path = require('path');
const { resolvers, typeDefs } = require('./schemas');
// import { authMiddleware } from './utils/auth';
const db = require('./config/connection');
// const { readFile } = require('fs/promises');
// import { expressjwt } from 'express-jwt';
// import jwt from 'jsonwebtoken';



const PORT = process.env.PORT || 3000;

const app = express();

const server = new ApolloServer({
  typeDefs,
  resolvers,
  // context: authMiddleware,
});


server.applyMiddleware({ app, path: '/graphql' });
app.use(express.urlencoded({ extended: false }));
app.use(express.json());




//  server.start();
// server.applyMiddleware({ app, path: '/graphql' });



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
    console.log(`Use GraphQL at http://localhost:${PORT}${server.graphqlPath}`);
  });
});
