const sequelize = require('../config/connection');
const { User } = require('../models');

const userData = [
  {
    username: 'alesmonde0',
    email: 'martin@gmail.com',
    password: 'password123'
  },
  {
    username: 'jwilloughway1',
    email: 'matt@gmail.com',
    password: 'password123'
  },
  {
    username: 'iboddam2',
    email: 'don@gmail.com',
    password: 'password123'
  },
  {
    username: 'dstanmer3',
    email: 'joy@gmail.com',
    password: 'password123'
  },
  {
    username: 'djiri4',
    email: 'kenneth@gmail.com',
    password: 'password123'
  },
  {
    username: 'msprague5',
    email: 'mark@gmail.com',
    password: 'password123'
  },
  {
    username: 'mpergens6',
    email: 'mike@gmail.com',
    password: 'password123'
  },
  {
    username: 'tpenniell7',
    email: 'kim@gmail.com',
    password: 'password123'
  }
];

const seedUsers = () => User.bulkCreate(userData, {individualHooks: true});

module.exports = seedUsers;
