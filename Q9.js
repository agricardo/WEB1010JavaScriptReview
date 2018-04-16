// Question 9

// Build a function declaration called maxOf2 that takes in two numbers and
// returns the greater value, or returns the first value if both of them
// are equal.
// Then test your function inside of a console.log by calling it with two
// different numbers and again in another console.log with two equal numbers.

function maxOf2(num1, num2){
    if(num1 > num2){
        console.log(num1)
    }else if(num1 < num2){
        console.log(num2)
    }else if(num1 == num2){
        console.log(num1)
    }
}

maxOf2(3, 3);
