
const { User } = require('../models');


const resolvers = {
  Query: {
    getAllUsers: async () =>  {
      return await User.find();
    }
  }
}

module.exports = resolvers;