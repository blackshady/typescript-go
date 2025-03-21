//// [tests/cases/compiler/voidIsInitialized.ts] ////

//// [voidIsInitialized.ts]
const x: void = undefined;
const y: void = undefined;

if(typeof x === "undefined") {
    x // no error: assume x2 is initialised
}

if(typeof y !== "undefined") {
    y // no error: do not narrow void
}


//// [voidIsInitialized.js]
const x = undefined;
const y = undefined;
if (typeof x === "undefined") {
    x;
}
if (typeof y !== "undefined") {
    y;
}
