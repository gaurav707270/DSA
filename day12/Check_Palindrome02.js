// Check Palindrome

let str1 = "mam"
let str2 = ""

for (let i = str1.length - 1; i >= 0; i--) {
    str2 += str1[i]
}

if (str1 === str2) {
    console.log("this is palidrome")
}
else {
    console.log("this is not palidrome")
}

console.log(str2)