//***************Kintamieji*******************//

/* 
Palyginimo sąlyga (if):
Galimi operatoriai: >, <, >=, <=, ==, !=, ===, !==
Naudotini: >, <, >=, <=, ===, !==
Neneaudotini: ==, != 
*/

/*
Galimos struktūros:
if () {}
if () {} else {}
if () {} else if {}... else if {}
if () {} else if {}... else if {} else{}
*/

const accountBalance =200;
const transfer = 200;

if (accountBalance < transfer) {
    console.log('Banko zinute: saskaitoje nepakanka lesu');
}

if (accountBalance >= transfer) {
    console.log('Banko zinute: pavedimas padarytas.');
}

if (accountBalance >= transfer) {
    console.log('Banko zinute: pavedimas padarytas.');
} else {
    console.log('Banko zinute: saskaitoje nepakanka lesu');
}

const akys = 'melynos';

if (akys == 'melynos') {
    console.log('Geros širdies žmogus');
} else if (akys == 'zalios') {
    console.log('Melagiai..');
} else if (akys == 'raudonos') {
    console.log('Programuotojas..');
} else {
    console.log('A tu turi akis???');
}

console.log(' Pirmas bandymas baigtas. Kas toliau?...');

const akys2 = 'zalios';

if (akys2 == 'melynos') {
    console.log('Geros širdies žmogus');
} else {
    if (akys2 == 'zalios') {
        console.log('Melagiai..');    
    } else {
        if (akys2 == 'raudonos') {
            console.log('Programuotojas');
        } else {
            console.log('A tu turi akis???');   
        }
    }
}

console.log('Pirmą bandymą skaityti lengviau!');

console.clear();

const pirmas = 8;
const antras = 8;

if (pirmas !== antras) {
    console.log(true);
} else {
    console.log(false);
}

const zodis1 = 'Labas';
const zodis2 = 'rytas';

// Tarp žodžių niekada nenaudojame palyginimo operatorių. Nėra visiškai jokios prasmės kasdieninėse situacijose.
// Jei jau lyginam - lyginama pagal ascii lentelę.

if (zodis1 === zodis2) {
    console.log(true);
} else {
    console.log(false);
}

