
let num = 1389;

let numString = num.toString();
numString = numString.split("");

let isCorrect = true;
for(let i = numString.length-1; i >= 1; i--){
    if(parseInt(numString[i]) > parseInt(numString[i-1])){
        isCorrect = false;
    }
}

alert(isCorrect);
