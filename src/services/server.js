const express = require('express');
const path = require('path');
const db = require('./config/connection');
// const { ApolloServer } = require('apollo-server-express');
// import { readFile } from 'fs/promises';
// import { expressjwt } from 'express-jwt';
// import jwt from 'jsonwebtoken';
// const  { typeDefs, resolvers } = require('./schemas/index');
// import { authMiddleware } from './utils/auth';


const PORT = process.env.PORT || 3000;
const app = express();



// const apolloServer = new ApolloServer({
//   typeDefs,
//   resolvers,
//   // context: authMiddleware,
// });

// apolloServer.applyMiddleware({ app, path: '/graphql' });

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

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
