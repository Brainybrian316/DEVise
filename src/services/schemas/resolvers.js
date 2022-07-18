const { User } = require('../models/User');


const resolvers = {
  Query: {
    async getAllUsers() {
      return await User.find();
    }
  }
}

module.exports = resolvers;