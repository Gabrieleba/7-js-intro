// 1
const number1 = 0;
const number2 = 1;
const number3 = 2;

console.log(number1);
console.log(number2);
console.log(number3);

// 2
const name = 'Vardas';
const lastName = 'Pavardė';
const address = 'Adresas';
console.log(name);
console.log(lastName);
console.log(address);

// 3
const numbers = [1, 2, 3, 4, 5];
const numbers1 = [6, 7, 8, 9, 10];
const numbers2 = [11, 12, 13, 14, 15];
console.log(numbers);
console.log(numbers1);
console.log(numbers2);

// 4
const city = ['Vilnius', 'Kaunas', 'Klaipėda', 'Alytus', 'Druskininkai'];
const river = ['Nemunas', 'Nėris', 'Vilnelė', 'Šešupė', 'Merkys'];
const car = ['Audi', 'Volkswagen', 'Peugeot', 'Toyota', 'Volvo'];
console.log(city);
console.log(river);
console.log(car);

// 5
console.log(number1 + number2 + number3);

// 6
console.log(name + ' ' + lastName + ' ' + address);

// 7
let start = numbers[0];
result = start - numbers[1];
result = result + numbers[2];
result = result - numbers[3];
result = result + numbers[4];
console.log(result);

let start1 = 6;
result = numbers1[0] - numbers1[1];
result = result + numbers1[2];
result = result - numbers1[3];
result = result + numbers1[4];
console.log(result);

let start2 = 11;
result = numbers2[0] - numbers2[1];
result = result + numbers2[2];
result = result - numbers2[3];
result = result + numbers2[4];
console.log(result);

// 8
const sentence = city[4] + ', ' + city[3] + ', ' + city[2] + ', ' + city[1] + ', ' + city[0];
console.log(sentence)

const sentence1 = river[4] + ', ' + river[3] + ', ' + river[2] + ', ' + river[1] + ', ' + river[0];
console.log(sentence1);

const sentence2 = car[4] + ', ' + car[3] + ', ' + car[2] + ', ' + car[1] + ', ' + car[0];
console.log(sentence2);
