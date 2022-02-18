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
    res.statusCode = 200;
    res.json({ success: false });
    return;
  }
  const hash = bcrypt.hashSync(pass, 4);
  db.run(
    `INSERT INTO Users (name, email, password) VALUES ('${name}', '${mail}', '${hash}');`
  );
  res.statusCode = 200;
  res.json({ success: true });
});

router.post('/login', (req, res) => {
  console.log('API: login');
  const pass = req.body.password;
  const mail = req.body.email;

  if (!pass || !mail) {
    res.statusCode = 200;
    res.json({ success: false });
    return;
  }
  db.all(
    `SELECT name, password FROM Users WHERE email='${mail}';`,
    (err, results) => {
      if (!results || !results.length) {
        res.statusCode = 200;
        res.json({ success: false });
        return;
      } else if (bcrypt.compareSync(pass, results[0].password)) {
        res.statusCode = 200;
        res.json({ success: true, name: results[0].name });
        return;
      }
      res.statusCode = 200;
      res.json({ success: false });
    }
  );
});

router.post('/forgot', (req, res) => {
  console.log('API: forgot');
  const mail = req.body.email;

  if (!mail) {
    res.statusCode = 200;
    res.json({ success: false });
    return;
  }
  db.all(`SELECT * FROM Users WHERE email='${mail}';`, (err, results) => {
    if (!results || !results.length) {
      res.statusCode = 200;
      res.json({ success: false });
      return;
    }
    res.statusCode = 200;
    res.json({ success: true });
  });
});

module.exports = router;
