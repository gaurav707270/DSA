// Print the Fibonacci series

// let num = 10

// let a = 0;
// let b = 1

// for(let i = 1; i <= num ; i++){

//     let sum = a+b

//     a = b
//     b = sum

//     console.log(a)
// }


// Find the factorial of a number

// let num = 10

// let result = 1

// for(let i = 1; i <= num ; i++){
//     result = result *i

// }

// console.log(result)


// 9. Count vowels in a string

// let str = "gaurav"

// let count = null

// for(let i = 0 ; i < str.length; i++){
//     if(str[i]  == "a"||str[i]  == "e"||str[i]  == "i"||str[i]  == "o"||str[i]  == "u"){
//         count += 1
//     }
// }

// console.log(count)


// Remove duplicates from an array

// let arr = [12,45,12,45,4,465,1465,15,4]

// let result = []

// let duplicate = []

// for(let i = 0;i < arr.length;i++){
//     let isDuplicate = false

//     for(let j = 0; j < result.length; j++){
//         if(arr[i] == result[j]){
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

// let str = "gauravaavsg"

// let result = ""

// let copy = []

// for(let i = 0; i < str.length; i++){
//     let isDuplicate = false

//     for(let j = 0; j < result.length;j++){
//         if(str[i] == result[j]){
//             isDuplicate = true

//             copy.push(str[i])

//             break
//         }
//     }

//     if(!isDuplicate){
//         result += str[i]
//     }
// }

// console.log(result)
// console.log(copy)


// Find the missing number in an array

// let num = [1,3,4,5,6,7]

// let n = num.length +1

// let total = null
// let sum = null

// for(let i = 0; i <= n;i++){
//     total += i
// }

// for(let i = 0 ; i < num.length; i++ ){
//     sum += num[i]
// }

// console.log(total)
// console.log(sum)


// Find two numbers whose sum equals a target (Two Sum)


// let arr = [12,45,8,45,11245,]

// let target = 90

// let result = []

// for(let i = 0 ; i < arr.length ; i++){
//     for(let j = i+1; j < arr.length;j++){
//         if(arr[i] + arr[j] == target){
//             result.push(i, j)
//             break
//         }
//     }
// }

// console.log(result)

// Move all zeros to the end

// let arr = [12,4,5,1,51,0,0,1,0,140,0]

// for(let i = 0;i< arr.length;i++){
//     for(let j = i+1; j< arr.length;j++){
//         if(arr[i] <= arr[j]){
//             let temp =arr[i]

//             arr[i] = arr[j]

//             arr[j] = temp
//         }
//     }
// }4

// console.log(arr)

