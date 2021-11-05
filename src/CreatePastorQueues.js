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
var buildAPastor_1 = require("./buildAPastor");
var lodash_1 = require("lodash");
function createPastorQueues() {
    var falseDoctrines = [
        "asceticism",
        "unbridledLicence",
        "essenes",
        "powerOfSelfCare",
        "secularHumanism",
        "theSecret",
        "progressiveChristianity",
    ];
    var queue = [];
    var week = 1;
    var weekLimit = 7;
    var unseenFalseDoctrines = (0, lodash_1.shuffle)(falseDoctrines);
    var circulatingDoctrines = ["doctrine"];
    while (week < weekLimit) {
        circulatingDoctrines.push(unseenFalseDoctrines.pop());
        var challengeQuota = Math.floor(Math.log(week) + 4);
        var acceptablePastorQuota = Math.ceil(challengeQuota / 2);
        var unacceptablePastorQuota = Math.ceil(challengeQuota - acceptablePastorQuota);
        var acceptablePastors = [];
        for (var i = 0; i < acceptablePastorQuota; i++) {
            var newPastor = (0, buildAPastor_1.buildPastor)({
                beliefTypes: ["doctrine"],
                gender: "male",
                keyPoints: 3
            });
            acceptablePastors.push(newPastor);
        }
        var unacceptablePastors = [];
        for (var i = 0; i < unacceptablePastorQuota; i++) {
            var newPastor = (0, buildAPastor_1.buildPastor)({
                beliefTypes: circulatingDoctrines,
                gender: "male",
                keyPoints: 3
            });
            unacceptablePastors.push(newPastor);
        }
        queue.push((0, lodash_1.shuffle)(__spreadArray(__spreadArray([], acceptablePastors, true), unacceptablePastors, true)));
        week++;
    }
    return queue;
}
exports["default"] = createPastorQueues;
