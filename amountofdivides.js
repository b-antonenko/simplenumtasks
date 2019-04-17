'use strict'
function amountOfDivides(num) {
    let counter = 0;
    for (let i=1; i <= num; i++) {
        if (num / i >= 1 && num % i === 0) {
            counter++;
        }
    };
    return counter;
};
console.clear();
console.log(amountOfDivides(100));
