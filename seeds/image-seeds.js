const { Image } = require('../models');

const imageData = [
  {
    location:
      'https://res.cloudinary.com/dzfutniia/image/upload/v1667152826/CloudinaryDemo/stki1fzavrtltjlragsh.jpg',
    user_id: 1,
    recipe_id: 1,
  },
  {
    location:
      'https://res.cloudinary.com/dzfutniia/image/upload/v1667152826/CloudinaryDemo/tdlic8n8ky8uanm2cu7b.jpg',
    user_id: 1,
    recipe_id: 3,
  },
  {
    location:
      'https://res.cloudinary.com/dzfutniia/image/upload/v1667152825/CloudinaryDemo/vpble0rpy8fhjpkegbra.jpg',
    user_id: 2,
    recipe_id: 4,
  },
  {
    location:
      'https://res.cloudinary.com/dzfutniia/image/upload/v1667152316/CloudinaryDemo/kfckdfzvx4qhx36twtvq.jpg',
    user_id: 1,
    recipe_id: 2,
  },
];

const seedImages = () => Image.bulkCreate(imageData);

module.exports = seedImages;
