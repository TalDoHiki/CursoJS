var now = new Date()
var hr = now.getHours()
console.log(`Now it's ${hr} hours.`)

if (hr >= 6 && hr <12) {
    console.log(`Good morning!`)
}else if (hr >= 12 && hr < 18) {
    console.log(`Good afternoon!`)
}else if (hr > 18 && hr < 6) {
    console.log(`Good night`)
}else {
    console.log(`Bro, go to sleep RN!!!`)
}