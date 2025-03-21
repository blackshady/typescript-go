//// [tests/cases/conformance/expressions/unaryOperators/decrementOperator/decrementOperatorWithEnumType.ts] ////

//// [decrementOperatorWithEnumType.ts]
// -- operator on enum type

enum ENUM1 { A, B, "" };

// expression
var ResultIsNumber1 = --ENUM1["A"];
var ResultIsNumber2 = ENUM1.A--;

// miss assignment operator
--ENUM1["A"];

ENUM1[A]--;


//// [decrementOperatorWithEnumType.js]
var ENUM1;
(function (ENUM1) {
    ENUM1[ENUM1["A"] = 0] = "A";
    ENUM1[ENUM1["B"] = 1] = "B";
    ENUM1[ENUM1[""] = 2] = "";
})(ENUM1 || (ENUM1 = {}));
;
var ResultIsNumber1 = --ENUM1["A"];
var ResultIsNumber2 = ENUM1.A--;
--ENUM1["A"];
ENUM1[A]--;
