//// [tests/cases/compiler/typeParameterOrderReversal.ts] ////

//// [typeParameterOrderReversal.ts]
interface X<T> {
    n: T;
}

// Only difference here is order of type parameters
function uFirst<U extends X<T>, T>(x: U) { }
function tFirst<T, U extends X<T>>(x: U) { }
var z: X<number> = null;

// Both of these should be allowed
uFirst(z);
tFirst(z);


//// [typeParameterOrderReversal.js]
function uFirst(x) { }
function tFirst(x) { }
var z = null;
uFirst(z);
tFirst(z);
