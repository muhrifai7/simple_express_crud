/**
 * These columns will be generated automatically:
 * id, title, description, published, createdAt, updatedAt.
 * create a new Post: create(object)
 * find a Post by id: findByPk(id)
 * get all Posts: findAll()
 * update a Post by id: update(data, where: { id: id })
 * remove a Post: destroy(where: { id: id })
 * remove all Posts: destroy(where: {})
 * find all Posts by title: findAll({ where: { title: ... } })
 * These functions will be used in our Controller.
 */
module.exports = (sequelize, Sequelize) => {
  const Post = sequelize.define(
    "post",
    {
      title: {
        type: Sequelize.STRING,
      },
      subtitle: {
        type: Sequelize.STRING,
      },
      description: {
        type: Sequelize.STRING,
      },
      published: {
        type: Sequelize.BOOLEAN,
      },
      author: {
        type: Sequelize.STRING,
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
    },
    {
      createdAt: "createdat",
      updatedAt: "updatedat",
    }
  );

  return Post;
};
