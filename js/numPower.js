/*
Funkcija: duoto skaiciaus kelimas kvadratu
pvz 2 -> 4
pv 3 -> 9 ir pan
*/

function kvadratu(num) {
    const rez = num * num;
    console.log(num, '->', rez);

    return rez;
}

const duKv = kvadratu(2);
const trysKv =  kvadratu (3);

console.log(duKv);
console.log(trysKv);
console.log(kvadratu (-4));
console.log(kvadratu(-5));

// return naudosime visada, console.log beveik niekada

function laipsnis(base, power) {
    //return base ** power;
    //return Math.pow(base, power);
    let rez = 1;

    for (let i = 0; i < power; i++) {
        rez = rez * base;
    }

    return rez;
}

const kubas2 = laipsnis(2,3);
console.log(kubas2, '->', 8);

const du10 = laipsnis(2, 10);
console.log(du10, '->', 1024);

const minus5 = laipsnis(-5, 3);
console.log(minus5, '->', -125);