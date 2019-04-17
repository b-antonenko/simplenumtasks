'use strict';

function divides(num) {
    for (let i=0; i <= num; i++) {
        if (num / i >= 1 && num % i === 0) {
            console.log(i);
        }
    }
    return
}
console.clear();
console.log(divides(10));
console.log(divides(22));