
function isPrime(num){
    let flag = true;
        if(num == 0 || num == 1) { flag = false; }
        else{ for(let i = 2; i <= num/2; i++){ if(num % i == 0){ flag = false; break; } } }
        /*console.log(num + " - " + flag);*/
    return flag;
}

let primeNumbers = []

for(let i = 1; i <= 10000; i++){
    if(isPrime(i)){
        primeNumbers.push(i);
    }
}

let primeSum = 0;
primeNumbers.forEach(num => { primeSum = primeSum + num; });

alert(primeSum);