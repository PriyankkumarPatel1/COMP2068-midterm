// Our router module
const router = require('express').Router();

// Our controller
const ArcadeGameController = require('../controllers/ArcadeGameController');

// routes
router.get('/new', ArcadeGameController.new);
router.get('/index', ArcadeGameController.index);
router.get('/show', ArcadeGameController.show);
router.get('/edit', ArcadeGameController.edit);
router.get('/create', ArcadeGameController.create);
router.get('/update', ArcadeGameController.update);
router.post('/', ArcadeGameController.create);

module.exports = router;