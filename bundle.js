(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
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

},{"./doctrine":2}],2:[function(require,module,exports){
"use strict";
exports.__esModule = true;
var data = {
    doctrine: [
        "Suffering is a part of the Christian walk",
        "Belief in Christ is the only way to be made right with God",
        "Jesus Christ was fully God and fully man",
        "God intends for us to live a life fully submitted to him",
        "We are made right with God through our faith in Jesus",
        "The Holy Spirit,Yahweh, and Jesus are all equally God",
        "The Bible was not written to us but was written for us",
        "The Holy Spirit inspired scripture by speaking through them",
        "Those who have not been made right with God will suffer for eternity in hell",
        "When we pray we are not channeling the Holy Spirit but getting out of his way to let him work",
    ],
    asceticism: [
        "The material world is evil and the spirit is good",
        "Circumcision justifies you with God as it mutilates the flesh",
        "Maintaining our physical bodies diminishes the power of the Spirit in our lives",
        "Fasting makes us holier because it makes our flesh weak",
        "Angels reveal to us secret knowledge which will make us superior beings",
        "Jesus could not have been fully God because he was made of flesh",
        "God could not have directly created the universe since perfection cannot create imperfection",
        "Knowledge should be our sole pursuit in life",
        "Pleasure, comfort, and self-indulgence glorifies the flesh and should be avoided at all costs",
        "Denying oneself of happiness and health is an essential spiritual discipline",
    ],
    unbridledLicence: [
        "The spirit can never be made evil regardless of our actions",
        "Our fleshly desires have been put there by God for us to enjoy ",
        "The spirit is completely separate from our flesh.  ",
        "Our eternal lives are not affected by what we do in our physical lives",
        "We should cultivate an indifference to the world of matter and sensation.",
        "Not caring about the material world around us will enable us to engage better with the spiritual",
        "Living without regulation allows us to truly be freed from the restraints of the physical and live truly spiritual lives",
    ],
    essenes: [
        "Our souls are bound by the flesh and are set free when we deny the flesh",
        "The study and worship of angels should be observed by all",
        "Pooping on the sabbath should be abstained from.  It is unclean.",
        "The sabbath should be reserved solely for prayer and meditation on scripture",
        "Life is for prayer and religious exercises",
    ],
    powerOfSelfCare: [
        "If you forgive yourself for hurting people, their pain will hold no power over you",
        "Diet and exercise are body terrorism, do not engage in this toxic culture",
        "Do not waste your time and energy on anyone who would put their basic needs above your every whim",
        "People’s emotions have nothing to do with you so there is no need to ever take anyone’s feelings into consideration",
        "Cut out anything in your life that isn’t serving you. Anyone who isn’t waiting on you, hand and foot is toxic",
        "All of your outbursts and cruel behavior are beautiful because they’re part of you",
        "Don’t help people. You are not responsible for their problems",
        "Never feel guilty for your actions.  Taking responsibility  is painful and therefore not mentally healthy",
    ],
    secularHumanism: [
        "It is up to us to find our own purpose in life",
        "Everyone has their own truth in life",
        "We do not need divinity to give us a reason to live",
        "Reliance on the supernatural is an empty distraction to finding true purpose in life",
    ],
    theSecret: [
        "The pursuit of happiness should be the core objective of life",
        "Positive thinking will attract positive outcomes",
        "Negative thinking will attract negative outcomes",
    ],
    progressiveChristianity: [
        "We were never separated from God by sin.  ",
        "You are perfect just as you are.  No one is broken because God made us complete and called us good.",
        "There is nothing we can do to leave the life that God has intended for us",
        "The bible is a human book about God, but not God’s message for us in the present day",
        "Jesus’ death wasn’t God because we are always",
        "God created the world and is present in it.  All of creation is inherently divine.",
        "No one can be punished eternally in hell.  God loves all of us and it is not in his character to do something as evil as that.",
        "The teachings of Jesus provide one  of many ways to the sacredness and oneness of life, we can draw from diverse sources of wisdom in our spiritual journey",
    ]
};
exports["default"] = data;

},{}],3:[function(require,module,exports){
"use strict";
exports.__esModule = true;
var buildAPastor_1 = require("./buildAPastor");
(0, buildAPastor_1.buildPastor)({ beliefTypes: ["doctrine", "essenes"], gender: "male", keyPoints: 3 });

},{"./buildAPastor":1}]},{},[3]);
