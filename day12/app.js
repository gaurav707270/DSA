// const users = [
//     {
//         id: 101,
//         name: "Gaurav",
//         age: 23,
//         city: "Surat",
//         salary: 35000,
//         role: "Developer"
//     },
//     {
//         id: 102,
//         name: "Rahul",
//         age: 28,
//         city: "Ahmedabad",
//         salary: 45000,
//         role: "Manager"
//     },
//     {
//         id: 103,
//         name: "Amit",
//         age: 21,
//         city: "Mumbai",
//         salary: 30000,
//         role: "Developer"
//     },
//     {
//         id: 104,
//         name: "Priya",
//         age: 25,
//         city: "Pune",
//         salary: 40000,
//         role: "Designer"
//     },
//     {
//         id: 105,
//         name: "Neha",
//         age: 30,
//         city: "Vadodara",
//         salary: 50000,
//         role: "Manager"
//     }
// ];


// const allKey = []
// const allValue = []


// users.forEach((user) => {


//     const key = Object.keys(user);

//     const value = Object.values(user)


//     allKey.push(...key)
//     allValue.push(...value)


// })


// console.log(allKey)
// console.log(allValue)


// const arr = [12, 54, 654, 25, 54, 5, 44, 55]
// arr.splice(2, 0, 101)

// console.log(arr)

// let arr = [11, 22, 11, 22, 55, 33, 55, 33]

// const result = arr.filter((item, index) => {
//     return arr.indexOf(item) == index
// })

// console.log(result)

// let arr = {
//     name: "gaurav kharate",
//     city: "surat",
//     age: 12
// }

// const key = []
// const value = []
// key.push(Object.keys(arr))
// value.push(Object.values(arr))

// console.log(...key,...value)

let str = "mam"

// for(let i of str){
//     console.log(i)
// }

// let newStr = ""

// for (let i = str.length - 1; i >= 0; i--) {
//     newStr += str[i]
// }

// if (str === newStr){
//     console.log(" is palidrom")
// }
// else{
//     console.log("is not palidrom")
// }

let arr = [124, 454, 2454, 41141, 5141, 51, 14]

// let start = arr[0]

// for (let i = 0; i < arr.length; i++) {
//     if (arr[i] <= start) {
//         start = arr[i]
//     }
// }

// console.log(start)

// const newArr = arr[0]

// for (let i = 0; i < arr.length; i++) {
//     if (arr[i] >= newArr) {
//         newArr.push(arr[i])
//     }
// }

// console.log(newArr)


const result = arr.sort((a,b) => a-b)

console.log(result[1])