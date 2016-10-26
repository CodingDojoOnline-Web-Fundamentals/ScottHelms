
// Uncomment and test in your editor

// Get 1 to 255
// Write a function that returns an array with all the numbers from 1 to 255. You may use the push() function for this exercise.
// __________________________
function returnArr(){
    var arr = [];
    var i = 1;
    while(i<=255){
        arr.push(i)
        i += 1;
    }
    return arr
}
console.log(returnArr());

// Get even 1000
// Write a function that would get the sum of all the even numbers from 1 to 1000. You may use a modulus operator for this exercise.
// ____________________________
// function getEvenSum(){
//     var sum = 0;
//     for(i=1; i<=1000;i++){
//         if(i % 2 === 0){
//             sum += i;
//         }
//     }
//     return sum;
// };
// console.log(getEvenSum());


// Sum odd 5000
// Write a function that returns the sum of all the odd numbers from 1 to 5000. (e.g. 1+3+5+...+4997+4999)
// ____________________________
// function getOddSum(){
//     var sum = 0;
//     for(var i = 0; i<=5000; i++){
//         if(i % 2 != 0){
//             sum += i;
//         }
//     }
//     return sum;
// }
// console.log(getOddSum());


// Iterate an array
// Write a function that returns the sum of all the values within an array. (e.g. [1,2,5] returns 8, [-5,2,5,12] returns 14)
// ____________________________
// var arr = [-5,2,5,12];
// function sumAllVals(){
//     var sum = 0;
//     for(var i = 0; i < arr.length; i++){
//         sum += arr[i];
//     }
//     return sum;
// }
// console.log(sumAllVals());


// Find max
// Given an array with multiple values, write a function that returns the maximum number in the array. (e.g. for [-3,3,5,7] max is 7)
// ____________________________
// var arr = [-3,3,5,7];
// function getMax(){
//     for(var i=0; i<arr.length; i++){
//         if(arr[i] > i){
//             max = arr[i];
//         }
//     }
//     return max;
// }
// console.log(getMax());


// Find average
// Given an array with multiple values, write a function that returns the average of the values in the array. (e.g. for [1,3,5,7,20] average is 7.2)
// ____________________________
// arr = [1,3,5,7,20];
// function getAvg(){
//     var sum = 0;
//     for(var i=0;i<arr.length;i++){
//         sum += arr[i];
//     }
//     avg = sum / arr.length;
//     return avg;
// };
// console.log(getAvg());

// Array odd
// Write a function that would return an array of all the odd numbers between 1 to 50. (ex. [1,3,5, .... , 47,49]). Hint: Use 'push' method.
// ____________________________
// arr = [];
// function returnOdd(){
//     for(var i = 0; i <=50; i++){
//         if(i % 2 != 0){
//             arr.push(i);
//         }
//     }
//     return arr;
// }
// console.log(returnOdd());


// Greater than Y
// Given value of Y, write a function that takes an array and returns the number of values that are greater than Y. For example if arr = [1, 3, 5, 7] and Y = 3, your function will return 2. (There are two values in the array greater than 3, which are 5, 7).
// ____________________________
// var arr = [-2, 4, 6, 23, 1, 5];
// var Y = 5;
// function getQtyGreater(){
//     var count = 0;
//     for(var i=0; i < arr.length; i++){
//         if(arr[i] > Y){
//             count += 1;
//         };
//     };
//     return count;
// };
// console.log(getQtyGreater())


// Squares
// Given an array with multiple values, write a function that replaces each value in the array with the product of the original value squared by itself. (e.g. [1,5,10,-2] will become [1,25,100,4])
// ____________________________
// var arr = [1,5,10,-2];
// function getSquared(){
//     for(i=0; i<arr.length;i++){
//         arr[i] = arr[i] * arr[i];
//     }
//     return arr;
// }
// console.log(getSquared());


// Negatives
// Given an array with multiple values, write a function that replaces any negative numbers within the array with the value of 0. When the program is done the array should contain no negative values. (e.g. [1,5,10,-2] will become [1,5,10,0])
// ____________________________
// var arr = [-1,5,10,-2];
// function repWithZero(){
//     for(i = 0; i < arr.length; i++){
//         if(arr[i] < 0){
//             arr[i] = 0;
//         }
//     }
//     return arr;
// }
// console.log(repWithZero());


// Max/Min/Avg
// Given an array with multiple values, write a function that returns a new array that only contains the maximum, minimum, and average values of the original array. (e.g. [1,5,10,-2] will return [10,-2,3.5])
// ____________________________
// var arr = [1,-5,10,2];
// function getVals(){
//     var min = arr[0];
//     var max = arr[0];
//     var sum = 0;
//     for(var i=0;i<arr.length;i++){
//         if(arr[i] < min){
//             min = arr[i];
//         }
//         if(arr[i] > max){
//             max = arr[i];
//         }
//         sum += arr[i];
//     }
//     avg = sum / arr.length;
//     var newArr = [min, max, avg];
//     return newArr;
// }
// console.log(getVals());


// Swap values
// Write a function that will swap the first and last values of any given array. The default minimum length of the array is 2. (e.g. [1,5,10,-2] will become [-2,5,10,1]).
// ____________________________
// var arr = [1,5,10,-2];
// function swap(){
//     var temp = arr[0];
//     arr[0] = arr[arr.length - 1];
//     arr[arr.length - 1] = temp;
//     return arr;
// }
// console.log(swap());


// Number to string
// Write a function that takes an array of numbers and replaces any negative values within the array with the string 'Dojo'. For example if array = [-1,-3,2], your function will return ['Dojo','Dojo',2].
// ____________________________
// var arr = [-1,-3,2];
// function updateArr(){
//     for(i=0;i<arr.length;i++){
//         if(arr[i]<0){
//             arr[i] = 'Dojo';
//         }
//     }
//     return arr
// }
// console.log(updateArr());
