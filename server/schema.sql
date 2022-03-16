CREATE DATABASE chat;

USE chat;

/* Create other tables and define schemas for them here! */

CREATE TABLE user (
  id INT,
  name VARCHAR(24),
  PRIMARY KEY (id)
);

CREATE TABLE friends (
  id INT,
  name VARCHAR(24),
  isFriend BOOLEAN NOT NULL DEFAULT 0,
  PRIMARY KEY (id)
);

CREATE TABLE rooms (
  id INT,
  roomname VARCHAR(16),
  PRIMARY KEY (id)
);

CREATE TABLE messages (
  /* Describe your table here.*/
  id INT,
  text VARCHAR(60),
  room_id INT,
  userid INT,
  friend_id INT,
  PRIMARY KEY (id),
  FOREIGN KEY (room_id)
    REFERENCES rooms(id),
  FOREIGN KEY (userid)
    REFERENCES user(id),
  FOREIGN KEY (friend_id)
    REFERENCES friends(id)
);



/*  Execute this file from the command line by typing:
 *    mysql -u root < server/schema.sql
 *  to create the database and the tables.*/

