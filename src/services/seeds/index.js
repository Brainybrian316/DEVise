const userSeeds = require('./userSeeds');
const devProjectSeeds = require('./DevProjectSeeds');
const userProjectSeeds = require('./UserProjectSeeds');
const subscriptionSeeds = require('./subscriptionSeeds')

async function allSeeds() {
  await userSeeds();
  console.log('seeded users');
  await devProjectSeeds();
  console.log('Seeded dev projects');
  await userProjectSeeds();
  console.log('Seeded user projects');
  console.log('Seeds complete');
  await subscriptionSeeds();
  console.log('Subscriptions seeded')
}

allSeeds();
