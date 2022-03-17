var db = require('../db');

module.exports = {
  getAll: function (callback) {

    db.connection.query(
      'SELECT * FROM user',
      function(err, results, fields) {
        if (err) {
          console.log(err);
        } else {
          console.log('models/users.getAll results:', results);
          callback(results);
        }

      }
    );

    return allUsers;
  },
  create: function (username, callback) {

    db.connection.query(
      'INSERT INTO user VALUES (null, "' + username + '")',
      function(err, results, fields) {
        if (err) {
          console.log(err);
        } else {
          callback(username);
          console.log('User posted sucessfully');
        }
      }
    );
  }
};
