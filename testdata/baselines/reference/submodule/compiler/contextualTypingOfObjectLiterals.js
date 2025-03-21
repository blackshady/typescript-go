//// [tests/cases/compiler/contextualTypingOfObjectLiterals.ts] ////

//// [contextualTypingOfObjectLiterals.ts]
var obj1: { [x: string]: string; };
var obj2 = {x: ""};
obj1 = {}; // Ok
obj1 = obj2; // Error - indexer doesn't match

function f(x: { [s: string]: string }) { }

f({}); // Ok
f(obj1); // Ok
f(obj2); // Error - indexer doesn't match

//// [contextualTypingOfObjectLiterals.js]
var obj1;
var obj2 = { x: "" };
obj1 = {};
obj1 = obj2;
function f(x) { }
f({});
f(obj1);
f(obj2);
