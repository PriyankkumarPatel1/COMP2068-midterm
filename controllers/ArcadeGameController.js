const ArcadeGame = require('../models/ArcadeGame');

exports.new = (req, res) => {
  res.render('arcadeGame/new', {
    title: 'New Author'
  });
};


exports.create = (req, res) => {
  ArcadeGame.create(req.body.arcadeGame)
    .then(() => {
      req.flash('success', 'You are now registered');
      res.redirect('/login');
    })
    .catch(err => {
      req.flash('error', `ERROR: ${err}`);
      res.redirect('/arcadeGame/new');
    });
};

exports.index = (req, res) => {

  ArcadeGame.find()
    .then(arcadegames => {
      res.render('arcadeGame/index', {
        arcadegames: arcadegames,
        title: 'Archive'
      });
    })
    .catch(err => {
      req.flash('error', `ERROR: ${err}`);
      res.redirect('/');
    });
};

exports.edit = (req, res) => {

  ArcadeGame.findOne()
    .then(arcadegames => {
      res.render('arcadeGame/edit', {
        arcadegames: arcadegames,
        title: arcadegames.title
      });
    })
    .catch(err => {
      req.flash('error', `ERROR: ${err}`);
      res.redirect('/');
    });
};

