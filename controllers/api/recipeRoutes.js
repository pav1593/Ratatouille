const router = require('express').Router();
const {Recipe,User,Favourite,Comment,Image} = require('../../models');
const sequelize = require('../../config/connection');
const withAuth = require('../../utils/auth');
const { storage } = require('../../storage/storage');
const multer = require('multer');
const upload = multer({ storage });


//-----------routes for user recipe CRUD---------------------
router.get('/', async (req, res) => {
    // find all Recipes and include other users Favourites and Images for the logged in user
    try {
        const recipeData = await Recipe.findAll({
            include: [{ model: User,
                        attributes: {exclude: ['password']},
                      }, 
                      {model:Favourite, attributes: ['date_created']}, 
                      {model:Comment},
                      {model:Image}],
            // where: {
            //   user_id: req.session.user_id
            // },
          });
    
        const recipes = recipeData.map((recipe) => recipe.get({ plain: true }));
    
        res.render('user', {
          recipes,
          logged_in: req.session.logged_in,
        });

        res.status(200).json(recipes);
      } catch (err) {
        res.status(500).json(err);
      }
  });
  
  router.get('/:id', async (req, res) => {
    // find one recipe  by its `id` value and include user Favourite for the logged in user
    try {
      const recipeData = await Recipe.findByPk(req.params.id, {
        include: [{ model: User,
                  attributes: {exclude: ['password']},
                }, 
                {model:Favourite, attributes: ['date_created']}, 
                {model:Comment},
                {model:Image}],
        // where: {
        //   user_id: req.session.user_id
        // },
        });
  
      if (!recipeData) {
        res.status(404).json({ message: 'No Recipe found with that id for the user!' });
        return;
      }

      res.status(200).json(recipeData);
    } catch (err) {
      res.status(500).json(err);
    }
  });
  
  router.post('/', async (req, res) => {
    // create a new recipe
    try {
      const recipeData = await Recipe.create({
        ...req.body,
        user_id: req.session.user_id,
      });
      res.status(200).json(recipeData);
    } catch (err) {
      res.status(400).json(err);
    }
  });
  
  router.put('/:id', async (req, res) => {
    // update a recipe by its `id` value
    try {
    const recipeData = await Recipe.update({
      ...req.body,date_created: sequelize.literal('CURRENT_TIMESTAMP')
    },
        // Gets the recipe based on the id given in the request parameters
       { where: {
          user_id: req.session.user_id,
          id: req.params.id,
        },
      });
  
      if (!recipeData) {
        res.status(404).json({ message: 'No recipe found with that id!' });
        return;
      }
      
      res.status(200).json(recipeData);
    } catch (err) {
      res.status(400).json(err);
    }
  
  });
  
  router.delete('/:id', async (req, res) => {
    // delete a recipe by its `id` value
    try {
      const recipeData = await Recipe.destroy({
        where: {
          id: req.params.id,
          user_id: req.session.user_id,
        },
      });
  
      if (!recipeData) {
        res.status(404).json({ message: 'No recipe found with that id!' });
        return;
      }
  
      res.status(200).json(recipeData);
    } catch (err) {
      res.status(500).json(err);
    }
  });

  //-----------routes for user recipe images creation and deletion ---------------------
  
  router.post('/images', async (req, res) => {
    // create a new favourite for the logged in user
    try {
      const imageData = await Image.create({
        ...req.body,
        user_id: req.session.user_id,
      });
      res.status(200).json(imageData);
    } catch (err) {
      res.status(400).json(err);
    }
  });
  
  
  router.delete('/images/:id', async (req, res) => {
    // delete a favourite by its `id` value
    try {
      const imageData = await Image.destroy({
        where: {
          id: req.params.id,
          user_id: req.session.user_id //need to change this for prod with session user_id
        },
      });
  
      if (!imageData) {
        res.status(404).json({ message: 'No favourite found with that id!' });
        return;
      }
  
      res.status(200).json(imageData);
    } catch (err) {
      res.status(500).json(err);
    }
  });
  
  module.exports = router;