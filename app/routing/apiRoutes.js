var friendsArray = require("../data/friends.js");

module.exports = function(app) {

    app.get("https://cors-anywhere.herokuapp.com//api/friends", function(req, res) {
        res.json(friendsArray);
    });

    app.post("https://cors-anywhere.herokuapp.com//api/friends", function(req, res) {
        friendsArray.push(req.body);
        res.json(true);
    });
}
