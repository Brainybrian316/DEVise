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
    rating: faker.datatypes.number({ min: 0, max: 5 }),
    numReviews: faker.datatypes.number(),
    price: faker.commerce.price(1, 20, 2, '$')
  });
  return userProject;
}