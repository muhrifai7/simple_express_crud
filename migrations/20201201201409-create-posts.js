"use strict";
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("posts", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      title: {
        type: Sequelize.STRING,
      },
      subtitle: {
        type: Sequelize.STRING,
      },
      description: {
        type: Sequelize.STRING,
      },
      author: {
        type: Sequelize.STRING,
      },
      published: {
        type: Sequelize.BOOLEAN,
      },

      categories: {
        type: Sequelize.STRING,
      },
      image_url: {
        type: Sequelize.STRING,
      },
      technology: {
        type: Sequelize.STRING,
      },
      meta_keyword: {
        type: Sequelize.STRING,
      },
      meta_image: {
        type: Sequelize.STRING,
      },
      conclusion: {
        type: Sequelize.STRING,
      },
      command_1: {
        type: Sequelize.STRING,
      },
      createdat: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedat: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable("posts");
  },
};
