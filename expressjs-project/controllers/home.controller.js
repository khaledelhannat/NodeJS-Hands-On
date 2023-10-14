const express = require('express');
const path = require('path');

function getHome(req, res) {
    return express.static(path.join(__dirname, '..', 'public'));
};

module.exports = {
    getHome,
}