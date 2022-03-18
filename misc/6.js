
/*При заданном целом числе n посчитайте n + nn + nnn. */

/*
let n = 4
let num = n;
num = num + parseInt(n.toString() + n.toString());
num = num + parseInt(n.toString() + n.toString() + n.toString());
alert(num);
*/

/*Find 150th prime number*/

function isPrime(num){
    for(let i = 2; i < num; i++){
        if(num % i == 0){
            return false;
        }
    }
    return true;
}

counter = 0;
num = 2;
while(counter < 5){
    if(isPrime(num)){
        counter++;
    }
    num++;
}
alert(num-1)