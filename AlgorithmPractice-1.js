for(var i = 1; i < 20; i+=2){
    console.log(i)
}

// 1,3,5,7,9,11,13,15,17,19


var sum = 0;
var arr = [1,2,3,4,5]
for(var i = 0; i < arr.length; i++){
    sum += arr[i];
    console.log("Num: " + arr[i] + ", Sum" + sum);
}

// Num: 1, Sum1
// Num: 2, Sum3
// Num: 3, Sum6
// Num: 4, Sum10
// Num: 5, Sum15