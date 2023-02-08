num = document.querySelector('input#fnum')
tab = document.querySelector('select#seltab')
res = document.querySelector('div#res')
arnum = []

function isNum(n) {
    if(Number(n) >=1 && Number(n) <= 100) {
        return true
    } else {
        return false
    }
}

function inTab(n, t) {
    if (t.indexOf(Number(n)) != -1) {
        return true
    } else {
        return false
    }
}

function addi() {
    if (isNum(num.value) && !inTab(num.value, arnum)) { //If it's a number and it's in tab
        arnum.push(Number(num.value))
        item = document.createElement('option')
        item.text = `Number ${Number(num.value)} added.`
        tab.appendChild(item)
    } else {
        alert(`[ERROR] Please insert a number or a different one`)
    }
    num.value = ''
    num.focus()
    res.innerHTML = ''
}

function endi() {
    if (arnum.length == 0) {
        alert('[ERROR] Add the values before proceeding!')
    } else {
        tot = arnum.length
        hg = arnum[0]
        le = arnum[0]
        sum = 0
        avg = 0
        for(i in arnum) {
            sum += arnum[i]
            if (arnum[i] > hg)
                hg = arnum[i]
            if (arnum[i] < le)
                le = arnum[i]   
        }

        med = sum / tot
        res.innerHTML = ''
        res.innerHTML += `<p>In total, we have about ${tot} numbers.</p>`
        res.innerHTML += `<p>The higher value added is ${hg}.</p>`
        res.innerHTML += `<p>The lower value added is ${le}.</p>`
        res.innerHTML += `<p>Adding all the values we have ${sum}.</p>`
        res.innerHTML += `<p>The average of the values added is ${med}.</p>`
    }

}