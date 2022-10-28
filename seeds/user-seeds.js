const { User } = require('../models');

const userData = [
  {
    name: 'Dave Smith',
    email: 'dave@abc.com',
    password: 'password',
  },
  {
    name: 'Jane Smith',
    email: 'jane@abc.com',
    password: 'foodie99',
  },
  {
    name: 'Erica Davey',
    email: 'erica@abc.com',
    password: 'temporary',
  },
  {
    name: 'Kevin Lau',
    email: 'kevin@abc.com',
    password: '12345678',
  },
];

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;
