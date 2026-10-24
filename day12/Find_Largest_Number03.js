// Find Largest Number  

let arr = [554, 415454, 1521, 21, 21121, 152152, 1521, 25]

// let newArr = arr.sort((a, b) => a - b)

// console.log(newArr.splice(-1))

let newArr = arr[0]

for (let i = 0; i <= arr.length - 1; i++) {

    if (arr[i] >= newArr) {
        newArr = arr[i]
    }


}

console.log(newArr)
