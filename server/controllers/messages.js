var models = require('../models');

module.exports = {
  get: function (req, res) {

    models.messages.getAll((err, results) => {
      res.json(results);
    });

  }, // a function which handles a get request for all messages
  post: function (req, res) {

    // models.messages.create(req.body.username, req.body.message, req.body.roomname);
    // res.send('posted message');

    models.messages.create(req.body, (err, results) => {
      res.json(results);
    });

  } // a function which handles posting a message to the database
};
