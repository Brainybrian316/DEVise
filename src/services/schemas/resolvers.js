
const { User } = require('../models');


const resolvers = {
  Query: {
    getAllUsers: async () =>  {
      return await User.findAll({});
    }
  }
}

module.exports = resolvers;