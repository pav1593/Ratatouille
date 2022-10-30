const seedRecipes = require('./recipe-seeds');
const seedUsers = require('./user-seeds');
const seedFavourites = require('./favourite-seeds');
const seedComments = require('./comment-seeds');
const seedImages = require('./image-seeds');

const sequelize = require('../config/connection');

const seedAll = async () => {
  await sequelize.sync({ force: true });
  console.log('\n----- DATABASE SYNCED -----\n');

  await seedUsers();
  console.log('\n----- USERS SEEDED -----\n');

  await seedRecipes();
  console.log('\n----- RECIPES SEEDED -----\n');

  await seedFavourites();
  console.log('\n----- FAVOURITES SEEDED -----\n');

  await seedComments();
  console.log('\n----- COMMENTS SEEDED -----\n');

  await seedImages();
  console.log('\n----- IMAGES SEEDED -----\n');

  process.exit(0);
};

seedAll();
