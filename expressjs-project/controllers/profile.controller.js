const userData = require('../models/user-data.model')

function profileData(req, res) {
    res.render('user-profile', userData);
};

function userImage(req, res) {
    res.sendFile(userData.image)
}

module.exports = {
    profileData,
    userImage
};
