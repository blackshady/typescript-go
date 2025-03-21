//// [tests/cases/conformance/types/typeRelationships/recursiveTypes/infiniteExpansionThroughTypeInference.ts] ////

//// [infiniteExpansionThroughTypeInference.ts]
interface G<T> {
    x: G<G<T>> // infinitely expanding type reference
    y: T
}

function ff<T>(g: G<T>): void {
    ff(g) // when infering T here we need to make sure to not descend into the structure of G<T> infinitely
}



//// [infiniteExpansionThroughTypeInference.js]
function ff(g) {
    ff(g);
}
