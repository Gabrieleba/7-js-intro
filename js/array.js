/*
Sąrašo tipo kintamieji:
    sinonimai: sąrašas, masyvas, array, matrica*
    inicijuojama su laužtiniais skliaustais;
    viduje gali būti įvairių tipų reikšmių, bet rekomenduojam tik vieno tipo.
*/

//Pažymiai pvz1
//Petriuko pažymiai = 2, 10, 7, 5;

const petriukoPazymiai = [2, 10, 7, 5,];
console.log(petriukoPazymiai);

//kaip suskaičiuoti vidurkį?
let suma = 0;
suma = suma + petriukoPazymiai[0];
suma = suma + petriukoPazymiai[1];
suma = suma + petriukoPazymiai[2];
suma = suma + petriukoPazymiai[3];

//pozicijų skiačius - išsiskleidus console, nors pagal logiką 0, 1, 2.....

const kiekis = petriukoPazymiai.length;
const vidurkis = suma / kiekis;

console.log(vidurkis);

//Miestai pvz2

const miestai = ['Vilnius', 'Kaunas', 'Klaipeda', 'Anyksciai'];
console.log(miestai);

console.log(miestai[3]);
console.log(miestai[1]);
console.log(miestai[2]);
console.log(miestai[0]);