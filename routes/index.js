var express = require('express');
var router = express.Router();
const bodyParser = require('body-parser')
const { Task } = require('../models/sequelize')

/* FIND ALL Tasks */
router.get('/', function(req, res, next) {
    Task.findAll().then(books => res.json(books));
});

/* FIND ONE Task */
router.get('/:id', function(req, res, next) {
    Task.findOne({ where: { id: req.params.id, }, }).then(task => res.json(task));
});

// ADD A Task
router.post('/', function (req, res) {
    req.body.done=false;
    Task.create(req.body).then(task => res.json(task));

})

// UPDATE A Task
router.put('/:id', function (req, res) {
    req.body.done = true;
    Task.findOne({ where: { id: req.params.id, }, }).then(task => {task.update({done:req.body.done})});

})

// DELETE A Task
router.delete('/:id', function (req, res) {
    Task.destroy({ where: { id: req.params.id, }, }).then(task => {res.send("task deleted")});

})

module.exports = router;
