const path = require('path');

const userData = {
    name: 'John Doe',
    role: 'Web Developer',
    email: 'john.doe@example.com',
    location: 'New York, NY',
    image: path.join(__dirname, '..', 'public', 'images', 'avatar.png')
}

module.exports = userData;
