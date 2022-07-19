
const { User, DevProjects  } = require('../models');


const resolvers = {
  Query: {
    users: async () =>  {
      return await User.find();
    },
    devProjects: async () => {
      return await DevProjects.find();
    },
    user: async (_, { id }) => {
      return await User.findById(id);
    },
    devProject: async (_, { id }) => {
      return await DevProjects.findById(id);
    }
  },
  Mutation: {
    createUser: async (_, { input }) => {
      // rejectIf(!User); // if user is not logged in, reject
      return await User.create(input);
  },
}
};

module.exports = resolvers;