// Find Smallest Number

let arr = [464, 44, 11, 155, 546, 115, 4654,9, 4456];

const findSmallest = (arr) => {
    let Smallest = arr[0]

    for (let i = 0; i < arr.length; i++) {
        if (Smallest >= arr[i]) {
            Smallest = arr[i]
        }
    }

    console.log(Smallest)
}

findSmallest(arr)
