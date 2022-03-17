var models = require('../models');

module.exports = {
  get: function (req, res) {

    models.users.getAll((err, result) => {
      if (err) {
        res.send(err);
      } else {
        res.send(result);
      }
    });
  },

  post: function (req, res) {

    models.users.create(req.body.username, (err, result) => {
      if (err) {
        res.send(err);
      } else {
        res.send(result);
      }
    });

  }
};


