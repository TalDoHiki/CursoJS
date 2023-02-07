function countv() {

    let str = document.getElementById('txtst')
    let end = document.getElementById('txted')
    let stp = document.getElementById('txtsp')
    let res = document.getElementById('res')

    if (str.value.length == 0 || end.value.length == 0 || stp.value.length == 0) {
        res. innerHTML = '[ERROR] Not enough data!'
        } else {
            res.innerHTML = `Counting: <br>`
            let st = Number(str.value)
            let ed = Number(end.value)
            let sp = Number(stp.value)

            if (sp <= 0) {
                alert('INVALID STEP! Considering STEP = 1.')
                sp = 1
            }
            if (st < ed) { //Crescent
                for (let c = st; c <= ed ; c += sp) {
                    res.innerHTML += ` ${c} \u{1F449}`
                }
            } else { //Decrescent
                for(let c = st; c >= ed; c-=sp) {
                    res.innerHTML += ` ${c} \u{1F449} `
                }
            }
            res.innerHTML += `\u{1F3C1}`
        }

}