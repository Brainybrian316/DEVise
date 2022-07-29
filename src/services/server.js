
const express = require('express');
const path = require('path');
const db = require('./config/connection');
const { ApolloServer } = require('apollo-server-express');
const { resolvers, typeDefs } = require('./schemas');
const { authMiddleware } = require('../utils/auth');
require("dotenv").config();


const PORT = process.env.PORT || 4000;

async function startApolloServer() {
  const app = express();

  const server = new ApolloServer({
    typeDefs,
    resolvers,
    context: authMiddleware
  });

await server.start();
server.applyMiddleware({ app, });

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '../../build')));
}

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../../build/index.html'));
  
});

db.once('open', () => {
  app.listen(PORT, () => {
    console.log(`API server running on port ${PORT}!`);
    console.log(`Use GraphQL at http://localhost:${PORT}${server.graphqlPath}`);
  });
}
);
}

startApolloServer();



