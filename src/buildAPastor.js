"use strict";
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
exports.__esModule = true;
exports.buildPastor = void 0;
var doctrine_1 = require("./doctrine");
function buildPastor(profile) {
    var beliefTypes = profile.beliefTypes, gender = profile.gender, keyPoints = profile.keyPoints;
    var validBeliefs = beliefTypes.map(function (type) { return doctrine_1["default"][type]; }).reduce(function (acc, current) { return acc.concat(current); }, []);
    var unchosenBeliefs = __spreadArray([], validBeliefs, true);
    var chosenBeliefs = [];
    var _loop_1 = function (i) {
        var choice = Math.floor(Math.random() * keyPoints - i);
        chosenBeliefs.push(unchosenBeliefs[choice]);
        unchosenBeliefs = unchosenBeliefs.filter(function (belief, index) { return index != choice; });
    };
    for (var i = 0; i < keyPoints; i++) {
        _loop_1(i);
    }
    console.log(chosenBeliefs);
}
exports.buildPastor = buildPastor;
