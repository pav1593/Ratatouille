const Recipe = require('./Recipe');
const User = require('./User');
const Favourite = require('./Favourite');
const Comment = require('./Comment');

// Users hasMany Recipes
// User.hasMany(Recipe,{
//   foreignKey:'user_id',
//   onDelete: 'CASCADE',
// });

// // Recipe belongsTo User
// Recipe.belongsTo(User, {
//     foreignKey: 'user_id',
// });

/*
// Users hasMany Favourites
User.hasMany(Favourite,{
  foreignKey:'user_id',
  onDelete: 'CASCADE',
});

// Favourite belongsTo User
Favourite.belongsTo(User, {
    foreignKey: 'user_id',
});
*/

// User belongsToMany Recipes through Favourite
User.belongsToMany(Recipe, {
  through: {
    model: Favourite,
    as: "favourite_recipes",
    unique: false
  }
});

// Recipe belongsToMany Users through Favourite
Recipe.belongsToMany(User, {
  through: {
    model: Favourite,
    as: "users_favourites",
    unique: false
  }
});

// Users hasMany Commments
User.hasMany(Comment, {
  foreignKey:'user_id',
  onDelete: 'CASCADE',
});

// Comment belongsTo User
Comment.belongsTo(User,{
  foreignKey: 'user_id',
});

// Recipe hasMany Commments
Recipe.hasMany(Comment, {
  foreignKey:'recipe_id',
  onDelete: 'CASCADE',
});

// Comment belongsTo Recipe
Comment.belongsTo(Recipe,{
  foreignKey: 'recipe_id',
});


module.exports = { Recipe,User,Comment,Favourite };
