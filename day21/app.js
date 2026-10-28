// Factorial of a number

// let num = 10
// let result = 1

// for(let i = 1; i <= num;i++){
//     result = result * i
// }

// console.log(result)

// Reverse a number

// let num = 1234

// let result = ''

// while(num > 0){
//     let digit = num % 10

//     result += digit

//     num = Math.floor(num/10)
// }

// console.log(result)



// Find the second-largest element


// let num = [12,45,41,115,14,15,1,5]

// for(let i = 0; i < num.length; i++){
//     for(let j = i+1; j < num.length; j++){
//         if(num[i] <= num[j]){
//             let temp = num[i]

//             num[i] = num[j]
//             num[j] = temp
//         }
//     }
// }

// console.log(num[1])

// Two Sum

// let num = [2, 11,7, 15,7]
// let target = 9

// for(let i = 0; i < num.length;i++){
//     for(let j = i+1;j <num.length;j++){
//         if(num[i] + num[j] == target){
//             console.log(i,j)
//             break
//         }
//     }
// }


// Check palindrome string


// let str = "gaurav"
// let result = ""

// for(let i = str.length-1; i >= 0; i--){
//     result += str[i]
// }

// console.log(result)



// Count frequency of each element


// let arr = [ 1,2,32,4,1,1,21,2]

// let result = {}

// for(let i = 0; i < arr.length ; i++){

//     if(result[arr[i]]){
//         result[arr[i]] += 1
//     }

//     else{
//         result[arr[i]] = 1
//     }
// }

// console.log(result)



// Find the missing number

// let arr = [1,2,3,5,6]

// let n = arr.length + 1

// let sum = null;
// let total = null

// for(let i = 0; i <= n;i++){
//     total += i
// }

// for(let i = 0; i < arr.length ; i++){
//     sum += arr[i]
// }

// console.log(sum)
// console.log(total)



// Remove duplicates from an array


// let arr = [ 1,2,32,4,1,1,21,2]

// let result = []

// let duplicate = []

// for(let i = 0; i < arr.length;i++){
//     let isDuplicate = false

//     for(let j = 0; j < result.length; j++){
//         if(arr[i] == arr[j]){
//             isDuplicate = true

//             duplicate.push(arr[i])

//             break
//         }
//     }

//     if(!isDuplicate){
//         result.push(arr[i])
//     }
// }

// console.log(result)
// console.log(duplicate)



// Check Armstrong number

// let num = 153
// let copy = num

// let result = null

// while(copy > 0){
//     let digit = copy % 10

//     result = result + (digit*digit*digit)

//     copy = Math.floor(copy /10)
// }

// if(num.toString() == result.toString()){
//     console.log(true)
// }else{
//     console.log(false)

// }


// Print the Fibonacci series


let num = 10

let a = 0
let b = 1

for(let i = 1; i <= num; i++){
    let sum = a+b

    a = b
    b = sum

    console.log(a)
}