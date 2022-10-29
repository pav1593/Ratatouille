const router = require('express').Router();
const {Recipe,User,Favourite,Comment} = require('../../models');
const withAuth = require('../../utils/auth');

router.get('/', async (req, res) => {
    // find all recipes and include other users Favourited for the logged in user
    try {
        const recipeData = await Recipe.findAll({
            include: [{ model: User,attributes: {exclude: ['password']},through: {model:Favourite, attributes: ['date_created']}}]
          });
    
        const recipes = recipeData.map((recipe) => recipe.get({ plain: true }));
    
        // res.render('recipes', {
        //   recipes,
        //   logged_in: req.session.logged_in,
        // });

        res.status(200).json(recipes); // need to commment this out for prod
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
                    through: {model:Favourite, attributes: ['date_created']}
                  }],
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
        //user_id: req.session.user_id,
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
      ...req.body},
        // Gets the recipe based on the id given in the request parameters
       { where: {
          //user_id: req.session.user_id,
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
          //user_id: req.session.user_id,
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
  
  module.exports = router;