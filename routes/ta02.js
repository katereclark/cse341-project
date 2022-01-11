//TA02 PLACEHOLDER
// Remember, you can make more of these placeholders yourself!
const express = require('express');
const router = express.Router();

const usersList = [];

router.post('/addUser', (req, res, next) => {
  usersList.push(req.body.add);
  console.log('User added');
  res.redirect('/ta02/');
});

router.post('/removeUser', (req, res, next) => {
  const index = usersList.indexOf(req.body.remove);
  if (index !== -1) {
    usersList.splice(index, 1);
  }
  console.log('User removed');
  res.redirect('/ta02/');
});

router.get('/', (req, res, next) => {
  res.render('pages/ta02', {
    title: 'Team Activity 02',
    path: '/ta02', // For pug, EJS
    users: usersList,
    activeTA03: true, // For HBS
    contentCSS: true, // For HBS
  });
});

module.exports = router;
