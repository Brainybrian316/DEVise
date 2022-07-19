
const { User, DevProjects  } = require('../models');


const resolvers = {
  Query: {
    users: async () =>  {
      return await User.find();
    },
    devProjects: async () => {
      return await DevProjects.find();
    }
  }
}

module.exports = resolvers;