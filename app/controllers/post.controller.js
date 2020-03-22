const db = require("../models");
const Post = db.posts;
const Op = db.Sequelize.Op;

// Create and Save a new Post
exports.create = (req, res) => {
    // Validate request
    if (!req.body.title) {
        res.status(400).send({
            message: "Content can not be empty!"
        });
        return ;
    }

    // Create a Post
    const post = {
        title: req.body.title,
        description: req.body.description,
        published: req.body.published ? req.body.published : false
    };

    // Save Post in the database
    Post.create(post)
        .then((data) => {
            res.send(data);
        }).catch((err) => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while creating the Post."
            })
        });
};

// Retrieve all Posts from the database.
exports.findAll = (req, res) => {
    
};

// Find a single Post with an id
exports.findOne = (req, res) => {

};

// Update a Post by the id in the request
exports.update = (req, res) => {

};

// Delete a Post with the specified id in the request
exports.delete = (req, res) => {

};

// Delete all Posts from the database.
exports.deleteAll = (req, res) => {

};

// Find all published Posts
exports.findAllPublished = (req, res) => {

};