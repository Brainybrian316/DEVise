const userSeeds = require('./userSeeds');
const devProjectSeeds = require('./DevProjectSeeds');


async function allSeeds() {
  await userSeeds();
  console.log('seeded users');
  await devProjectSeeds();
  console.log('Seeded dev projects');
  console.log('Seeds complete');
}

allSeeds();
