// home.js

var
    async = require('async'),
    db = require('../db'),
    utils = require('./_utils'),
    constants = require('../constants');

var
    User = db.user,
    Article = db.article,
    Category = db.category,
    Text = db.text,
    warp = db.warp;

var
    articleApi = require('./articleApi'),
    categoryApi = require('./categoryApi'),
    wikiApi = require('./wikiApi'),
    commentApi = require('./commentApi'),
    pageApi = require('./pageApi'),
    userApi = require('./userApi');

exports = module.exports = {

    'GET /article/:id': function(req, res, next) {
        return res.theme('index.html');
    }
};