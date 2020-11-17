function numLength (num) {
    //input validation
    if (typeof num !== 'number') {
        return 'Pateikta netinkamo tipo reikšmė.';
    }
    if ('' +num === 'NaN') {
        return 'Pateikta netinkamo tipo reikšmė.';
    }

    //logic
    const textNum = '' + num;
    let size = textNum.length;

    if (num < 0) {
    console.log('minusas');
    size--;
    }
    if (num % 1 !== 0) {
        size--;
    }

    //return
    return size;
}

console.log(numLength(5));
console.log(numLength(781));
console.log(numLength(37060123456));
console.log(numLength(true));
console.log(numLength('asd'));
console.log(numLength(NaN));

