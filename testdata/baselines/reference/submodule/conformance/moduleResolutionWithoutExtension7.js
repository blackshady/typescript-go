//// [tests/cases/conformance/externalModules/moduleResolutionWithoutExtension7.ts] ////

//// [bar.cts]
// Extensionless relative path cjs import in a cjs module
import foo = require("./foo"); // should error, should not ask for extension

//// [bar.cjs]
export {};
