const { faker } = require('@faker-js/faker');
const MongoClient = require('mongodb').MongoClient;
const  DevProjects = require('../models/DeviseProjects');
const fs = require('fs');

const projectData = () => {
  const project = new DevProjects({
      title: faker.random.words(3),
      description: faker.lorem.paragraph(10),
      summary: faker.lorem.sentence(3),
      authors: `'Devise'`,
      mainImage: faker.image.imageUrl(),
      images: [faker.image.imageUrl(), faker.image.imageUrl(), faker.image.imageUrl()],
      videos: [faker.image.imageUrl(), faker.image.imageUrl(), faker.image.imageUrl()],
      tags: [faker.random.word(), faker.random.word(), faker.random.word()],
  });
  return project;
}


async function seedDevProjects() {
  const client = new MongoClient('mongodb://localhost:27017/devise', { useNewUrlParser: true });
  await client.connect();
  const db = client.db();
  await db.collection('devprojects').deleteMany({});
  const devprojects = db.collection('devprojects');
  const devProjectSchema = [];
  for (let i = 0; i < 10; i++) {
    const Project = new DevProjects(projectData());
    devProjectSchema.push(Project);
  }
  await devprojects.insertMany(devProjectSchema);
   
  const devProjects = await devprojects.find({}).toArray();
  const devProjectsJson = JSON.stringify(devProjects, null, 2);
  fs.writeFileSync('./src/services/seeds/data/devProjects.json', devProjectsJson);
  await client.close();
}

module.exports = seedDevProjects;



