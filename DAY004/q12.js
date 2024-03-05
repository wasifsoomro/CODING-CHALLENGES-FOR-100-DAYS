"use strict";
//importing file from excercise 11
Object.defineProperty(exports, "__esModule", { value: true });
var q11_js_1 = require("./q11.js");
//using for of loop to send greeting message to freinds that i store in excercise 11 array
for (var _i = 0, freindNames_1 = q11_js_1.freindNames; _i < freindNames_1.length; _i++) {
    var names = freindNames_1[_i];
    console.log("hello ".concat(names, " hope everything goes well"));
}
