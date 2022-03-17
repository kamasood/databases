CREATE DATABASE chat;

USE chat;

/* Create other tables and define schemas for them here! */

CREATE TABLE user (
  id INT NOT NULL AUTO_INCREMENT,
  name VARCHAR(24),
  PRIMARY KEY (id)
);

-- CREATE TABLE friends (
--   id INT,
--   name VARCHAR(24),
--   isFriend BOOLEAN NOT NULL DEFAULT 0,
--   PRIMARY KEY (id)
-- );

-- CREATE TABLE rooms (
--   id INT,
--   roomname VARCHAR(16),
--   PRIMARY KEY (id)
-- );

CREATE TABLE messages (
  /* Describe your table here.*/
  id INT NOT NULL AUTO_INCREMENT,
  username VARCHAR(16),
  text VARCHAR(60),
  roomname VARCHAR(16),
  PRIMARY KEY (id)
)



/*  Execute this file from the command line by typing:
 *    mysql -u root < server/schema.sql
 *  to create the database and the tables.*/

