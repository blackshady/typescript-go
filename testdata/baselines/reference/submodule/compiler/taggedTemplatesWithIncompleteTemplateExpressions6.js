//// [tests/cases/compiler/taggedTemplatesWithIncompleteTemplateExpressions6.ts] ////

//// [taggedTemplatesWithIncompleteTemplateExpressions6.ts]
function f(x: TemplateStringsArray, y: string, z: string) {
}

// Incomplete call, not enough parameters, at EOF.
f `123qdawdrqw${ 1 }${

//// [taggedTemplatesWithIncompleteTemplateExpressions6.js]
function f(x, y, z) {
}
f `123qdawdrqw${1}${;
