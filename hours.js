'use strict';

function hours(num) {
    let result = Math.floor(num/60);
    return result;
}

console.clear();
console.log(hours(299));
console.log(hours(300));