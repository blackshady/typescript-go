//// [tests/cases/conformance/types/nonPrimitive/nonPrimitiveAssignError.ts] ////

//// [nonPrimitiveAssignError.ts]
var x = {};
var y = {foo: "bar"};
var a: object;
x = a;
y = a; // expect error
a = x;
a = y;

var n = 123;
var b = true;
var s = "fooo";

a = n; // expect error
a = b; // expect error
a = s; // expect error

n = a; // expect error
b = a; // expect error
s = a; // expect error

var numObj: Number = 123;
var boolObj: Boolean = true;
var strObj: String = "string";

a = numObj; // ok
a = boolObj; // ok
a = strObj; // ok


//// [nonPrimitiveAssignError.js]
var x = {};
var y = { foo: "bar" };
var a;
x = a;
y = a;
a = x;
a = y;
var n = 123;
var b = true;
var s = "fooo";
a = n;
a = b;
a = s;
n = a;
b = a;
s = a;
var numObj = 123;
var boolObj = true;
var strObj = "string";
a = numObj;
a = boolObj;
a = strObj;
