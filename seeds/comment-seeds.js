const { Comment } = require('../models');

const commentData = [
  {
    comment: 'Loved it!',
    rating: 5,
    user_id: 1,
    recipe_id: 4,
  },
  {
    comment: 'My favourite recipe',
    rating: 5,
    user_id: 4,
    recipe_id: 1,
  },
  {
    comment: 'Kids love it',
    rating: 4,
    user_id: 2,
    recipe_id: 1,
  },
  {
    comment: 'Easy to make and healthy',
    rating: 4,
    user_id: 3,
    recipe_id: 4,
  },
  {
    comment: "I'll make this recipe again",
    rating: 5,
    user_id: 3,
    recipe_id: 1,
  },
];

const seedComments = () => Comment.bulkCreate(commentData);

module.exports = seedComments;
