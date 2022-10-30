
const router = require ('express').Router();
const { User, Recipe, Comment, Favourite,Image } = require('../models');
const sequelize = require('../config/connection');
const withAuth = require('../utils/auth');

//-------------------get all the recipes with userdata----------------------
router.get('/', async(req, res) => {
    try{
        const recipeData = await Recipe.findAll({
            attributes: ['name', 'date_created'],//and picture uploaded?
            include: [{model: User, attributes: ['name']},
                      {model: Image},
                     ]
        });
        const recipes = recipeData.map((recipe)=>recipe.get({plain:true}));

        res.render('homepage', {
            recipes,
            logged_in: req.session.logged_in
        });
        res.status(200).json(recipes);
    } catch (err) {
        res.status(500).json(err);}  
});

//------------------get one specific recipe--------------------
router.get('/recipes/:id', async(req, res)=> {
     try{
        const recipeData = await Recipe.findByPk(req.params.id, {
         attributes: ['name', 'description', 'ingredients', 'steps','date_created'],
         include: [{model: User, attributes:['name']}, {model: Comment}]
        })
        const recipes = recipeData.get({plain: true});

        res.render('receipes', {
            ...recipes,
            logged_in: req.session.logged_in
        });
     } catch(err) {
        res.status(500).json(err);
     }
});

//------------------user profile routes-------------------
router.get('/users', withAuth, async (req, res) => {
    try{
        const userData = await User.findByPk(req.session.user_id, {
            attributes: {exclude: ['password']},
            include: [
                {model: Recipe, attributes: ['name', 'date_created']},
                {model: Favourite},
                {model: Comment},
        ]
        });

        const user = userData.get({plain: true});

        res.render('userpage', {...user, logged_in: true});
    } catch(err) {
        res.status(500).json(err);
    }
})

//----------------login routes--------------------
router.get('/login', (req, res)=> {
    if(req.session.logged_in) {
        res.redirect('/');
        return;
    }
    res. render('login');
})


module.exports = router;

