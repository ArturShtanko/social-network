/*
Если записать числа от 1 до 5 английскими словами (one, two, three, four, five), то используется всего 3 + 3 + 5 + 4 + 4 = 19 букв.

Сколько букв понадобится для записи всех чисел от 1 до 1000 (one thousand) включительно?

Примечание: Не считайте пробелы и дефисы. 
Например, число 342 (three hundred and forty-two) состоит из 23 букв, число 115 (one hundred and fifteen) - из 20 букв. 
Использование "and" при записи чисел соответствует правилам британского английского.
*/

let onesLetters = [3, 3, 5, 4, 4, 3, 5, 5, 4]; // 1-9
let tensLetters = [3, 6, 6, 6, 5, 5, 7, 7, 6]; //10-90
let elevensLetters = [6, 6, 8, 8, 7, 7, 9, 9, 8]; //11-19

function returnPowers(number){

    let ones = number % 10;
    let tens = ((number - ones) % 100) / 10;
    let hundreds = (((number - ones) - (tens * 10)) % 1000 ) / 100;
    let thousands = ((((number - ones) - (tens * 10)) - (hundreds * 100)) % 10000) / 1000;

    return [thousands, hundreds, tens, ones];
}

let letterCount = 0;
for(let num = 1; num <= 1000; num++){

    let numPowers = returnPowers(num);

    //1-9
    if (num < 10){
        letterCount += onesLetters[numPowers[3]-1];
    }

    //10-99
    else if(num >= 10 && num <= 99){
        if(num >= 11 && num <= 19){
            letterCount += elevensLetters[numPowers[3]-1];
        }
        else{
            letterCount += tensLetters[numPowers[2]-1];
            if (numPowers[3] > 0) {
                letterCount += onesLetters[numPowers[3]-1];
            }
        }
    }

    //100-999
    else if(num >= 100 && num <= 999){
        letterCount += onesLetters[numPowers[1]-1] + 7;
        if (numPowers[2] > 0){
            letterCount += 3;
            if((numPowers[2] * 10 + numPowers[3]) >= 11 && (numPowers[2] * 10 + numPowers[3]) <= 19){
                letterCount += elevensLetters[numPowers[3]-1];
            }
            else{
                letterCount += tensLetters[numPowers[2]-1];
                if (numPowers[3] > 0) {
                    letterCount += onesLetters[numPowers[2]-1];
                }
            }
        }
    }

    //1000-etc
    else if (num >= 1000){
        letterCount += onesLetters[numPowers[0]-1] + 8;
        if (numPowers[1] > 0){
            letterCount += onesLetters[numPowers[1]-1] + 7;
            if (numPowers[2] > 0){
                letterCount += 3;
                if((numPowers[2] * 10 + numPowers[3]) >= 11 && (numPowers[2] * 10 + numPowers[3]) <= 19){
                    letterCount += elevensLetters[numPowers[3]-1];
                }
                else{
                    letterCount += tensLetters[numPowers[2]-1];
                    if (numPowers[3] > 0) {
                        letterCount += onesLetters[numPowers[2]-1];
                    }
                }
            }
        }
    }
}

alert(letterCount);