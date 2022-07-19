const { faker } = require('@faker-js/faker');
const MongoClient = require('mongodb').MongoClient;
const  UserProjects = require('../models/UserProjects');

const userProjectData = () => {
  const userProject = new UserProjects({
     user: faker.database.mongodbObjectId(),
     title: faker.random.words(3),
     description: faker.lorem.paragraph(10),
     summary: faker.lorem.sentence(3),
     contributors: [
      faker.database.mongodbObjectId(), 
      faker.database.mongodbObjectId(),
      faker.database.mongodbObjectId(),
    ],
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
    price: faker.commerce.price(1, 20, 2, '$')
  });
  return userProject;
}

async function seedUserProjects() {
  console.log('Seeding user projects...');
  const client = new MongoClient('mongodb://localhost:27017/devise', { useNewUrlParser: true });
  await client.connect();
  const db = client.db();
  await db.collection('userprojects').deleteMany({});
  const userprojects = db.collection('userprojects');
  const userProjectSchema = [];
  for (let i = 0; i < 10; i++) {
    const Project = new UserProjects(userProjectData());
    userProjectSchema.push(Project);
  }
  await userprojects.insertMany(userProjectSchema);
  await client.close();
}

module.exports = seedUserProjects;