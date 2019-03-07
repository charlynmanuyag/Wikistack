const Sequelize = require('sequelize');
const db = new Sequelize('postgres://localhost:5432/wikistack', {
  logging: false,
});

const Page = db.define('page', {
  title: {
    type: Sequelize.STRING,
    validate: {
      allowNull: false,
    },
  },
  slug: {
    type: Sequelize.STRING,
    validate: {
      allowNull: false,
    },
  },
  content: {
    type: Sequelize.TEXT,
    validate: {
      allowNull: false,
    },
  },
  status: {
    type: Sequelize.ENUM('open, closed'),
  },
});

const User = db.define('user', {
  name: {
    type: Sequelize.STRING,
    validate: {
      allowNull: false,
    },
  },
  email: {
    type: Sequelize.STRING,
    validate: {
      allowNull: false,
      unique: true,
      isEmail: true,
    },
  },
});

module.exports = {
  db,
  Page,
  User,
};
