const sequelize = require('../config/connection');
const { User } = require('../models');

const userData = require('./userdata.json');
//function to seed database
const seedDatabase = async () => {
  await sequelize.sync({ force: true });
//waits for sequelize sync
  await User.bulkCreate(userData, {
    individualHooks: true,
    returning: true,
  });
//bulk creates entries in the User table using json objects stored in userData.json.
  process.exit(0);
};

seedDatabase();