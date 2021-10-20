
// challenge1: //first method
for(let i=1; i<=100; i++){
    if(i%15 === 0){
        console.log(`${i}: FizzBuzz`)
    }
    else if(i%5 === 0){
        console.log(`${i}: Buzz`)
    }
    else if(i%3 === 0){
        console.log(`${i}: Fizz`)
    }
    else if(i%7 === 0){
        console.log(`${i}: Fish`)
    }
    else if(i%8 === 0){
        console.log(`${i}: Bus`)
    }
    else{
        console.log(i)
    }
}

// challenge1: second method(Refactoring)
for (let i = 1; i <= 100; i++) {
    let output = '';
    if (i % 3 === 0) output += 'Fizz';
    if (i % 5 === 0) output += 'Buzz';
    if (i % 7 === 0) output = 'Fish';
    if (i % 8 === 0) output = 'Bus';
    console.log(output || i); 
}

// ====================================================================

// challenge2:
// there is not any number dividable by 3,5,7,8 between 0 to 100, so I consider numbers between 1 to 1000.

// challenge2: first method
// this method shows us all numbers with their fizz, buzz,..
for (let i = 1; i <= 1000; i++) {
    let output = '';
    if (i % 3 === 0) output += 'Fizz';
    if (i % 5 === 0) output += 'Buzz';
    if (i % 7 === 0) output += 'Fish';
    if (i % 8 === 0) output += 'Bus';
    console.log(output || i);
}


// challenge2: second method
let arr = []
for (let i = 1; i <= 1000; i++) {
    arr.push(i);
}

// challenge2: second method A:
// used 3*5*7*8 = 840 and array method and shows us just the result
arr.map(el => {
    el % 840 === 0 ? console.log(`${el}: FizzBuzzFishBus`) : 'There is not any number dividable with 3,5,7,8';
})

// challenge2: second method B:
// used array method and && and shows us just the result
const challeng2 = arr.map(el => {
    let output = '';
    el % 3 === 0 &&
    el % 5 === 0 &&
    el % 7 === 0 &&
    el % 8 === 0 ? output += 'FizzBuzzFishBus': ' '
    console.log(output);
})