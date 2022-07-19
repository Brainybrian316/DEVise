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
  for (let i = 0; i < 10; i++) {
    const user = new User(userData());
    userSchema.push(user);
  }
  await users.insertMany(userSchema);
  const usersJson = await users.find({}).toArray();
  const usersJsonString = JSON.stringify(usersJson);
  fs.writeFileSync('./src/services/seeds/data/users.json', usersJsonString);
  await client.close();
}

module.exports = seedUsers;
