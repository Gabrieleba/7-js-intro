function bigNum (list) {
    //input validation
    if (typeof list !== 'object') {
        return 'Netinkamas tipas';
    }
    if (list.length === 0) {
        return 'Sarasas yra tuscias.'
    }

    //logic
    let biggestNumber = list[0];
    for (let i = 0; i < 5; i++) {
        const num = list[i];

        if (num > biggestNumber) {
            biggestNumber = num;
        }
    }

    //return
    return biggestNumber;
}

console.log( bigNum('pomidoras'));
console.log( bigNum([1] ) );
console.log( bigNum([1, 2, 3]));
console.log( bigNum([-5, 78, 14, 0, 18 ]));
console.log( bigNum([69, 69, 69, 69, 66]));
console.log( bigNum([-1, -2, -3, -4, -5, -6, -7, -8]));

console.log( bigNum([]));