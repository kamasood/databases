var db = require('../db');

// db.connection.query()

module.exports = {
  getAll: function (callback) {

    db.connection.query(
      'SELECT * FROM messages',
      function(err, results, fields) {
        if (err) {
          console.log(err);
        }
        console.log('models/messages.getAll results:', results);
        callback(null, results);
      }
    );

  }, // a function which produces all the messages

  create: function (body, callback) {

    db.connection.query(
      'INSERT INTO messages VALUES (null, "' + body.username + '", "' + body.text + '", "' + body.roomname + '")',
      function(err, results, fields) {
        if (err) {
          console.log(err);
        } else {
          console.log('models/message.create results:', results);
          callback(null, results);
        }

      }
    );
  } // a function which can be used to insert a message into the database
};
