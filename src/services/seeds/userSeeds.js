const { faker } = require('@faker-js/faker');
const MongoClient = require('mongodb').MongoClient;
const User = require('../models/User');
const fs = require('fs');

const userData = () => {
  const firstName = faker.name.firstName();
  const lastName = faker.name.lastName();
  const user = new User({
    firstName,
    lastName,
    username: `${firstName}${lastName}`,
    email: faker.internet.email(`${firstName}${lastName}`),
    password: faker.internet.password(8, true),
    userProjects: [],
  });
  return user;
};

async function seedUsers() {
  const client = new MongoClient('mongodb://localhost:27017/devise', { useNewUrlParser: true });
  await client.connect();
  const db = client.db();
  await db.collection('users').deleteMany({});
  const users = db.collection('users');
  const userSchema = [];
  for (let i = 0; i < 3; i++) {
    const user = new User(userData());
    userSchema.push(user);
  }
  const userProjects = await db.collection('userprojects').find({}).toArray();
  for (let i = 0; i < userSchema.length; i++) {
    const randomUserProject = userProjects[Math.floor(Math.random() * userProjects.length)];
    userSchema[i].userProjects.push(randomUserProject._id);
  }
  await users.insertMany(userSchema);
  const usersJson = await users.find({}).toArray();
  const usersJsonString = JSON.stringify(usersJson, null, 2);
  fs.writeFileSync('./src/services/seeds/data/users.json', usersJsonString);
  await client.close();
}

module.exports = seedUsers;
