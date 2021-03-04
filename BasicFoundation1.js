// 1. Numbers 1-255
for(var i= 1; i <= 255; i++){
    console.log(i)
}

// 2. Sum of all even numbers 1-1000
function even() {
    var sum = 0;
    for (var i = 1; i <= 1000; i++) {
        if(i % 2 == 0)
        sum += i;
    }
    console.log(sum);
    return sum;
}
even();


// 3. Sum of odd numbers 1-5000
function Odd() {
    var sum = 0;
    for (var i = 1; i <= 5000; i++) {
        if(i % 2 == 1)
        sum += i;
    } 
    console.log(sum);
    return sum;
}
Odd();

// 4. Write a function that returns the sums of all values in an array
var a = [1,2,5];
var b = [-5,2,5,12]

function addArray(arr){
    var sum = 0;
    for (var i = 0; i < arr.length; i++) {

        sum += arr[i];
    }
    return sum;
}
console.log(addArray(a));
console.log(addArray(b));


// 5. Given an array with multiple values, write a function that returns the maximum number in the array. (e.g. for [-3,3,5,7] max is 7)
function values(arr){
var max = 0;
max = (Math.max.apply(Math, arr));
return max;
}
console.log(values([-3,3,5,7]));

// 6. Given an array with multiple values, write a function that returns the average of the values in the array. (e.g. for [1,3,5,7,20] average is 7.2)
var avg = 0;
var sum = 0;
var arr = [1,3,5,7,20];
function average(){
    for(var i = 0; i < arr.length; i++){
        sum += arr[i];
        avg = sum/arr.length;
    }
    return avg;
}
console.log(average([1,3,5,7,20]));

// 7. Write a function that would return an array of all the odd numbers between 1 to 50. (ex. [1,3,5, .... , 47,49]). Hint: Use 'push' method.
function odd(){
    var arr = [];
    for(var i = 1; i <50; i++){
        if(i % 2 != 0){
        arr.push(i);}
    }
    return arr;
}

console.log(odd());

// 8. Given value of Y, write a function that takes an array and returns the number of values that are greater than Y. For example if arr = [1, 3, 5, 7] and Y = 3, your function will return 2. (There are two values in the array greater than 3, which are 5, 7).


// 9. Given an array with multiple values, write a function that replaces each value in the array with the value squared by itself. (e.g. [1,5,10,-2] will become [1,25,100,4])
var arr = [1, 5, 10, 2];
var arr2 = [];
    for (var i = 0; i < arr.length; i++) {
        arr2.push(Math.pow(arr[i], 2));
}

console.log(arr2);

// 10. Given an array with multiple values, write a function that replaces any negative numbers within the array with the value of 0. When the program is done the array should contain no negative values. (e.g. [1,5,10,-2] will become [1,5,10,0])
var arr = [1,5,10,-2]
function replace() {
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] < 0) {
        arr[i] = 0;
        }
    }
    return arr;
}
console.log(replace());

// 11. Given an array with multiple values, write a function that returns a new array that only contains the maximum, minimum, and average values of the original array. (e.g. [1,5,10,-2] will return [10,-2,3.5])
function max(arr) {
    var max = arr[0];
    var min = arr[0];
    var sum = 0;
    var avg = 0;
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i]
        }
        else if (arr[i] < min) {
            min = arr[i]
        }
        sum += arr[i];
    }
    avg = sum / arr.length;
    var newarr = [max, min, avg];
    return newarr;
}
console.log(max([1,5,10,-2]));

// 12. Write a function that will swap the first and last values of any given array. The default minimum length of the array is 2. (e.g. [1,5,10,-2] will become [-2,5,10,1]).
function swapArr(arr) {
    var temp = 0;
    
    temp = arr[0];
    arr[0] = arr[arr.length - 1];
    arr[arr.length - 1] = temp;

    return arr;
}
console.log(swapArr([20,8,6,54,67,39,45]));

// 13. Write a function that takes an array of numbers and replaces any negative values within the array with the string 'Dojo'. For example if array = [-1,-3,2], your function will return ['Dojo','Dojo',2].
function replaceNum(numArr) {
    for(var i = 0; i < numArr.length; i++){
        if(numArr[i] < 0) {
            numArr[i] = "Dojo";
        }
     }
     return numArr;
}
console.log(replaceNum([-1,5,4,-2,-9,-12]));