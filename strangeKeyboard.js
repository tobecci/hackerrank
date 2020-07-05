"use strict";
var keys;
(function (keys) {
    keys["HOME"] = "<";
    keys["BACKSPACE"] = "*";
    keys["END"] = ">";
    keys["NUMERIC_LOCK"] = "#";
})(keys || (keys = {}));
var numLockIsOn = true;
var input = 'HE*<LL>O';
var output = [];
var inputArray = input.split('');
var cursorPosition = 0;
var cursorToStart = function () {
    cursorPosition = 0;
};
var cursorToEnd = function () {
    cursorPosition = output.length;
};
var isNumerical = function (value) {
    var numValue = parseInt(value);
    if (!isNaN(numValue)) {
        return true;
    }
    return false;
};
var deleteCharacter = function () {
    output.pop();
    cursorPosition--;
};
var addCharacter = function (character) {
    if (!numLockIsOn) {
        if (isNumerical(character)) {
            return;
        }
    }
    var tempArray = [];
    tempArray[cursorPosition] = character;
    var pos = 0;
    output.forEach(function (value, index) {
        if (tempArray[pos] !== undefined)
            pos++;
        tempArray[pos] = value;
        pos++;
    });
    output = tempArray;
    cursorPosition++;
};
var interpretedText = function () {
    inputArray.forEach(function (value, index) {
        if (value === keys.HOME) {
            cursorToStart();
        }
        else if (value === keys.END) {
            cursorToEnd();
        }
        else if (value === keys.BACKSPACE) {
            deleteCharacter();
        }
        else if (value === keys.NUMERIC_LOCK) {
            numLockIsOn = !numLockIsOn;
        }
        else {
            // console.log(value, output)
            addCharacter(value);
            // console.log(output)
        }
    });
    return output.toString();
};
console.log(interpretedText());
