// const importVariable = require('./export');

// console.log(importVariable);

import importVariable, {variableToExport2, variableToExport3, fn, arrowFn} from './export.mjs';

console.log(importVariable, variableToExport2, variableToExport3);

fn();
arrowFn();
