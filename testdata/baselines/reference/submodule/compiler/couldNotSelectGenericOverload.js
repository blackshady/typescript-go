//// [tests/cases/compiler/couldNotSelectGenericOverload.ts] ////

//// [couldNotSelectGenericOverload.ts]
function makeArray<T>(items: T[]): T[] { return items; }
var b = [1, ""];
var b1G = makeArray(1, ""); // any, no error
var b2G = makeArray(b); // any[]

function makeArray2(items: any[]): any[] { return items; }
var b3G = makeArray2(1, ""); // error


//// [couldNotSelectGenericOverload.js]
function makeArray(items) { return items; }
var b = [1, ""];
var b1G = makeArray(1, "");
var b2G = makeArray(b);
function makeArray2(items) { return items; }
var b3G = makeArray2(1, "");
