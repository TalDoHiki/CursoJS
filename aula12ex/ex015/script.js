function verify() {
    var data = new Date()
    var year = data.getFullYear()
    var fyear = document.getElementById('texty')
    var res = document.getElementById('res')
    if (fyear.value.length == 0 || Number(fyear.value) > year ) {
        window.alert("[ERROR!] Verify your data and try again!")
    } else{
        var fsex = document.getElementsByName('radsex')
        var age = year - Number(fyear.value)
        var gender = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'photo')
        if (fsex[0].checked) {
            gender = 'male'
            if (age >=0 && age < 15) {
                //kid
                img.setAttribute('src', 'km.png')
            }else if (age >=15 && age <30) {
                //young
                img.setAttribute('src','ym.png')
            }else if (age >=30 && age <60) {
                //adult
                img.setAttribute('src','am.png')
            }else {
                //elder
                img.setAttribute('src','em.png')
            }
        } else if (fsex[1].checked) {
            gender = 'female'
            if (age >=0 && age < 15) {
                //kid
                img.setAttribute('src','kf.png')
            }else if (age >=15 && age <30) {
                //young
                img.setAttribute('src','yf.png')
            }else if (age >=30 && age <60) {
                //adult
                img.setAttribute('src','af.png')
            }else {
                //elder
                img.setAttribute('src','ef.png')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `We detected a <b>${age} years old ${gender}<b/>.`
        res.appendChild(img)
    }
}