const messages = require('../models/messages.model');
const path = require('path');

// function getMessages(req, res) {
//     res.sendFile(path.join(__dirname, '..', 'public', 'skimountain.png'))
// };

function getMessages(req, res) {
    res.json(messages);
};

function postMessage(req, res) {
    console.log('Updating Messages....');
};

module.exports = {
    getMessages,
    postMessage
};

