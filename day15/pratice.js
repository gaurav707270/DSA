// Write JavaScript code to reverse:

// let str = "gaurav"

// let newStr = ""

// for (let i = str.length - 1; i >= 0; i--) {
//     newStr += str[i]
// }

// console.log(newStr)


// Find Duplicate Elements

// let arr = [1, 2, 3, 2, 4, 1, 5]

// let newArr = []

// for (let i = 0; i < arr.length; i++) {
//     let isDuplicate = false



//     for (let j = i + 1; j < arr.length; j++) {
//         if (arr[i] == arr[j]) {
//             isDuplicate = true
//             break
//         }
//     }

//     if (isDuplicate) {
//         newArr.push(arr[i])
//     }
// }

// console.log(newArr)


// let arr = [1, 2, 3, 2, 4, 1, 5]

// let newStr = []

// for (let i = 0; i <arr.length;i++){
//     let isDuplicate = false


//     for (let j = 0; j < newStr.length; j++ ){
//         if (arr[i] == newStr[j]){
//             isDuplicate = true
//             break
//         }
//     }

//     if(!isDuplicate){
//         newStr.push(arr[i])
//     }
// }

// console.log(newStr)

// let arr = [1, 2, 3, 2, 4, 1, 5]

// let newStr = []

// for (let i = 0; i < arr.length; i++) {
//     let isDuplicate = false

//     for (let j = i + 1; j < arr.length; j++) {
//         if (arr[i] == arr[j]) {
//             isDuplicate = true
//             break
//         }
//     }

//     if (isDuplicate) {
//         newStr.push(arr[i])
//     }
// }

// console.log(newStr)

// Find Missing Number

// let arr = [1, 2, 3, 5, 6]

// let n = arr.length + 1

// let total = 0

// let sum = 0

// for (let i = 1; i <= n; i++) {
//     total += i
// }

// for (let i = 0; i < arr.length; i++) {
//     sum += arr[i]
// }

// let missing = total -sum


// console.log(missing)


// let str = "hello";

// let newStr = ""

// let result = {}

// for (let i = 0; i < str.length; i++) {
//     newStr = str[i]

//     if (result[newStr]) {
//         result[newStr]++
//     }

//     else {
//         result[newStr] = 1
//     }

// }

// console.log(result)




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



// Check whether a string is a palindrome.

// let str = "mam"
// let newStr = ""

// for (let i = str.length - 1; i >= 0; i--) {
//     newStr += str[i]


// }


//     if (str === newStr) {
//         console.log(true)
//     }
//     else {
//         console.log(false)
//     }


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


let l1 = [9,9,9,9,9,9,9]

let l2 = [9,9,9,9]

let finalResult = []

let newL1 = ""
let newL2 = ""

for (let i = l1.length - 1; i >= 0; i--) {
    console.log(l1[i])

    newL1 += l1[i]
}

for (let i = l2.length - 1; i >= 0; i--) {
    console.log(l2[i])

    newL2 += l2[i]
}

console.log(newL1)
console.log(newL2)

let result = Number(newL1) + Number(newL2)

console.log(result)

if (result === 0) {
    finalResult.push(0)
}
else {
    while (result > 0) {

        let digit = result % 10

        finalResult.push(digit)

        result = Math.floor(result / 10)
    }
}

console.log(finalResult)
