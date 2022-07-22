
const { User, DevProjects, UserProjects  } = require('../models');
const { signToken } = require('../../utils/auth');
const { AuthenticationError } = require('apollo-server-express');


const resolvers = {
  Query: {
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
      return await User.create(input);
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