// Reverse a string

// let str = "gaurav"
// let newStr = ""

// for(let i = str.length-1; i >=0; i--){
//     newStr += str[i]
// }

// console.log(newStr)


// let str = "mam";
// let copy = ""

// for(let i = str.length-1; i >= 0; i--){
//     copy += str[i]
// }

// if ( str == copy){
//     console.log("palidrom")
// }
// else{
//         console.log("is not palidrom")

// }


// let arr = [11,22,11]

// let copy = []

// let isPalidrom = false

// for(let i = arr.length-1; i >= 0; i--){
//     copy.push(arr[i])
// }

// for(let i = 0 ; i < arr.length;i++){
//     if(arr.toString() == copy.toString()){
//         isPalidrom = true
//     }


// }


// console.log(isPalidrom)


// Find the largest number in an array

// let arr = [11,2,22,55,44,6665]

// let largest = arr[0]
// let smallest = arr[0]

// for(let i = 0; i <arr.length;i++){
//     if( largest <= arr[i]){
//         largest = arr[i]
//     }

//     if( smallest >= arr[i]){
//         smallest = arr[i]
//     }
// }

// console.log(largest)
// console.log(smallest)


// Find the second-largest number

// let arr = [11,255,24,5252,55,24,5,25,55]

// for(let i = 0;i< arr.length;i++){
//     for(let j = i+1; j < arr.length; j++){
//         if( arr[i] >= arr[j]){
//             let temp = arr[i]

//             arr[i]=arr[j]
//             arr[j] = temp
//         }
//     }
// }

// console.log(arr[1])


// let arr = [1,2,3,4,6,7]

// let n = arr.length +1

// let total = null

// let sum = null

// for(let i = 0 ; i <= n; i++){
//     total += i
// }

// for(let i = 0; i <  arr.length; i++){
//     sum += arr[i]
// }

// let miss = total - sum

// console.log(miss)


// Remove duplicates from a sorted array


// let arr = [112,525,5,222,21125,25,25,2,5,2,5];

// let newArr = []

// for(let i = 0; i < arr.length;i++){
//     let isDuplicate = false

//     for(let j = i+1; j < arr.length;j++){
//         if(arr[i] == arr[j]){
//             isDuplicate = true
//             break
//         }
//     }

//     if(!isDuplicate){
//         newArr.push(arr[i])
//     }
// }

// console.log(newArr)


// Move all zeros to the end

// let arr = [112,52,0,5,0,54,4,0]

// for(let i = 0; i <arr.length; i++){
//     for(let j = i+1;j<arr.length;j++){
//         if (0 <= arr[j]){
//             let temp = 0

//             arr[i] = arr[j]
//             arr[j] = temp

//         }
//     }
// }

// console.log(arr)



// Count the frequency of each character

// let str = "gaurav"

// let char = ""

// let result = {}

// for(let i = 0 ;i < str.length;i++ ){
//     char = str[i]

//     if(result[char]){
//         result[char]++
//     }
//     else{
//         result[char] = 1
//     }
// }

// console.log(result)



// Check whether a number is an Armstrong number

// let num = 153
// let copy = num

// let sum = null

// while (num > 0) {
//     let digit = num % 10

//     sum = sum + (digit * digit * digit)

//     num = Math.floor(num / 10)
// // console.log(num)

// }

// console.log(sum)
// console.log(copy)



// Print the Fibonacci series

// let n = 10;
// let a = 0;
// let b = 1;

// for (let i = 0; i < n; i++) {
//     console.log(a);

//     let c = a + b;
//     a = b;
//     b = c;
// }
