// revercr string


// let str = "gaurav"
// let newStr = ""

// for (let i = str.length-1;i>=0;i--){
//     newStr += str[i]
// }

// console.log(newStr)

// Check palindrome

// let str = "mam"

// let newStr = ""

// for (let i = str.length - 1; i >= 0; i--) {
//     newStr += str[i]
// }

// if( str === newStr){
//     console.log(true)
// }
// else{
//     console.log(false)
// }


// let arr = [100, 2, 100]

// let newStr = []

// for (let i = arr.length - 1; i >= 0; i--) {
//     newStr.push(arr[i])
// }

// if (arr.toString() === newStr.toString()) {
//     console.log(true)
// }
// else {
//     console.log(false)
// }

// // console.log(newStr)


// let arr = [1, 2, 1]

// let newArr = []


// Find factorial 

// let num = 5

// let factorial = 1

// for (let i = 1;i<= num; i++){

//     factorial = factorial * i

//     console.log(i)
// }

// console.log(factorial)

// Fibonacci series

// let num = 10

// let a = 0
// let b = 1

// let result = 0

// for (let i = 1; i <= num; i++) {
//      result = a + b

//     a = b

//     b = result


//     console.log(result)
// }

//     console.log(result)



// let num = 10

// for (let i = 0;i <= 10;i++){
//     if( i % 2 == 0){
//         console.log(i)
//     }
// }


// Check Armstrong number

// let num = 153

// let origal = num

// let sum = 0

// while (num > 0) {
//     let digit = num % 10

//     sum = sum + (digit * digit * digit)

//     num = Math.floor(num / 10)

// }

// console.log(sum)

// if ( origal == sum ){
//     console.log(true)
// }

// else{
//     console.log(false)
// }


// Find largest/smallest number

// let arr = [1, 24, 54, 1, 546, 44, 65, 14, 654, 446, 46]

// let smallest = arr[0]
// let gratest = arr[0]

// for (let i = 0; i < arr.length; i++) {
//     if (gratest < arr[i]) {
//         gratest = arr[i]
//     }

//     if (smallest > arr[i]) {
//         smallest = arr[i]
//     }
// }

// console.log(gratest)
// console.log(smallest)


// Find second largest number

// let arr = [1, 24, 54, 546, 44, 65, 14, 654, 446, 46]

// arr.sort((a,b) => a-b)

// console.log(arr[1])


// Find missing number

// let arr = [1,2,3,5,6]

// let n = arr.length +1

// let total = n * (n+1) /2

// let sum = 0

// console.log(total)
// console.log(n)

// for (let i = 0; i< arr.length; i++){
//     sum = sum + arr[i]
// }

// let missing = total - sum

// console.log(missing)

// Count character frequency

// let str = "programing"

// let newStr = ""

// let count = {}

// for (let i = 0; i < str.length; i++) {

//     newStr = str[i]

//     if (count[newStr]) {
//         count[newStr] ++
//     }
//     else {
//         count[newStr] = 1
//     }

// }

// console.log(count)



// Count vowels     

// let str = "programing"

// let count = 0

// for (let i = 0; i < str.length; i++) {
//     if (str[i] == "a" || str[i] == "e" || str[i] == "i" || str[i] == "o" || str[i] == "o") {
//         count++
//     }
// }

// console.log(count)

// Remove duplicates


// let str = "gaurav"

// let result = ""

// for (let i = 0; i < str.length; i++) {
//     let isDuplicate = false



//     for (let j = 0; j < result.length; j++) {
//         if (str[i] == result[j]) {
//             isDuplicate = true
//             break
//         }
//     }

//     if (!isDuplicate) {
//         result += str[i]
//     }
// }

// console.log(result)


// let str = "gaurav"

// let result = ""

// for (let i = 0; i< str.length;i++){
//     // console.log(str[i])

//     let isDuplicate = false

//     for (let j = 0; j < result.length; j++){
//         if ( str[i] == result[j]){

//             isDuplicate = true
//             break
//         }
//     }

//     if (!isDuplicate){
//         result += str[i]
//     }
// }

// console.log(result)

// Find duplicate elements

let str = "gaurav"

let result = ""

for (let i = 0;i <str.length;i++){
    let isDuplicate = false

    for (let j = 0; j < result.length;j++){
       if ( str[i] == result[j]){
         isDuplicate = true
        break
       }
    }

    if (isDuplicate){
        result += str[i]
    }
}

console.log(result)