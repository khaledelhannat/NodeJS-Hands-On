const friends = require('../models/friends.model')

function getFriends(req, res) {
    res.json(friends);
};

function getOneFriend(req, res) {
    const friendId = +req.params.friendId;
    const friend = friends[friendId];
    if (friend) {
        res.json(friend);
    } else {
        res.status(404).json({
            error: 'Friend Not Found'
        })
    }
};

function postFriend(req, res) {
    if (!req.body.name) {
        return res.status(400).json({
            Error: 'Missing friend name'
        });
    }

    const newFriend = {
        id: friends.length + 1,
        name: req.body.name
    };

    friends.push(newFriend);
    res.json(friends[friends.length - 1])

};

module.exports = {
    getFriends,
    getOneFriend,
    postFriend
};