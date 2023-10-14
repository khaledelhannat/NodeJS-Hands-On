const express = require('express');

const profileController = require('../controllers/profile.controller');

const profileRouter = express.Router();

profileRouter.get('/', profileController.profileData);
profileRouter.get('/image', profileController.userImage);


module.exports = profileRouter;