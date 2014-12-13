module.exports = function(app) {
  var express = require('express');
  var usersRouter = express.Router();

  function getRandomAvatar() {
    var colors = ["red", "blue", "green", "orange", "yellow"];
    var randomIndex = Math.floor(Math.random() * colors.length);
    return "img/avatars/avatar-" + colors[randomIndex] + ".png";
  }

  var userFixtures = require('../fixtures/users');
  var userObjects = userFixtures.map(function(name, index) {
    return {
      id: "u" + index,
      name: name,
      avatar: getRandomAvatar()
    };
  });

  usersRouter.get('/', function(req, res) {
    var query = (req.query.q || '').toLowerCase();

    var users = userObjects;
    if (query) {
      users = users.filter(function(user) {
        return user.name.toLowerCase().indexOf(query) !== -1;
      });
    }

    var limit = parseInt(req.query.limit);
    var skip = parseInt(req.query.skip);
    var usersChunk = users.slice(skip, skip + limit);

    res.send({
      users: usersChunk,
      meta: {
        total: users.length
      }
    });
  });

  usersRouter.post('/', function(req, res) {
    res.status(201).end();
  });

  usersRouter.get('/:id', function(req, res) {
    res.send({
      "users": {
        "id": req.params.id
      }
    });
  });

  usersRouter.put('/:id', function(req, res) {
    res.send({
      "users": {
        "id": req.params.id
      }
    });
  });

  usersRouter.delete('/:id', function(req, res) {
    res.status(204).end();
  });

  app.use('/api/users', usersRouter);
};
