//// [tests/cases/compiler/umdGlobalConflict.ts] ////

//// [index.d.ts]
export as namespace Alpha;
export var x: string;

//// [index.d.ts]
export as namespace Alpha;
export var y: number;

//// [consumer.ts]
import * as v1 from './v1';
import * as v2 from './v2';

//// [global.ts]
// Should be OK, first in wins
const p: string = Alpha.x;

//// [consumer.js]
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//// [global.js]
const p = Alpha.x;
