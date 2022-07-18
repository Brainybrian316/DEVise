const { faker } = require('@faker-js/faker');
const MongoClient = require('mongodb').MongoClient;
const User = require('../models/User');


const userData = ()  => {
const firstName = faker.name.firstName();
const lastName = faker.name.lastName();
const user = new User({
  firstName,
  lastName,
  username: `${firstName}${lastName}`,
  email: faker.internet.email(`${firstName}${lastName}`),
  password: faker.internet.password(),
}
);
return user;
}



async function seedUsers() {
console.log('Seeding users...');
  const client = new MongoClient('mongodb://localhost:27017/devise', { useNewUrlParser: true });
  await client.connect();
  const db = client.db();
  await db.collection('users').deleteMany({});
  const users = db.collection('users');
  const userSchema = [];
  for (let i = 0; i < 10; i++) {
    const user = new User(
     userData()
    );
    
    userSchema.push(user);

  }
  
  await users.insertMany(userSchema);
  await client.close();
}





module.exports = seedUsers;

