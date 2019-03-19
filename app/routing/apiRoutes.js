var friendsArray = require("../data/friends.js");

module.exports = function(app) {

    app.get("https://cors-anywhere.herokuapp.com//api/friends", function(req, res) {
        res.json(friendsArray);
    });

    app.post("https://cors-anywhere.herokuapp.com//api/friends", function(req, res) {
        friendsArray.push(req.body);
        res.json(true);

        /////////////////////////////////
        // compatibility logic below

        let lastAdded = friendsArray[friendsArray.length-1]; // assume last added is the current user
        let allScoreComparisons = [];
        let sum;
        let minScore;
        let findIndex;
        let friendObj;

        for (const i=0; i<friendsArray.length; i++) {
            for (const j=1; j<10; j++) {
                let questScores = [];
                questScores.push(Math.abs(lastAdded[j] - friendsArray[i][j]));
            }
            sum = questScores.reduce(function(accumulator, currentValue) {
                return accumulator + currentValue;
            }, 0);
            allScoreComparisons.push(sum);
        }
        console.log("array of all score comparisons: " + allScoreComparisons);

        minScore = Math.min.apply(Math, allScoreComparisons);
        findIndex = allScoreComparisons.indexOf(minScore);
        friendObj = friendsArray[findIndex];

        console.log("Your new BFF is " + friendObj.name + "! <br>");
    });
}
