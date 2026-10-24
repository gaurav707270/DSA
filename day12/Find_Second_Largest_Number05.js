// Find Second Largest Number

const arr = [45, 125, 5, 14, 51, 4565, 6, 44, 87, 45, 49, 897]

const findSecondLargest = () => {


    const secondLargest = arr.sort((a, b) => a - b)

    console.log(secondLargest[1])
}

findSecondLargest(arr)