function factor(n) {
    fac = 1
    for(i = n; i > 1; i--) {
        fac *= i
    }
    return fac
}

console.log(factor(5))