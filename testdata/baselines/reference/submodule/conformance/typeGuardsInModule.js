//// [tests/cases/conformance/expressions/typeGuards/typeGuardsInModule.ts] ////

//// [typeGuardsInModule.ts]
// Note that type guards affect types of variables and parameters only and 
// have no effect on members of objects such as properties. 

// variables in global
var num: number;
var strOrNum: string | number;
var var1: string | number;
// Inside module
module m1 {
    // global vars in function declaration
    num = typeof var1 === "string" && var1.length; // string

    // variables in module declaration
    var var2: string | number;
    if (typeof var2 === "string") {
        num = var2.length; // string
    }
    else {
        num = var2; // number
    }

    // exported variable in the module
    export var var3: string | number;
    if (typeof var3 === "string") {
        strOrNum = var3; // string | number
    }
    else {
        strOrNum = var3; // string | number
    }
}
// local module
module m2 {
    var var2: string | number;
    export var var3: string | number;
    module m3 {
        // global vars in function declaration
        num = typeof var1 === "string" && var1.length; // string

        // local variables from outer module declaration
        num = typeof var2 === "string" && var2.length; // string

        // exported variable from outer the module
        strOrNum = typeof var3 === "string" && var3; // string | number

        // variables in module declaration
        var var4: string | number;
        if (typeof var4 === "string") {
            num = var4.length; // string
        }
        else {
            num = var4; // number
        }

        // exported variable in the module
        export var var5: string | number;
        if (typeof var5 === "string") {
            strOrNum = var5; // string | number
        }
        else {
            strOrNum = var5; // string | number
        }
    }
}
// Dotted module
module m3.m4 {
    // global vars in function declaration
    num = typeof var1 === "string" && var1.length; // string

    // variables in module declaration
    var var2: string | number;
    if (typeof var2 === "string") {
        num = var2.length; // string
    }
    else {
        num = var2; // number
    }

    // exported variable in the module
    export var var3: string | number;
    if (typeof var3 === "string") {
        strOrNum = var3; // string | number
    }
    else {
        strOrNum = var3; // string | number
    }
}


//// [typeGuardsInModule.js]
var num;
var strOrNum;
var var1;
var m1;
(function (m1) {
    num = typeof var1 === "string" && var1.length;
    var var2;
    if (typeof var2 === "string") {
        num = var2.length;
    }
    else {
        num = var2;
    }
    if (typeof m1.var3 === "string") {
        strOrNum = m1.var3;
    }
    else {
        strOrNum = m1.var3;
    }
})(m1 || (m1 = {}));
var m2;
(function (m2) {
    var var2;
    let m3;
    (function (m3) {
        num = typeof var1 === "string" && var1.length;
        num = typeof var2 === "string" && var2.length;
        strOrNum = typeof m2.var3 === "string" && m2.var3;
        var var4;
        if (typeof var4 === "string") {
            num = var4.length;
        }
        else {
            num = var4;
        }
        if (typeof m3.var5 === "string") {
            strOrNum = m3.var5;
        }
        else {
            strOrNum = m3.var5;
        }
    })(m3 || (m3 = {}));
})(m2 || (m2 = {}));
var m3;
(function (m3) {
    let m4;
    (function (m4) {
        num = typeof var1 === "string" && var1.length;
        var var2;
        if (typeof var2 === "string") {
            num = var2.length;
        }
        else {
            num = var2;
        }
        if (typeof m4.var3 === "string") {
            strOrNum = m4.var3;
        }
        else {
            strOrNum = m4.var3;
        }
    })(m4 = m3.m4 || (m3.m4 = {}));
})(m3 || (m3 = {}));
