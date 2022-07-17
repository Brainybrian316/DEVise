import express from 'express';
// import path from 'path';
import db from  './config/connection';
import { ApolloServer } from 'apollo-server-express';
// import { readFile } from 'fs/promises';
// import { expressjwt } from 'express-jwt';
// import jwt from 'jsonwebtoken';
import { typeDefs, resolvers } from './schemas';
// import { authMiddleware } from './utils/auth';


const PORT = process.env.PORT || 3000;
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));



const apolloServer = new ApolloServer({
  typeDefs,
  resolvers,
  // context: authMiddleware,
});

await apolloServer.start();
apolloServer.applyMiddleware({ app, path: '/graphql' });

// // if we're in production, serve client/build as static assets
// if (process.env.NODE_ENV === 'production') {
//   app.use(express.static(path.join(__dirname, '../client/build')));
// }

// // get all is *
// app.get('*', (req, res) => {
//   res.sendFile(path.join(__dirname, '../client/build/index.html'));
// });

db.once('open', () => {
  app.listen(PORT, () => {
    `Now listening on http://localhost:${PORT}`;
  });
  console.log(`GraphQL server running at http://localhost:${PORT}${apolloServer.graphqlPath}`);
})