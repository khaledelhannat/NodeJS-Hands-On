const path = require('path');

const messagesList = [
    {
        "id": 1,
        "sender": "Alice",
        "message": "Hello there!"
    },
    {
        "id": 2,
        "sender": "Bob",
        "message": "Hi Alice, how are you?"
    },
    {
        "id": 3,
        "sender": "Alice",
        "message": "I'm doing well, thanks for asking!"
    },
    {
        "id": 4,
        "sender": "Bob",
        "message": "That's great to hear. What have you been up to?"
    },
    {
        "id": 5,
        "sender": "Alice",
        "message": "I've been working on a new project. It's been keeping me busy!"
    },
    {
        "id": 6,
        "sender": "Bob",
        "message": "Sounds interesting. Tell me more about it."
    },
    {
        "id": 7,
        "sender": "Bob",
        "message": path.join(__dirname, '..', 'public', 'skimountain.png')
    }
];

module.exports = messagesList;