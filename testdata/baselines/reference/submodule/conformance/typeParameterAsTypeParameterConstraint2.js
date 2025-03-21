//// [tests/cases/conformance/types/typeParameters/typeArgumentLists/typeParameterAsTypeParameterConstraint2.ts] ////

//// [typeParameterAsTypeParameterConstraint2.ts]
// using a type parameter as a constraint for a type parameter is invalid
// these should be errors unless otherwise noted

function foo<T, U extends T>(x: T, y: U): U { return y; } // this is now an error

foo(1, '');
foo(1, {});

interface NumberVariant extends Number {
    x: number;
}
var n: NumberVariant;
var r3 = foo(1, n);

function foo2<T, U extends { length: T }>(x: T, y: U) { return y; } // this is now an error
foo2(1, { length: '' });
foo2(1, { length: {} });
foo2([], ['']);

//// [typeParameterAsTypeParameterConstraint2.js]
function foo(x, y) { return y; }
foo(1, '');
foo(1, {});
var n;
var r3 = foo(1, n);
function foo2(x, y) { return y; }
foo2(1, { length: '' });
foo2(1, { length: {} });
foo2([], ['']);
