const vardas = 'Vardenis';
const pasisveikinimas = "Labas rytas, Lietuva!"
console.log(vardas);
console.log(pasisveikinimas);

// do not -> dont't
const neiginys = "don't"
console.log(neiginys);

//Jis pasake: "Labas".
const fraze = 'Jis pasake: "Labas".';
console.log(fraze);

// Mother said: "Don't do it!".
const mother1 = "Mother said: \"Don't do it!\".";
const mother2 = 'Mother said: "Don\'t do it!".';
console.log(mother1);
console.log(mother2);

/*
<div>
    <p>Lorem upsum</p>
    <a href = "#">Click me</a>
</div>
*/
const html = '<div>\
    <p>Lorem upsum</p>\
    <a href = "#">Click me</a>\
</div>';
console.log(html);

/*
<div>
    <p>Lorem upsum</p>
    <a href = "#">Don't click me</a>
</div>
*/
const html2 = `<div>
<p>Lorem upsum</p>
<a href = "#">Don't click me</a>
</div>`;
console.log(html2)

// ********** Teksto konstravimas

//Jonukas ir Grytute ejo i miska.
const berniukas = 'Jonukas';
const mergaite = 'Gretute';
const veiksmas = 'ejo';
const vieta = 'miska';

// const pasaka = berniukas + ' ir ' + mergaite + ' ' + veiksmas + ' i ' + vieta + '.'; 

const pasaka = `${berniukas} ir ${mergaite} ${veiksmas} i ${vieta}.`;

console.log(pasaka);

// Abu variantai įmanomi, antrą paprasčiau skaityti. Jis naudojamas TIK back tickuose!!!

//Chuck Norris (80).
const heroName = 'Chuck';
const heroLast = 'Norris';
const birth = 1940;

const heroSays = `${heroName} ${heroLast} (${2020 - birth}). `;
console.log(heroSays);