//// [tests/cases/compiler/unicodeIdentifierNames.ts] ////

//// [unicodeIdentifierNames.ts]
// This test is passing, except that on node the resulting file will not have a BOM and on CScript it will which makes 
// impossible to use a single baseline file to match the result of both. this test should be enabled once this issue is resolved.
var 才能ソЫⅨ蒤郳र्क्ड्राüışğİliيونيكودöÄüß才能ソЫⅨ蒤郳र्क्ड्राüışğİliيونيكودöÄüßAbcd123 = 1;


//// [unicodeIdentifierNames.js]
var 才能ソЫⅨ蒤郳र्क्ड्राüışğİliيونيكودöÄüß才能ソЫⅨ蒤郳र्क्ड्राüışğİliيونيكودöÄüßAbcd123 = 1;
