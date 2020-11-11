// spausdiname sveikąjį skaičių
console.log(98475);

// du skaiciai vs desimtainis = kaip veikia ir koks yra kablelis
console.log(3,14);
console.log(3.14)

// kaip spausdinamas tekstas?
console.log("Labas rytas!")
console.log('Labas rytas')

console.log ("Gabrielė " + "Bašinskaitė")

// ***KINTAMIEJI*** //
    /*Iniciavimo būdai:
    const - default, tai mūsų pirmasis pasirinkimas,
    let - galima, jei yra reiakals keisti reikšmes,
    var - kolkas nenaudojamas 
    */
    /*Kintamųjų tipai (pagal reikšmes):
    skaičiai (numbers) - 2020, 3.14, -7, -5.144 ir t.t.
    tekstai (string) - "labas", "ką tu?" ir t.t.
    loginės (boolean) - true, false
    sąrašai (array) - []
    objektai (object) - {}
     */

const pirmasSkaicius = 2;
const antrasSkaicius = 3;
// console.log("Pirmaisis skaicius turetu buti 2");
console.log(pirmasSkaicius)
// console.log("Antrasis skaicius turetu buti 3");
console.log(antrasSkaicius);

const suma = pirmasSkaicius + antrasSkaicius;
console.log(suma);
console.log(pirmasSkaicius, '+', antrasSkaicius, '=', suma);


const vardas = 'Vardenis';
const amzius = 99;
console.log(vardas);
console.log(amzius);
// Vardenis yra 99 metu amziaus.
// ____ yra ____metu amziaus.
const sakinys = vardas + ' yra ' + amzius + 'metu amziaus'
console.log(sakinys)



const suo = 'Rikis';
const maistas = 'kaulas'
console.log(suo);
console.log(maistas);
// Rikis megstamas maistas yra kaulas.
const sakinys2 = suo + ' megstamas maistas yra ' + maistas  + '.';
console.log(sakinys2)



const heroName = 'Chuck';
const heroLastName = 'Norris'
const birth = 1940;
const year = 2020;
const currentAge = year - birth;
console.log(heroName);
console.log(heroLastName);
console.log(birth);
console.log(year);
console.log(currentAge);
// Chuck Norris (80)
const sakinys2 = heroName + ' ' + heroLastName + '(' + suma2 + ')' 
console.log(sakinys2);


// console.clear(); - išvalo console naršyklėje


let pinigine = 7;
console.log(pinigine)
const sausis = 100;
const vasaris = 200;
const kovas = 70;
// Norime gauti tris mėnesius, sistemingai susumuotus:
// 107
// 307
// 377
pinigine = pinigine + sausis ;
console.log(pinigine);

pinigine = pinigine + vasaris;
console.log(pinigine);

pinigine = pinigine + kovas;
console.log(pinigine);



