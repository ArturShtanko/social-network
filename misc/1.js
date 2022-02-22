

let sumSquares = 0;
let sumSquared = 0;

for (let i = 1; i <= 10; i++){
    sumSquares += i * i;
    sumSquared += i;
}
sumSquared *= sumSquared;

let result = sumSquared - sumSquares;

alert("Sum of squares - " + sumSquares + "\nSquare of sum - " + sumSquared + "\nResult - " + result);