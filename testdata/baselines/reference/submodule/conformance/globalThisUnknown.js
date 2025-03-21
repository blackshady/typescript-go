//// [tests/cases/conformance/es2019/globalThisUnknown.ts] ////

//// [globalThisUnknown.ts]
declare let win: Window & typeof globalThis;

// this access should be an error
win.hi
// these two should be fine, with type any
this.hi
globalThis.hi

// element access is always ok without noImplicitAny
win['hi']
this['hi']
globalThis['hi']



//// [globalThisUnknown.js]
win.hi;
this.hi;
globalThis.hi;
win['hi'];
this['hi'];
globalThis['hi'];
