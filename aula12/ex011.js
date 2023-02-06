var age = 1100
console.log(`You're ${age} years old.`)
if (age < 13) {
    console.log(`Do not vote!`)
} else if (age < 18) {
        console.log('Optional vote.')
} else if (age >= 18 && age < 65){
    console.log("Compulsory vote.")
}else {
    console.log('Optional vote.')
}