// 1. Given an array, write a function that changes all positive numbers in the array to the string "big".  Example: makeItBig([-1,3,5,-5]) returns that same array, changed to [-1, "big", "big", -5].
function makeItBig(numArr){
    for(var i = 0; i < numArr.length; i++) {
    if(numArr[i] > 0) {
        numArr[i] = "big";
    }
    }
    return numArr;
}
console.log(makeItBig([1,-5,-10,-6,8]));


// 2. Create a function that takes in an array of numbers.  The function should print the lowest value in the array, and return the highest value in the array.
function lowAndHigh(numArr){
    var min = numArr[0];
    var max = numArr[0];
    for(var i = 1; i < numArr.length; i++){
        if(numArr[i] < min){
            min = numArr[i];
        } else if(numArr[i] > max){
            max = numArr[i];
        }
    }
    console.log(min);
    return max;
}
console.log(lowAndHigh([5,-1,2,9,7]));

// 3. Build a function that takes in an array of numbers.  The function should print the second-to-last value in the array, and return the first odd value in the array.
function printReturn(numArr){
    console.log(numArr[numArr.length-2]);

    for(var i = 0; i < numArr.length; i++){
        if(numArr[i] % 2 != 0) {
            return numArr[i];
        }
    }
}
console.log(printReturn([12,100,9,25,18,97,23,75,334,143]));


// 4. Given an array (similar to saying 'takes in an array'), create a function that returns a new array where each value in the original array has been doubled.  Calling double([1,2,3]) should return [2,4,6] without changing the original array.
function double(numArr){
    var dubArr = [];

    for(var i = 0; i < numArr.length; i++) {
        dubArr.push(numArr[i] * 2);
    }
    return dubArr;
}
console.log(double([1,5,10]));

// 5. Given an array of numbers, create a function to replace the last value with the number of positive values found in the array.  Example, countPositives([-1,1,1,1]) changes the original array to [-1,1,1,3] and returns it.
function countPositives(numArr){
    var posCount = 0;
    for(var i = 0; i < numArr.length; i++){
        if(numArr[i] > 0) {
            posCount++;
        }
    }
    numArr[numArr.length-1] = posCount;

    return numArr;
}
console.log(countPositives([-1,1,1,1,1]));

// 6. Create a function that accepts an array.  Every time that array has three odd values in a row, print "That's odd!".  Every time the array has three evens in a row, print "Even more so!".
function evenOdd(numArr){
    var consecEven = 0;
    var consecOdd = 0;

    for(var i = 0; i <numArr.length; i++) {
        if(numArr[i] % 2 == 0) {
            consecEven++;
            consecOdd = 0;
        } else {
            consecOdd++;
            consecEven = 0;
        }

        if(consecOdd == 3) {
            console.log("That's odd!");
            consecOdd = 0;
        } else if(consecEven == 3) {
            console.log("Even more so");
            consecEven = 0;
        }
    }
}
evenOdd([1,9,4,5,7,3,8,4,6,2,9,1,2,7,6]);


// 7. Given an array of numbers arr, add 1 to every other element, specifically those whose index is odd (arr[1], arr[3], arr[5], etc).  Afterward, console.log each array value and return arr.
function seconds(numArr){
    for(var i = 0; i < numArr.length; i++){
        if(i % 2 != 0){
            numArr[i]++;
        }
        console.log(numArr[i]);
    }

    return numArr;
}
console.log(seconds([2,4,6,8,10]));


// 8. You are passed an array (similar to saying 'takes in an array' or 'given an array') containing strings.  Working within that same array, replace each string with a number - the length of the string at the previous array index - and return the array.  For example, previousLengths(["hello", "dojo", "awesome"]) should return ["hello", 5, 4]. Hint: Can for loops only go forward?
function previousLengths(stringArr){
    for(var i = stringArr.length-1; i > 0; i--){
        stringArr[i] = stringArr[i-1].length;
    }
    return stringArr
}
console.log(previousLengths(["hello", "dojo", "awesome", "sauce"]));


// 9. Build a function that accepts an array. Return a new array with all the values of the original, but add 7 to each. Do not alter the original array.  Example, addSeven([1,2,3]) should return [8,9,10] in a new array.
function addSeven(numArr){
    var newArr = [];
    for(i = 0; i < numArr.length; i ++){
        newArr.push(numArr[i]+7)
    }
    return newArr;
}
console.log(addSeven([1,2,3]));

// REMEMBER THIS ONE!!!!!!!
// 10. Given an array, write a function that reverses its values, in-place.  Example: reverse([3,1,6,4,2]) returns the same array, but now contains values reversed like so... [2,4,6,1,3].  Do this without creating an empty temporary array.  (Hint: you'll need to swap values).
function reverse(arr) {
    for(var i =0; i < arr.length/2; i++) {
        var temp = arr[i];
        arr[i] = arr[arr.length-1-i];
        arr[arr.length-1-i] = temp;
    }

    return arr;
}
console.log(reverse([3,1,6,4,2]));


// 11. Given an array, create and return a new one containing all the values of the original array, but make them all negative (not simply multiplied by -1). Given [1,-3,5], return [-1,-3,-5].
function negative(numArr){
    var newArr = [];
    for(var i = 0; i < numArr.length; i++){
        if(numArr[i] > 0){
            newArr.push(numArr[i]*1);
        } else {
            newArr.push(numArr[i]);
        }
    }
    return newArr;
}
console.log(negative([-10, 4, 18, -9, -2]));


//12. Create a function that accepts an array, and prints "yummy" each time one of the values is equal to "food".  If no array values are "food", then print "I'm hungry" once.
function hungry(stringArr){
    var foodFound = false;

    for(var i = 0; i < stringArr.length; i++) {
        if(stringArr[i] == "food"){
            console.log("Yummy");
            foodFound = true;
        }
    }
    if(!foodFound){
        console.log("I'm hungry.");
    }
}
hungry(["food", "hello", "food", "elephant", "food"])


// 13. Given an array, swap the first and last values, third and third-to-last values, etc.  Example: swapTowardCenter([true,42,"Ada",2,"pizza"]) turns the array into ["pizza", 42, "Ada", 2, true].  swapTowardCenter([1,2,3,4,5,6]) turns the array into [6,2,4,3,5,1].  No need to return the array this time.
function swapTowardCenter(arr) {
    for(var i = 0; i < arr.length/2; i+=2) {
        var temp = arr[i];
        arr[i] = arr[arr.length-1-i];
        arr[arr.length-i-1] = temp;
    }
}
var test = [1,2,3,4,5,6,7];
swapTowardCenter(test);
console.log(test);

//14. Given an array arr and a number num, multiply all values in the array arr by the number num, and return the changed array arr.  For example, scaleArray([1,2,3], 3) should return [3,6,9].
function scaleArr(numArr, num) {
    for(var i = 0; i < numArr.length; i++){
        numArr[i] *= num;

    }

    return numArr;
}
console.log(scaleArr([1,2,3], 5));