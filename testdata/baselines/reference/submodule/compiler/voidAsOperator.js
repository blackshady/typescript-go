//// [tests/cases/compiler/voidAsOperator.ts] ////

//// [voidAsOperator.ts]
if (!void 0 !== true) {
 
}

//CHECK#2
if (!null !== true) {
 
}


//// [voidAsOperator.js]
if (!void 0 !== true) {
}
if (!null !== true) {
}
