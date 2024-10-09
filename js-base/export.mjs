const variableToExport1 = ['firstValue', 'secondValue'];
const variableToExport2 = ['firstValue', 'secondValue'];
const variableToExport3 = [];

// module.exports = variableToExport;

// module.exports = {
//     value
// };

function fn () {
    console.log('Default function');
};

const arrowFn = () => {
    console.log('Arrow function');
};


export {variableToExport2, variableToExport3, fn, arrowFn};

export default variableToExport1;
