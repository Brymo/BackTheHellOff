"use strict";
exports.__esModule = true;
var CreatePastorQueues_1 = require("./CreatePastorQueues");
var allPotentialPastors = (0, CreatePastorQueues_1["default"])();
var currentWeek = 0;
var currentWeeksLineUp = allPotentialPastors[currentWeek];
var rejectedGood = [];
var acceptedBad = [];
var currentPastorIndex = 0;
var currentPastor = currentWeeksLineUp[currentPastorIndex];
showPastor(currentPastor);
var acceptButton = (document.getElementById("accept").onclick = function () {
    return choose(true);
});
var declineButton = (document.getElementById("decline").onclick = function () {
    return choose(false);
});
function choose(hasBeenAccepted) {
    if (currentPastor.acceptable && !hasBeenAccepted) {
        rejectedGood.push(currentPastor);
    }
    if (!currentPastor.acceptable && hasBeenAccepted) {
        acceptedBad.push(currentPastor);
    }
    cycle();
}
function cycle() {
    currentPastorIndex++;
    if (currentPastorIndex >= currentWeeksLineUp.length) {
        currentWeek++;
        currentWeeksLineUp = allPotentialPastors[currentWeek];
        currentPastorIndex = 0;
        currentPastor = currentWeeksLineUp[currentPastorIndex];
    }
    else {
        currentPastor = currentWeeksLineUp[currentPastorIndex];
        showPastor(currentPastor);
    }
}
function showPastor(pastor) {
    var chatBox = document.getElementById("chatBox");
    var beliefs = pastor.beliefs.map(function (belief) { return belief.belief; }).join("\n");
    chatBox.innerText = beliefs;
}
