//// [tests/cases/compiler/forStatementInnerComments.ts] ////

//// [forStatementInnerComments.ts]
declare var a;
/*0*/ for /*1*/ ( /*2*/ var /*3*/ x /*4*/ in /*5*/ a /*6*/) /*7*/ {}
/*0*/ for /*1*/ ( /*2*/ var /*3*/ y /*4*/ of /*5*/ a /*6*/) /*7*/ {}
/*0*/ for /*1*/ ( /*2*/ x /*3*/ in /*4*/ a /*5*/) /*6*/ {}
/*0*/ for /*1*/ ( /*2*/ y /*3*/ of /*4*/ a /*5*/) /*6*/ {}
/*0*/ for /*1*/ ( /*2*/ a /*3*/ ; /*4*/ a  /*5*/ ; /*6*/ a /*7*/) /*8*/ {}


//// [forStatementInnerComments.js]
for (var x in a) { }
for (var y of a) { }
for (x in a) { }
for (y of a) { }
for (a; a; a) { }
