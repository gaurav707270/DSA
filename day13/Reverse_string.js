// Reverse a string

// let str = "gaurav"

// let newStr = []

// for (let i = str.length-1; i >=0 ; i--) {
//     newStr.push(str[i])
// }



//     console.log(newStr.toString())


// let str = "gaurav"

// let newStr = str.split("").reverse()

// str = newStr.join()

// console.log(...newStr)


// Check palindrome

// let str = "121"



// let newStr = str.split("").reverse()

// if (str.split("") == newStr.toString()) {
//     console.log("this is palidrom")
// }
// else {
//     console.log("this is not palidrom ")
// }
// console.log(newStr.toString())
// console.log(str.split("").toString())


// let str = "121"

// let newStr = ""

// for (let i = str.length - 1; i >= 0; i--) {
//     newStr += str[i]

// }

// console.log(newStr)

// if (str == newStr) {
//     console.log("this is palidrom")
// }
// else {
//     console.log("this is not a palidrom")
// }


// let arr = ["m", 1, "m"]

// let newArr = []

// for (let i = arr.length - 1; i >= 0; i--) {
//     newArr.push(arr[i])
// }

// if (arr.toString() == newArr.toString()) {
//     console.log(true)
// }
// else {
//     console.log(false)
// }
// console.log(newArr.toString())



//Find largest/smallest number


// let arr = [45,1,4,2415,101,4,2,5,2,5,54]

// let largest = arr[0] 
// let smallest = arr[0] 

// for(let i = 0; i < arr.length; i++){
//     if ( largest <= arr[i]){
//         largest = arr[i]
//     }


//     if ( smallest >= arr[i]){
//         smallest = arr[i]
//     }
// }

// console.log(largest)
// console.log(smallest)


// Find second largest

// let arr = [45, 1, 4, 2415, 101, 4, 2, 5, 2, 5, 54]

// let newArr = arr.sort((a,b) => b-a)

// console.log(newArr[1])


// let arr = [45, 1, 4, 2415, 101, 4, 2, 5, 2, 5, 54]



// arr = arr.sort((a,b) => a-b).reverse()


// console.log(arr[1])


// Remove duplicates

// let str = "mam"

// let NewStr = ""


// for (let i = 0; i < str.length; i++) {

//     let isDuplicate = false;


//     for (let j = 0; j < NewStr.length; j++) {
//         if (str[i] == NewStr[j]) {
//             isDuplicate = true
//             break
//         }
//     }

//     if (!isDuplicate) {
//         NewStr += str[i]

//     }
// }

// console.log(NewStr)


// let arr = [11,22,11,22,33,44,33,44]

// let result = []

// for ( let i = 0; i< arr.length;i++){
//     let isDuplicate = false

//     for ( let j = 0;j <result.length;j++){
//         if ( arr[i] == result[j]){
//             isDuplicate = true
//             break
//         }
//     }

//     if(!isDuplicate){
//         result.push(arr[i])
//     }
// }

// console.log(result)

// Count character frequency

// let str = "programing"

// let frequency = {}

// for (let i = 0;i< str.length;i++){

//     let char = str[i]

//     if (frequency[char]){
//         frequency[char]++
//     }
//     else{
//         frequency[char] = 1
//     }
// }

// console.log(frequency)


// Count vowels

// let str = "aaa iii dendn ooo";

// let count = 0

// for ( let i = 0 ; i<str.length;i++){
//     if (str[i]  == "a" || str[i] == "e" || str[i] == "i"||str[i] =="o"||str[i] =="u"){
//         count++
//     }
// }

// console.log(count)




// let num = 5

// let factorial = 1

// for (let i = 1;i<= num;i++){
//     factorial = factorial * i
//     console.log(i)
// }

// console.log(factorial)



// Fibonacci series

// let num = 10;

// let a = 0

// let b = 1


// for (let i = 0; i <= num; i++) {

//     let result = a + b

//     a = b
//     b = result

// console.log(result)

// }


// Prime number

// let num = 10
// let prime = []

// for (let i = 0; i < num; i++) {
//     if (i % 2 == 0) {
//         prime.push(i)
//     }
// }

// console.log(prime)


// Check Armstrong number

// let num = 124

// let origal = num

// let sum = 0

// while (num > 0) {
//     let digit = num % 10

//     sum = sum + (digit * digit * digit)

//      num = Math.floor(num / 10);

//     console.log(sum)   
// }

// if (sum == origal){
//     console.log("this is amrstrong")
// }
// else{
//     console.log("this is not armstrong")
// }

// let num = 153

// let origal = num

// let sum = 0

// while (num > 0) {
//     let digit = num % 10

//     sum = sum + (digit * digit * digit)

//     num = Math.floor(num / 10)

// }

// if (origal == sum) {
//      console.log("this is amrstrong")
// }
// else {
//    console.log("this is not armstrong")
// }

// Sum of array

// let arr = [12,54,5,5,25,4,5,5,5]

// let sum = 0

// for (let i of arr){
//     sum += i
// }

// console.log(sum)