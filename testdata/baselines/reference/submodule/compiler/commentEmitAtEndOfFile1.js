//// [tests/cases/compiler/commentEmitAtEndOfFile1.ts] ////

//// [commentEmitAtEndOfFile1.ts]
// test
var f = ''
// test #2
module foo {
        function bar() { }
}
// test #3
module empty {
}
// test #4

//// [commentEmitAtEndOfFile1.js]
var f = '';
var foo;
(function (foo) {
    function bar() { }
})(foo || (foo = {}));
