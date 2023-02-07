let num = [5, 8, 2, 9, 3]
num.push(1)
num.sort()
console.log(num)
console.log(`The array have ${num.length} positions`)
console.log(`The first array value is ${num[0]}`)

for (i = 0; num.length > i; i++) {
    console.log(`The position ${i} have the value ${num[i]}`)
}

for(i in num) {   //For each position put the number
    console.log(num[i])
}

console.log(`Position ${num.indexOf(8)}`) //Search element position