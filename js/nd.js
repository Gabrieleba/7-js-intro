// 1
const number1 = 0;
console.log(number1);

const number2 = 1;
console.log(number2);

const number3 = 2;
console.log(number3);

// 2
const name = 'Vardas';
console.log(name);

const lastName = 'Pavardė';
console.log(lastName);

const address = 'Adresas';
console.log(address);

// 3
const numbers = [1, 2, 3, 4, 5];
console.log(numbers);

const numbers1 = [6, 7, 8, 9, 10];
console.log(numbers1);

const numbers2 = [11, 12, 13, 14, 15];
console.log(numbers2);

// 4
const city = ['Vilnius', 'Kaunas', 'Klaipėda', 'Alytus', 'Druskininkai'];
console.log(city);

const river = ['Nemunas', 'Nėris', 'Vilnelė', 'Šešupė', 'Merkys'];
console.log(river);

const car = ['Audi', 'Volkswagen', 'Peugeot', 'Toyota', 'Volvo'];
console.log(car);

// 5
console.log(number1 + number2 + number3);

// 6
console.log(name + ' ' + lastName + ' ' + address);
// `${name} ${lastName} ${address}`;

// 7
let result = 0
result = result + numbers[0];
result = result - numbers[1];
result = result + numbers[2];
result = result - numbers[3];
result = result + numbers[4];
console.log(result);

// const result = numbers[0] - numbers[1] + numbers[2] - numbers[3] + numbers[4];
// console.log(result);

let result1 = 0;
result1 = result1 + numbers1[0];
result1 = result1 - numbers1[1];
result1 = result1 + numbers1[2];
result1 = result1 - numbers1[3];
result1 = result1 + numbers1[4];
console.log(result1);

let result2 = 0;
result2 = result2 + numbers2[0];
result2 = result2 - numbers2[1];
result2 = result2 + numbers2[2];
result2 = result2 - numbers2[3];
result2 = result2 + numbers2[4];
console.log(result2);

// 8
/* const sentence = city[4] + ', ' + city[3] + ', ' + city[2] + ', ' + city[1] + ', ' + city[0];
console.log(sentence)*/

let allCities = '';
allCities = allCities + city[4];
allCities = allCities + ', ' + city[3];
allCities = allCities + ', ' + city[2];
allCities = allCities + ', ' + city[1];
allCities = allCities + ', ' + city[0];
console.log(allCities);
/*Taip daryti reikia. + kablelio įterpimas reikalingas tarp žodžių, kad ištrinant vieną iš jų, išsitrintų ir kablelis su tarpu. Visada reikia rasti patogiausią vietą!*/


const sentence1 = river[4] + ', ' + river[3] + ', ' + river[2] + ', ' + river[1] + ', ' + river[0];
console.log(sentence1);

const sentence2 = car[4] + ', ' + car[3] + ', ' + car[2] + ', ' + car[1] + ', ' + car[0];
console.log(sentence2);


// Visada rašyti taip, kaip liepai užduotis! Šiuo atveju kiekvienas console.log rašosi iškart po const!!!

console.clear();

/***************** ND Ciklai *******************/


//1

// 0 - 0        = 0
// 0 - 4        = 10
// 0 - 100      = 5050
// 574 - 815    = didelis teigiamas sveikas
// -50 - 50     = 0
// 70 - 30      = santykinai mazas neigiamas sveikas

const nuo = 0;
const iki = 4;

let sum = 0;

if (nuo < iki) {
    for (let i = nuo; i <= iki; i++) {
    sum = sum + i;
    }
} else {
    for (let i = iki; i <= nuo; i++) {
        sum = sum +i;
    }
}

console.log(`Skaiciu intervale tarp ${nuo} ir ${iki} suma yra ${sum}`);

//2

//"abcdef" -> "fedcba"
