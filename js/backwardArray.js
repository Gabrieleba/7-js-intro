const wordList = ['labas', 'rytas', 'Lietuva'];

/*
Einame per zodziu sarasa
    Pasiimam konkretu zodi
        Pasiruosti kintamaji naujam atvirkstiniam zodziui
            Einam per to zodzio raides
                Pasiimam  to zodzio raide
                    Pasidedam is priekio atvirkstiniam zodziui
                        Atspausdinam atvirkstini zodi
*/

for (let w=0; w < wordList.length; w++) {
    const word = wordList[w];
    let backward = '';
    
    for (let r = 0; r < word.length; r++) {
        const letter = word[r];
        backward = letter + backward;

    }

    console.log(backward);

}