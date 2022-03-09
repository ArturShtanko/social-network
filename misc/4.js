/*
Пятизначное число 16807 = 7 в 5 степени является также пятой степенью натурального числа. 
Аналогично, девятизначное число 134217728 = 8 в 9   степени является девятой степенью.
Сколько существует n-значных натуральных чисел, являющихся также и n-ми степенями натуральных чисел?
*/

function solution(n){

    function defineMin(n){
        let answer = "1";
        for(let i = 1; i < n; i++){ answer += "0"; }
        return parseInt(answer);
    }

    function defineMax(n){
        let answer = "";
        for(let i = 0; i < n; i++){ answer += "9"; }
        return parseInt(answer);
    }

    let minNumber = defineMin(n);
    let maxNumber = defineMax(n);
    let answer = [];

    for(let i = minNumber; i <= maxNumber; i++){
        let number = i;
        let comparingNumber = 0;

        let counter = 1;
        while (comparingNumber < number){
            comparingNumber = Math.pow(counter, n);
            counter += 1;
            if(comparingNumber == number){ answer.push(number); }
        }
    }

    return answer;
}

let num = 5;
alert(solution(num).length + " - " + solution(num));