// 1. Implement function sigma(num) that, given a number, returns the sum of all positive integers up to the 
//    given number (inclusive).  Ex: sigma(3) = 6 (or 1+2+3); sigma(5) = 15 (or 1+2+3+4+5).
function sigma(num) {
    var sum = 0;
    for(var i = 0; i <=num; i++){
        sum += i;
    }
    return sum;
}
console.log(sigma(10));

// 2.  Write a function factorial(num) that, given a number, returns 
//     the product (multiplication) of all positive integers from 1 up to the given number (inclusive).  For example, factorial(3) = 6 (or 1*2*3); factorial(5) = 120 (or 1*2*3*4*5).
function factorial(num) {
    var multiply = 1;
    for(var i = 1; i <= num; i++){
        multiply *= i;
    }

    return multiply;
}
console.log(factorial(4));

// 3. Create a function to generate Fibonacci numbers.  In this famous mathematical sequence, each number is the 
//    sum of the previous two, starting with values 0 and 1.  Your function should accept one argument, an index into the sequence (where 0 corresponds to the initial value, 4 corresponds to the value four later, etc).  
//    Examples: fibonacci(0) = 0 (given), fibonacci(1) = 1 (given), fibonacci(2) = 1 (fib(0)+fib(1), or 0+1), fibonacci(3) = 2 (fib(1) + fib(2)3, or 1+1), fibonacci(4) = 3 (1+2), fibonacci(5) = 5 (2+3), fibonacci(6) = 8 (3+5), fibonacci(7) = 13 (5+8).  
//    Do this without using recursion first.  If you don't know what a recursion is yet, don't worry as we'll be introducing this concept in Part 2 of this assignment.
function fibonacci(numArr){

}

// 4.  Return the second-to-last element of an array. Given [42, true, 4, "Liam", 7], return "Liam".  If array is too short, return null.
function second(arr) {
    if(arr.length> 1){
    return arr[arr.length -2]
    }
    else{return null;}
    }
    console.log(second([1,3,5,6,8,7]));

// 5. Return the element that is N-from-array's-end.  Given ([5,2,3,6,4,9,7],3), return 4.  
//    If the array is too short, return null.
function number(arr){
    var num = 3;
    if(arr.length > 1){
    return arr[arr.length -num]
}
    else{return null;}
}
console.log(number([1,3,4,5,6,7]));

// 6. Return the second-largest element of an array. Given [42,1,4,3.14,7], return 7.  
//    If the array is too short, return null.
function second(arr){
    for(i = 0; i < arr.length; i++){
        if(i  > arr.lenghth)
        return[i];
    }
    else(return null);
}
console.log(second([3,4,56,78,34,7]));

// 7. Create a function that changes a given array to list each existing element twice, retaining original order.  
//    Convert [4, "Ulysses", 42, false] to [4,4, "Ulysses", "Ulysses", 42, 42, false, false].
function change(arr){
    var empty = [];
    for(i = 0; i < arr.length; i++){
        empty.push(arr[i]);
        empty.push(arr[i]);
    }
    return empty;
}
console.log(change([3,5,6,7,8]));