//JS Day 3 Task

//1. Print odd numbers in an array.

// let velo = [1, 2, 3, 4, 5, 6, 7, 8];

// function odd(velo) {
//     for (let i = 0; i < velo.length; i++) {
//         if (velo[i] % 2 !== 0) {
//             console.log(velo[i]);
//         }
//     }
// }

// // arrow function for finding odd number.

// const odds = (velo) => {
//     for (let i = 0; i < velo.length; i++) {
//         if (velo[i] % 2 !== 0) {
//             console.log(velo[i]);
//         }
//     }
// }

// odds(velo);

// 2. Convert all the strings to title caps in a string array.

// function toTitleCase(str) {
//     return str.toLowerCase().split(' ').map(function (word) {
//         return (word.charAt(0).toUpperCase() + word.slice(1));
//     }).join(' ')
// }

// console.log(toTitleCase('we are rebels'));

// arrow function for to title caps in a string array.

// const toTitleCase = (str) => {
//     return str.toLowerCase().split(' ').map(function (word) {
//         return (word.charAt(0).toUpperCase() + word.slice(1));
//     }).join(' ')
// }

// console.log(toTitleCase('we are rebels'));





// 3. Sum of all numbers in an array.

// let total = 0;
// function add(velo) {
//     for (let i = 0; i < velo.length; i++) {
//         total += velo[i];
//     }
//     console.log(total);
// }
// add(velo);

// arrow function for finding sum of the array.

// let total = 0;
// const add = (velo) => {
//     for (let i = 0; i < velo.length; i++) {
//         total += velo[i];
//     }
//     console.log(total);
// }
// add(velo);

// 4. Return all the prime numbers in an array.

// var num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// function isPrime(num) {

//     if (num < 2) {
//         return `${num} is not a prime number`;
//     }

//     for (let i = 2; i < num.length; i++) {
//         if (num[i] % i == 0) {
//             return `${num} is not a prime number`;
//         }
// //         return `${num} is a prime number`
// //     }
// // }

// var numArray = [2, 3, 4, 5, 6, 7, 8, 9, 10]

// function isPrime(num) {
//     for (let i = 2; num > i; i++) {
//       if (num % i === 0) {
//         return false;
//       }
//     }
//     return num > 1;
//   }
  
// console.log(numArray.filter(isPrime))
  

// // arrow function for finding the prime numbers in an array.

// numArray = numArray.filter((number) => {
//     for (var i = 2; i <= Math.sqrt(number); i++) {
//       if (number % i === 0) return false;
//     }
//     return true;
//   });
  
// console.log(numArray);


// 5. Return all the palindromes in an array

// function palindrome(str){
//     let reversed = str.split("").reverse().join("");
//     if (reversed === str) {
//         return true;
//     } else
//         return false;
// }

// console.log(palindrome("malayalam"));

// arrow function for finding palindrome in an Array.

// const palindrome = (str) => {
//     let reversed = str.split("").reverse().join("");
//     if (reversed === str) {
//         return true;
//     } else
//         return false;
// }

// console.log(palindrome("malayalam"));

// 6. Return median of two sorted arrays of the same size.

// function findMedianSortedArrays(nums1, nums2) {
//     const merged = (nums1, nums2);
//     const middle = Math.floor(merged.length / 2);

//     if (merged.length % 2 === 0) {
//       return (merged[middle - 1] + merged[middle]) / 2;
//     } else {
//       return merged[middle];
//     }
//   }

// const nums1 = [1, 2, 4, 5, 6];
// const nums2 = [4, 35, 654, 355, 43, 32];

// findMedianSortedArrays(nums1, nums2);

// const num = [3, 4, 1, 2, 9, 5, 6, 10];

// function findMedian(num) {
//     num.sort((a, b) => a - b);

//     const middle = Math.floor(num.length / 2);

//     return num.length % 2 === 0
//         ? (num[middle - 1] + num[middle]) / 2
//         : num[middle];

// }

// 7. Remove duplicates from an array

// const array = [1, 2, 3, 4, 5, 2, 7, 8, 9];

// function removeDuplicates(array) {
//     return [...new Set(array)];
// }

// console.log(removeDuplicates(array));

// 8.Rotate an array by k times.

// const sting = [1, 2, 3, 4, 5, 6];

// const numsRotation = 4;

// function rotLeft(arr, rotation) {
//     const rotatedArray = arr.concat();
//     for (let i = 0; i < rotation; i++) {
//         const firstItem = rotatedArray.shift();
//         rotatedArray.push(firstItem);
//     }
//     return rotatedArray;
// }
// console.log(rotLeft(sting, numsRotation));


