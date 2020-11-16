const kiek = 5;

for (let i=0; i <= kiek; i++) //"i++"" = i + 1 {
    //logika
    console.log('Labas rytas!', i);
// i - parodo nuo kurio skaičiaus console atidarys info.
// "i"(index) yra pasirinktinas žymėjimas. Programerių susitarimu.
console.log('pabaiga');

/*let number = 7;
console.log(number);
//"number++" yra lygiai tas pats, kas "number + 1"
number++; 
console.log(number);

number++;
console.log(number);

number++;
console.log(number);

number++;
console.log(number);

number++;
console.log(number);
*/
console.log('-------');
/*
Jei kas mėnesį žmogus uždirba 5000, kiek pajamų jis turės per metus?
*/

const alga = 5000;
const men = 12;
let pajamos = 0;
//const pajamos = alga * men;

for (let i = 1; i <= men; i++){
    //(let i = 1; i <= men; i + 3) - console skaičiuotų kas 3 mėn.
    pajamos = pajamos + alga;
    console.log( `${i}) ${pajamos} pinigu.`);
    console.log( `${i}) ${i * alga} pinigu.`);
}

console.log ('-------');

/*
Parašyti skaičius nuo 8 iki 4.
*/

for (let i=8; i >= 4; i--) {
    console.log(i);
}

console.log ('-------');

/*
Išvardinti ciferblato skaičius nuo duotos valandos iki galo.
*/

const valanda = 3;
const maxVal = 12;

for (let val = valanda; val <= maxVal; val++ ) {
    console.log(val);
}

console.log ('-------');

/*
Duotas miestų sąrašas. Išvardinti kiekvieną aplankytą miestą.
Spausdiname: Aplankiau: "Miesto pavadinimas."
*/

const miestai = ['Vilnius', 'Kaunas', 'Klaipeda', 'Anyksciai'];
/*console.log(miestai[0]);
console.log(miestai[1]);
console.log(miestai[2]);
console.log(miestai[3]); - taip darytmėm rankiniu būdu. O jei miestų 1000?*/

for (let i=0; i < miestai.length; i++) {
    const miestoPavadinimas = miestai[i];
    console.log(`Aplankiau: ${miestai[i]}.`);
}
/*4 - sąrašo elementų kiekis
"i < miestai.length" - automatiškai išmatuoja sąrašo ilgį.
Kai matom sąrašus- automatiškai renkamės ciklus.
*/

console.log ('-------');

/* 
Išvardinti sąrašo narius iš galo.
*/

const abc = ['a', 'b', 'c', 'd', 'e', 'f'];

console.log(abc);

for (let pozicija = abc.length -1; pozicija >=0; pozicija --) {
    console.log(abc[pozicija]);
}

console.log ('-------');

// const text = 'dodekahedronas';
const text = 'braskyte';
for (let i=0; i < text.length ; i++) {
    console.log(text[i]);
}
console.log(text);
console.log(text.length);

console.log ('-------');

/* 
Duodamas žodis ir iš jo reikia išrinkti kas antrą raidę ir išspausdinti, kas gaunasi.
pvz: abcdef -> bdf
*/

/*const zodis = 'abcdef';
const kiekis = text.length;
let atsakymas = '';
for (let i = 1; i < kiekis; i = i + 2) {
    const raide = zodis[i];
    atsakymas = atsakymas + raide;
    console.log(raide);
}
console.log(atsakymas);*/


const zodis = 'pomidoras';
const step = 1;
let rez = '';

for (let i = step; i < zodis.length; i = i + step) {
    const raide = zodis[i];
    console.log(raide);
    rez = rez + raide;
}

console.log(rez);

