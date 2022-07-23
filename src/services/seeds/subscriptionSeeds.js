const MongoClient = require('mongodb').MongoClient;
const fs = require('fs');
const {Subscriptions,} = require('../models/index.js');


const data = [
    {
    tier: '1',
    name: 'Bronze',
    perks: ['Free ice cream', 'unlimited photos'],
    price: 2.50,
    users: []
    },
    {
    tier: '2',
    name: 'Silver',
    perks: ['Extra scoop of ice cream', 'Pet panda'],
    price: 7.53,
    users: []
    },
    {
    tier: '3',
    name: 'Gold',
    perks: ['Meet Ben and Jerry', 'Swag bag'],
    price: 2.50,
    users: []
    },
];



async function seedSubscription() {
  const client = new MongoClient('mongodb://localhost:27017/devise', { useNewUrlParser: true });
  await client.connect();
  const db = client.db();
  await db.collection('subscriptions').deleteMany({});
  const subscription = db.collection('subscriptions');
  const subscriptionSchema = [];
  for (let i = 0; i < data.length; i++) {
    const Sub = new Subscriptions(data[i])
    subscriptionSchema.push(Sub);
  }
  await subscription.insertMany(subscriptionSchema)

  const subs = await subscription.find({}).toArray();
  const subscriptionJson = JSON.stringify(subs, null, 2);
  fs.writeFileSync('./src/services/seeds/data/subscriptions.json', subscriptionJson);

  await client.close();
}

module.exports = seedSubscription;