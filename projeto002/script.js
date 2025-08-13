function verificar(){
    var data = new Date
    var ano = data.getFullYear()
    var formAno = document.querySelector('#idnascimento');
    var resp = window.document.querySelector('div#idresp')
    if(formAno.value.length == 0 || Number(formAno.value) > ano){
        window.alert('[ERRO] Dados invalidos! Verifique e tente novamente.')
    }else{
        var fsex = document.getElementsByName('sexo')
        var idade = ano - Number(formAno.value)
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        var genero = ''
        if(fsex[0].checked){
            genero = 'Homem'
            if(idade >= 0 && idade < 10){
                img.setAttribute('src', 'menino-crianca.jpg')
            }else if (idade < 21){
                img.setAttribute('src', 'menino-jovem.jpg')
            }else if (idade < 50){
                img.setAttribute('src', 'homem-adulto.jpg')
            }else{
                img.setAttribute('src', 'homem-idoso.jpg')
            }
        }else{
            genero = 'Mulher'
            if(idade >= 0 && idade < 10){
                img.setAttribute('src', 'menina-crianca.jpg')
            }else if (idade < 21){
                img.setAttribute('src', 'menina-jovem.jpg')
            }else if (idade < 50){
                img.setAttribute('src', 'mulher-adulta.jpg')
            }else{
                img.setAttribute('src', 'mulher-idosa.jpg')
            }
        }

        resp.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        resp.appendChild(img)
    }   
}