
const { User, DevProjects, UserProjects  } = require('../models');
const { signToken } = require('../../utils/auth');
const { AuthenticationError } = require('apollo-server-express');
require("dotenv").config();


const resolvers = {
  Query: {
    me: async (_, args, context) => {
      if (context.user) {
        const userData = await User.findOne({ _id: context.user._id })
        .select('-__v -password');
        return userData;
      }
      throw new AuthenticationError('Invalid Credentials');
    },
    users: async () =>  {
      return await User.find();
    },
    devProjects: async () => {
      return await DevProjects.find();
    },
    userProjects: async () => {
      return await UserProjects.find();
    },
    user: async (_, { id }) => {
      return await User.findById(id);
    },
    devProject: async (_, { id }) => {
      return await DevProjects.findById(id);
    },
    userProject: async (_, { id }) => {
      return await UserProjects.findById(id);
    }
  },
  Mutation: {
    createUser: async (_, { input }) => {
      // rejectIf(!User); // if user is not logged in, reject
      const user = await User.create(input);
      const token = signToken(user);
      return { token, user };
  },
  login: async (_, { email, password }) => {
    const user = await User.findOne({ email });
    if (!user) {
      throw new AuthenticationError('Invalid Credentials');
    }
    const isValid = await user.isCorrectPassword(password);
    if (!isValid) {
      throw new AuthenticationError('Invalid Credentials');
    }
    const token = signToken(user);
    return { token, user };
    },
  updateUser: async (_, { id, input }) => {
    return await User.findByIdAndUpdate(id, input);
 },
   deleteUser: async (_, { id }) => {
      return await User.findByIdAndDelete(id);
   },
   createDevProject: async (_, { input }) => {
      return await DevProjects.create(input);
   },
   updateDevProject: async (_, { id, input }) => {
      return await DevProjects.findByIdAndUpdate(id, input);
   },
   deleteDevProject: async (_, { id }) => {
      return await DevProjects.findByIdAndDelete(id);
   },
   createUserProjects: async (_, { input }) => {
      return await UserProjects.create(input);
   },
   updateUserProjects: async (_, { id, input }) => {
      return await UserProjects.findByIdAndUpdate(id, input);
   },
   deleteUserProjects: async (_, { id }) => {
      return await UserProjects.findByIdAndDelete(id);
   }
   
}
};

module.exports = resolvers;