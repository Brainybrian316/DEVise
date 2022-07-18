const userSeeds = require('./userSeeds');


async function allSeeds() {
  await userSeeds();
  console.log('Seeds complete');
}

allSeeds();
