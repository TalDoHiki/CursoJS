function load() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('image')
    var data = new Date()
    var hour = data.getHours()
    msg.innerHTML = `Now it's ${hour} hours.`
    if (hour >= 0 && hour <12) {
        img.src = 'morning.png'
        document.body.style.background = '#FFB800'
    } else if (hour >= 12 && hour <18) {
        img.src = 'day.png'
    } else {
        img.src = 'night.png'
        document.body.style.background = 'grey'
    }
}
