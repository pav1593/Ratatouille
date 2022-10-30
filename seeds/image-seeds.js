const { Image } = require('../models');

const imageData = [
  {
    location: "./images/1.png",
    user_id:1,
    recipe_id:1
  },
  {
    location: "./images/2.png",
    user_id:1,
    recipe_id:1
  },
  {
    location: "./images/3.png",
    user_id:1,
    recipe_id:1
  },
  {
    location: "./images/4.png",
    user_id:2,
    recipe_id:4
  },
];

const seedImages = () => Image.bulkCreate(imageData);

module.exports = seedImages;
