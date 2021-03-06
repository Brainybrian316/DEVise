const { faker } = require('@faker-js/faker');
const MongoClient = require('mongodb').MongoClient;
const  UserProjects = require('../models/UserProjects');
const fs = require('fs');
const User = require('../models/User');



const userProjectData = () => {
  const userProject = new UserProjects({
     title: faker.random.words(3),
     description: faker.lorem.paragraph(10),
     summary: faker.lorem.sentence(3),
     contributors: [],
    mainImage: faker.image.imageUrl(),
    images: [
      faker.image.imageUrl(),
      faker.image.imageUrl(),
      faker.image.imageUrl(),
    ],
    videos: [
      faker.image.imageUrl(),
      faker.image.imageUrl(),
      faker.image.imageUrl(),
    ],
    tags: [
      faker.random.word(),
      faker.random.word(),
      faker.random.word(),
    ],
    rating: faker.datatype.number({ max: 5 }),
    numReviews: faker.datatype.number({ max: 100}),
    price: faker.commerce.price(1, 20,),
    user: '',
  });
  return userProject;
}


async function seedUserProjects() {
  const client = new MongoClient('mongodb://localhost:27017/devise', { useNewUrlParser: true });
  await client.connect();
  const db = client.db();
  await db.collection('userprojects').deleteMany({});
  const userprojects = db.collection('userprojects');
  const userProjectSchema = [];
  for (let i = 0; i < 3; i++) {
    const Project = new UserProjects(userProjectData());
    userProjectSchema.push(Project);
  }
   // put user id in userProjects user field
   const users = await db.collection('users').find({}).toArray();
   for (let i = 0; i < userProjectSchema.length; i++) {
     userProjectSchema[i].user = users[i]._id;
   }
   const contributors = await db.collection('users').find({}).toArray();
   for (let i = 0; i < userProjectSchema.length; i++) {
     const randomContributor = contributors[Math.floor(Math.random() * contributors.length)];
     userProjectSchema[i].contributors.push(randomContributor._id);
   }

  await userprojects.insertMany(userProjectSchema);
  // create json object of userProjectData inside of user.json
  const userProjects = await userprojects.find({}).toArray();
  const userProjectsJson = JSON.stringify(userProjects, null, 2);
 fs.writeFileSync('./src/services/seeds/data/userProjects.json', userProjectsJson);

  await client.close();
}

module.exports = seedUserProjects;