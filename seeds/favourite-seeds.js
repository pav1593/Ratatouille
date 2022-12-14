const { Favourite } = require('../models');

const favouriteData = [
  {
    user_id: 1,
    recipe_id: 4,
  },
  {
    user_id: 2,
    recipe_id: 1,
  },
  {
    user_id: 2,
    recipe_id: 2,
  },
  {
    user_id: 2,
    recipe_id: 3,
  },
  {
    user_id: 3,
    recipe_id: 1,
  },
  {
    user_id: 3,
    recipe_id: 4,
  },
  {
    user_id: 4,
    recipe_id: 1,
  },
];

const seedFavourites = () => Favourite.bulkCreate(favouriteData);

module.exports = seedFavourites;
