function carregar() {
    var msg = window.document.querySelector('div#msg')
    var img = window.document.querySelector('div#imagem img')
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} horas.`

    if(hora >= 0 && hora < 12){
        img.src = 'imagens/manha.jpg'
        window.document.body.style.background = '#FCD9A7'
    } else if(hora >= 12 && hora < 18){
        img.src = 'imagens/tarde.jpg'
        window.document.body.style.background = '#FF9511'
    } else {
        img.src = 'imagens/noite.jpg'
        window.document.body.style.background = '#0F2226'
    }
}
