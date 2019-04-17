'use strict';

function isDivide(num) {
    if (num >= 60 ) {
        return (num % 60 === 0) ? true : false;
    }
    return false;
}

console.log(isDivide(60));
console.log(isDivide(120));
console.log(isDivide(0));
console.log(isDivide(5));
console.log(isDivide(61));