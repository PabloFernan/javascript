function tabuada(){
    let num = window.document.querySelector('input#txtnum')
    let tab = window.document.querySelector('select#seltab')
    if (num.value.length == 0){
        window.alert('Por favor, digite um número!')
        
    }else {
        tab.innerHTML = ''
        let n = Number(num.value)
        for (let c = 1 ; c <=10 ; c++){
            let item = document.createElement('option')
            item.text = `${n} x ${c} = ${n*c}`
            item.value = `tab${c}`
            tab.appendChild(item)
        }
    }
    
}