/*
Напишите функцию, которая принимает текст и возвращаетт два слова: наиболее часто встречающееся и самое длинное.
*/

function solution(text){
    let wordArray = text.split(" ");

    //longest word
    let longestWord = {word: "", length: 0};
    wordArray.forEach(currentWord => {
        if(currentWord != longestWord.word && currentWord.length > longestWord.length){
            longestWord = {word: currentWord, length: currentWord.length};
        }
    });

    //most frequent word
    let dict = [];
    wordArray.forEach(cWord => {
        let newEntry = {word: cWord, amount: 0};
        wordArray.forEach(ccWord => {
            if(ccWord == newEntry.word){
                newEntry.amount = newEntry.amount + 1;
            }
        });
        dict.push(newEntry);
    });
    let freqWord = {word: "", amount: 0};
    dict.forEach(cWord => {
        if(cWord.word != freqWord.word && cWord.amount > freqWord.amount){
            freqWord = cWord;
        }
    })

    return [longestWord.word, freqWord.word];
}

alert(solution("Loremloreml ipsumipsum dolor sit amet dolor amet dolor"));