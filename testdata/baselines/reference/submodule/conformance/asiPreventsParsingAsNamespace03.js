//// [tests/cases/conformance/internalModules/moduleDeclarations/asiPreventsParsingAsNamespace03.ts] ////

//// [asiPreventsParsingAsNamespace03.ts]
var namespace: number;
var n: string;

namespace container {
    namespace    // this is the identifier 'namespace'
    n            // this is the identifier 'n'
    { }          // this is a block body
}

//// [asiPreventsParsingAsNamespace03.js]
var namespace;
var n;
var container;
(function (container) {
    namespace;
    n;
    { }
})(container || (container = {}));
