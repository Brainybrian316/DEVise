
const  { ApolloServerPluginDrainHttpServer } = require('apollo-server-core');
const { InMemoryCache } = require('@apollo/client');
const express = require('express');
const http = require('http');
const { ApolloServer } = require('apollo-server-express');
const path = require('path');
const { resolvers, typeDefs } = require('./schemas');
const { authMiddleware } = require('../utils/auth');
const db = require('./config/connection');
require("dotenv").config();


const PORT = process.env.PORT || 4000;

async function startApolloServer() {
  const app = express();
  const httpServer = http.createServer(app);

  const server = new ApolloServer({
    typeDefs,
    resolvers,
    csrfPrevention: true,
    cache: new InMemoryCache(),
    plugins: [ApolloServerPluginDrainHttpServer({ httpServer })],
    context: authMiddleware
  });

await server.start();
server.applyMiddleware({ app });

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '../client/build')));
}

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../client/build/index.html'));
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



