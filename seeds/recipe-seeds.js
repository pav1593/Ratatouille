const { Recipe } = require('../models');

const recipeData = [
  {
    name: "Chorizo & mozzarella gnocchi bake",
    description: "Upgrade cheesy tomato pasta with gnocchi, chorizo and mozzarella for a comforting bake that makes an excellent midweek meal",
    ingredients: `1 tbsp olive oil
    1 onion , finely chopped
    2 garlic cloves , crushed
    120g chorizo , diced
    2 x 400g cans chopped tomatoes
    1 tsp caster sugar
    600g fresh gnocchi
    125g mozzarella ball, cut into chunks
    small bunch of basil , torn
    green salad , to serve`,
    steps: `STEP 1
    Heat the oil in a medium pan over a medium heat. Fry the onion and garlic for 8-10 mins until soft. Add the chorizo and fry for 5 mins more. Tip in the tomatoes and sugar, and season. Bring to a simmer, then add the gnocchi and cook for 8 mins, stirring often, until soft. Heat the grill to high.
    
    STEP 2
    Stir ¾ of the mozzarella and most of the basil through the gnocchi. Divide the mixture between six ovenproof ramekins, or put in one baking dish. Top with the remaining mozzarella, then grill for 3 mins, or until the cheese is melted and golden. Season, scatter over the remaining basil and serve with green salad.`,
    user_id: 1
  },
  {
    name: "Easy butter chicken",
    description: "Fancy a healthy version of your favourite Friday night curry? Try our easy butter chicken - the meat can be marinaded the day before so you can get ahead on your prep",
    ingredients: `500g skinless boneless chicken thighs
    For the marinade:
    1/2-1 lemon, (to taste) juiced
    2 tsp ground cumin
    2 tsp paprika
    1-2 tsp hot chilli powder
    200g natural yogurt
    For the curry:
    2 tbsp vegetable oil
    1 large onion, chopped
    3 garlic cloves, crushed
    1 green chilli, deseeded and finely chopped (optional)
    thumb-sized piece ginger, grated
    1 tsp garam masala
    2 tsp ground fenugreek
    3 tbsp tomato purée
    300ml chicken stock
    50g flaked almonds, toasted
    To serve (optional):
    cooked basmati rice
    naan bread
    mango chutney or lime pickle
    fresh coriander
    lime wedges`,
    steps: `STEP 1
    In a medium bowl, mix all the marinade ingredients with some seasoning. Chop the chicken into bite-sized pieces and toss with the marinade. Cover and chill in the fridge for 1 hr or overnight.
    
    STEP 2
    In a large, heavy saucepan, heat the oil. Add the onion, garlic, green chilli, ginger and some seasoning. Fry on a medium heat for 10 mins or until soft.
    
    STEP 3
    Add the spices with the tomato purée, cook for a further 2 mins until fragrant, then add the stock and marinated chicken. Cook for 15 mins, then add any remaining marinade left in the bowl. Simmer for 5 mins, then sprinkle with the toasted almonds. Serve with rice, naan bread, chutney, coriander and lime wedges, if you like.`,
    user_id: 1
  },
  {
    name: "Easy green vegetable soup",
    description: "Cook a bowlful of goodness inspired by the most famous soup connoisseur in the galaxy, the Soup Dragon, from the hit children's show Clangers",
    ingredients: `1bunch spring onions, chopped
    1large potato, peeled and chopped
    1 garlic clove, crushed
    1l vegetable stock
    250g frozen peas
    100g fresh spinach
    300ml natural yogurt
    few mint leaves, basil leaves, cress or a mixture, to serve`,
    steps: `STEP 1
    Put the spring onions, potato and garlic into a large pan. Pour over the vegetable stock and bring to the boil.
    
    STEP 2
    Reduce the heat and simmer for 15 mins with a lid on or until the potato is soft enough to mash with the back of a spoon.
    
    STEP 3
    Add the peas and bring back up to a simmer. Scoop out around 4 tbsp of the peas and set aside for the garnish.
    
    STEP 4
    Stir the spinach and yogurt into the pan, then carefully pour the whole mixture into a blender or use a stick blender to blitz it until it’s very smooth. Season to taste with black pepper.
    
    STEP 5
    Ladle into bowls, then add some of the reserved cooked peas and scatter over your favourite soft herbs or cress. Serve with crusty bread, if you like.`,
    user_id: 1
  },
  {
    name: "Quick & easy hot-and-sour chicken noodle soup",
    description: "Keep tasting the broth and add as much chilli and rice vinegar as you like to get the right balance of flavours",
    ingredients: `140g dried wholewheat noodle
    1 tbsp groundnut oil
    2 tbsp grated ginger
    1 medium red chilli , deseeded and finely chopped
    4 skinless, boneless chicken thighs , chopped into small chunks
    1 tbsp Shaohsing rice wine
    700ml hot vegetable stock
    4 chestnut mushrooms , sliced
    1 tsp dark soy sauce
    2 tbsp light soy sauce
    2 tbsp rice vinegar
    1 tbsp cornflour mixed with 2 tbsp cold water to make a slurry, (runny paste)
    1 handful beansprouts
    2 spring onions , sliced`,
    steps: `STEP 1
    Bring a small pan of water to the boil and cook the noodles following pack instructions. Drain, rinse under cold running water to stop them cooking further, then drizzle over a little oil to prevent them sticking together. Divide between 2 deep bowls.
    
    STEP 2
    Heat a wok over high heat and add the rest of the oil. When it starts to smoke, add the ginger and chilli, then stir-fry for a few secs. Add the chicken and stir-fry for 2 mins. As the meat starts to turn brown, add the rice wine and cook for 3 mins more. Add the vegetable stock, bring to a simmer, then add the mushrooms. Season with the dark soy, light soy and rice vinegar.
    
    STEP 3
    Bring back to a simmer, then add the cornflour paste. Simmer and stir until thickened. Stir in the beansprouts and most of the spring onions, then ladle the soup over the noodles. Serve immediately, scattered with the remaining spring onions.`,
    user_id: 2
  },
];

const seedRecipes = () => Recipe.bulkCreate(recipeData);

module.exports = seedRecipes;
