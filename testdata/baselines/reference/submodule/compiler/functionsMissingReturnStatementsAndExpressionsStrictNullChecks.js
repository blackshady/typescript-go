//// [tests/cases/compiler/functionsMissingReturnStatementsAndExpressionsStrictNullChecks.ts] ////

//// [functionsMissingReturnStatementsAndExpressionsStrictNullChecks.ts]
function f10(): undefined {
    // Ok, return type allows implicit return of undefined
}

function f11(): undefined | number {
    // Error, return type isn't just undefined
}

function f12(): number {
    // Error, return type doesn't include undefined
}

const f20: () => undefined = () => {
    // Ok, contextual type for implicit return is undefined
}

const f21: () => undefined | number = () => {
    // Error, regular void function because contextual type for implicit return isn't just undefined
}

const f22: () => number = () => {
    // Error, regular void function because contextual type for implicit return isn't just undefined
}

async function f30(): Promise<undefined> {
    // Ok, return type allows implicit return of undefined
}

async function f31(): Promise<undefined | number> {
    // Error, return type isn't just undefined
}

async function f32(): Promise<number> {
    // Error, return type doesn't include undefined
}

// Examples from #36288

declare function f(a: () => undefined): void;

f(() => { });

f((): undefined => { });

const g1: () => undefined = () => { };

const g2 = (): undefined => { };

function h1() {
}

f(h1);  // Error

function h2(): undefined {
}

f(h2);


//// [functionsMissingReturnStatementsAndExpressionsStrictNullChecks.js]
function f10() {
}
function f11() {
}
function f12() {
}
const f20 = () => {
};
const f21 = () => {
};
const f22 = () => {
};
async function f30() {
}
async function f31() {
}
async function f32() {
}
f(() => { });
f(() => { });
const g1 = () => { };
const g2 = () => { };
function h1() {
}
f(h1);
function h2() {
}
f(h2);
