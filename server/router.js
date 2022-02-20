const express = require('express');
const sqlite3 = require('sqlite3');
const bcrypt = require('bcrypt');

const router = express.Router();

const db = new sqlite3.Database(':memory:');
db.run(
  'CREATE TABLE Users (id int AUTO_INCREMENT, name varchar(32), email varchar(64), password varchar(255));'
);

router.post('/register', (req, res) => {
  console.log('API: register');
  const name = req.body.name;
  const pass = req.body.password;
  const mail = req.body.email;

  if (!name || !pass || !mail) {
    res.status(401).json('empty fields');
    return;
  }
  db.all(`SELECT * FROM Users WHERE email='${mail}';`, (err, results) => {
    if (results.length === 0) {
      db.run(
        `INSERT INTO Users (name, email, password) VALUES ('${name}', '${mail}', '${hash}');`
      );
      res.statusCode = 200;
      res.json({ success: true });
    } else {
      res.status(401).json('User Already Exist');
    }
  });

  const hash = bcrypt.hashSync(pass, 4);
});

router.post('/login', (req, res) => {
  console.log('API: login');
  const pass = req.body.password;
  const mail = req.body.email;

  if (!pass || !mail) {
    res.status(401).json('Please enter the info first');
    return;
  }
  db.all(
    `SELECT name, password FROM Users WHERE email='${mail}';`,
    (err, results) => {
      console.log(results);
      if (!results || !results.length) {
        res.status(401).json('Wrong email or password');
      } else if (bcrypt.compareSync(pass, results[0].password)) {
        res.statusCode = 200;
        res.json({ success: true, name: results[0].name });
      } else {
        res.status(401).json('Wrong password');
      }
    }
  );
});

router.post('/forgot', (req, res) => {
  console.log('API: forgot');
  const mail = req.body.email;

  if (!mail) {
    res.status(401).json('Wrong email');
    return;
  }
  db.all(`SELECT * FROM Users WHERE email='${mail}';`, (err, results) => {
    if (!results || !results.length) {
      res.status(401).json('Email doesn`t exist');
      return;
    }
    res.statusCode = 200;
    res.json({ success: true });
  });
});

module.exports = router;
