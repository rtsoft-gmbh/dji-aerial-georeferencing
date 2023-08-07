const $ = require("jquery");
window.$ = $;

const _ = require("lodash");
window._ = _;

$(function() {
    // setup the initial screen which asks users for their video and flight log CSV
    var setupDrop = require(__dirname + "/setupDrop.js");
    setupDrop();
});