let num = [5, 9, 3, 2, 8]

    console.log(`Nosso vetor é composto por ${num}`)
    console.log(`Com ${num.length} posições`)

    num.push(7)
    console.log(`Agora nosso vetor após o push é composto por ${num}`)
    console.log(`Com ${num.length} posições`)
    console.log(`O numero na posição 0 é ${num[0]} `)

    num.pop()
    console.log(`Agora nosso vetor após o pop é composto por ${num}`)
    console.log(`Com ${num.length} posições`)
    console.log(`O numero na posição 0 é ${num[0]} `)

    num.sort()
    console.log(`Agora nosso vetor após o sort é composto por ${num}`)
    console.log(`Com ${num.length} posições`)


  for (let c = 0; c<num.length;c++){
      console.log(`O numero na posição ${c} é ${num[c]} `)
  }

    for (let c in num){
        console.log(`O numero na posição ${c} é ${num[c]} `)
    }

    let pos3 = num.indexOf(3) //Caso não encontre no vetor retorna -1
    console.log(pos3)