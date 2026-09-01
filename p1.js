//Write a function describeValue that takes any value and returns a string with two pieces of information joined by a space, a pipe, and another space:

//<type of the value> | <truthy or falsy></truthy>

function describeValue(value) {
    const type = typeof value;
    const truthiness = Boolean(value) ? 'truthy' : 'falsy';
    return `${type} | ${truthiness}`;
}

// console.log(describeValue(42)); // "number | truthy"
// console.log(describeValue("hello")); // "string | truthy"
// console.log(describeValue("")); // "string | falsy"
// console.log(describeValue(25)); // "number | truthy"
// console.log(describeValue(null)); // "object | falsy"
// console.log(describeValue(undefined)); // "undefined | falsy"
// console.log(describeValue(true)); // "boolean | truthy"
// console.log(describeValue(false)); // "boolean | falsy"
// console.log(describeValue(0)); // "number | falsy"