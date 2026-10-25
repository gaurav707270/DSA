// 1. Print Fibonacci series

// let num = 10
//  let a = 0
//  let b = 1



//  for(let i = 1; i<= num; i++){
//     let sum = a+b

//     a = b
//     b = sum

//     console.log(a)
//  }



// 2. Find factorial of a number

// let n = 5

// let result = 1

// for(let i = result; i <= n; i++){
//     result = result * i
// }

// console.log(result)



// Check if a number is prime

// let n = 14

// if(n % 2 ==0){
//     console.log(true)
// }
// else{
//     console.log(false)
// }


// Check palindrome number

// let num = 121

// let copy = num

// let result = ""

// while (copy > 0) {
//     let digit = copy % 10

//     result += digit

//     copy = Math.floor(copy / 10)
// }

// if (num.toString() == result.toString()){
//     console.log("is palidrom")
// }
// else{
//     console.log("is not palidrom")
// }


// Check Armstrong number

// let num = 153

// let copy = num

// let result = null

// while(copy > 0){
//     let digit = copy % 10

//     result = result + (digit*digit*digit)

//     copy = Math.floor(copy /10)
// }


// if ( num == result ){
//     console.log("is amstrong")
// }
// else{
//     console.log("is not amstrong")
// }


// let num = 1254

// let copy = num

// let result = ""

// while(copy > 0){
//     let digit = copy % 10

//     result += digit

//     copy = Math.floor(copy /10)
// }

// console.log(num)
// console.log(result)


// Find sum of array elements


// let arr = [12,4,5,254,52,5]

// let sum = null

// for(let i = 0; i <arr.length; i++){
//     sum += arr[i]
// }

// console.log(sum)

// Find largest and smallest element

// let arr = [12,4,5,254,52,5]

// for(let i = 0; i < arr.length; i++){
//     for(let j = i+1; j < arr.length; j++){
//         if(arr[i] >= arr[j]){
//             let temp = arr[i]

//             arr[i] = arr[j]
//             arr[j] = temp
//         }
//     }
// }

// console.log(arr[1])


// Count frequency of elements

// let str = "gaurav"

// let newStr = ""

// let result = {}

// for(let i = 0; i < str.length; i++){
//     newStr = str[i]

//     if(result[newStr]){
//         result[newStr]++
//     }
//     else{
//         result[newStr] = 1
//     }
// }

// console.log(result)


// Remove duplicates from an array

// let arr = [12,4,5,254,52,5,4]
// let result = []
// let duplicate = []

// for(let i = 0; i < arr.length; i++){
//     let isDuplicate = false


//     for (let j = 0 ; j < result.length;j++){
//         if (arr[i] == arr[j]){

//             duplicate.push(arr[i])
//             isDuplicate = true
//             break
//         }
//     }

//     if(!isDuplicate){
//         result.push(arr[i])
//     }
// }

// console.log(result)
// console.log(duplicate)


