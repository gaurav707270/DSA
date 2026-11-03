// Find the largest number in an array.
// Find the smallest number in an array.


// let arr = [45,1,15,5,45,15415,4,154]

// let largest = arr[0]
// let smallest = arr[0]

// for(let i = 0; i < arr.length; i++){
//     if(arr[i] > largest){
//         largest = arr[i]
//     }

//     if(arr[i] < smallest ){
//         smallest = arr[i]
//     }

// }

// console.log(largest)
// console.log(smallest)


// Reverse a string.
// Check whether a string is a palindrome.

// let str = "gaurav"
// let copy = ""

// for(let i = str.length -1; i >=0; i--){
//     copy += str[i]
// }

// console.log(str)
// console.log(copy)



// Find even and odd numbers.


// let arr = [1,245,41,45,14,,45,19 ,24]

// let even = arr.filter((i) => i % 2 ==  0)
// let old = arr.filter((i) => i % 2 !==  0)

// console.log(even)
// console.log(old)


// Find the factorial of a number.

// let num = 5

// let result = 1

// for(let i = result; i <= num; i++){
//     result *= i
// }

// console.log(result)


// Print the Fibonacci series.

// let num = 10

// let a = 0
// let b = 1

// for(let i = 1 ; i <= num; i++){
//     let sum = a+b

//     a = b
//     b = sum

//     console.log(a)
// }


// Find the sum of array elements.

// let arr = [45,1,4,15,454,14]

// let sum = null

// for(let i = 0; i< arr.length;i++){
//     sum += arr[i]
// }

// console.log(sum)


// Remove duplicate elements from an array.

// let arr = [45,1,4,15,454,14,45,14,4]
// let result = []

// let dupalicate = []

// for(let i = 0; i < arr.length;i++){
//     let isDuplicate = false

//     for(let j = 0; j < result.length ;j++){
//         if(arr[i] == result[j]){
//             dupalicate.push(arr[i])

//             isDuplicate = true
//             break
//         }
//     }

//     if(!isDuplicate){
//         result.push(arr[i])
//     }
// }


// console.log(result)
// console.log(dupalicate)



// Count the frequency of each element.

// let str = "gauravvvgg"

// let result = {}

// for(let i = 0; i < str.length; i++){
//     let char = str[i]

//     if(result[char]){
//         result[char]++
//     }
//     else{
//         result[char] = 1
//     }
// }

// console.log(result)


// Find missing numbers in an array.


// let arr = [1,2,3,4,6,7]

// let n = arr.length +1

// let total = null
// let sum = null

// for(let i = 0; i <= n; i++){
//     total += i
// }

// for(let i = 0; i < arr.length ;i++){
//     sum += arr[i]
// }

// console.log(sum)
// console.log(total)