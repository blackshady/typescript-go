//// [tests/cases/compiler/typeParametersShouldNotBeEqual3.ts] ////

//// [typeParametersShouldNotBeEqual3.ts]
function ff<T extends Object, U extends Object>(x: T, y: U) {
    var z: Object;
    x = x;  // Ok
    x = y;  // Ok
    x = z;  // Ok
    z = x;  // Ok
}


//// [typeParametersShouldNotBeEqual3.js]
function ff(x, y) {
    var z;
    x = x;
    x = y;
    x = z;
    z = x;
}
