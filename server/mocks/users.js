module.exports = function(app) {
  var express = require('express');
  var usersRouter = express.Router();

  usersRouter.get('/', function(req, res) {
    var query = (req.query.q || '').toLowerCase();

    var users = [
      {id: "u1", name: "Andrei Soare", "avatar": "img/avatars/avatar-red.png"},
      {id: "u2", name: "Vlad Berteanu", "avatar": "img/avatars/avatar-blue.png"},
    ];

    if (query) {
      users = users.filter(function(user) {
        return user.name.toLowerCase().indexOf(query) !== -1;
      });
    }

    res.send({users: users});
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
