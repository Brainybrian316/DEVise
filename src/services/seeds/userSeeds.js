const { faker } = require('@faker-js/faker');
const MongoClient = require('mongodb').MongoClient;
const User = require('../models/User');

async function seedUsers() {
console.log('Seeding users...');
  const client = new MongoClient('mongodb://localhost:27017/devise', { useNewUrlParser: true });
  await client.connect();
  const db = client.db();
  await db.collection('users').deleteMany({});
  const users = db.collection('users');
  const userSchema = [];
  for (let i = 0; i < 10; i++) {
    const user = new User({
      firstName: faker.name.firstName(),
      lastName: faker.name.lastName(),
      username: faker.fake('{{name.firstName}} {{name.lastName}}'),
      email: faker.internet.email(),
      password: faker.internet.password(),
    });
    userSchema.push(user);
  }
  await users.insertMany(userSchema);
  await client.close();
}

module.exports = seedUsers;

