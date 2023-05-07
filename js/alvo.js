function bodyAlvo(){
    const ele = []
    const lTipo = $cria('LABEL')
    lTipo.innerText = 'Tipo'
    const slTipos = $cria('SELECT')
    slTipos.setAttribute('id', 'tipoPrevilegio')
    const opPub = $cria('OPTION')
    opPub.value = 0
    opPub.innerText = 'Publicador'
    slTipos.appendChild(opPub)
    const opPioAux = $cria('OPTION')
    opPioAux.innerText = 'Pioneiro Auxiliar 15 horas'
    opPioAux.setAttribute('value', 15)
    slTipos.appendChild(opPioAux)
    const opPioAux2 = $cria('OPTION')
    opPioAux2.setAttribute('value', 30)
    opPioAux2.innerText = 'Pioneiro Auxiliar 30 horas'
    slTipos.appendChild(opPioAux2)
    const opPioReg = $cria('OPTION')
    opPioReg.setAttribute('value', 50)
    opPioReg.innerText = 'Pioneiro Regular' 
    slTipos.appendChild(opPioReg)
    lTipo.appendChild(slTipos)
    const lHorasAlvo = $cria('LABEL')
    lHorasAlvo.innerText = 'Alvo de horas'
    const ipHorasAlvo = $cria('INPUT')
    lHorasAlvo.appendChild(ipHorasAlvo)
    ipHorasAlvo.value = 0
    ipHorasAlvo.setAttribute('type', 'text')
    ipHorasAlvo.setAttribute('id', 'horasAlvo')
    slTipos.addEventListener('change', function () {
        ipHorasAlvo.value = slTipos.value
    })
    ele.push(lTipo, lHorasAlvo)
    
    return ele
}
function addAlvo() {
    const slTipo = $id('tipoPrevilegio')
    const slOption = slTipo.options[slTipo.selectedIndex]
    const slTexto = slOption.textContent
    const ipHoras = $id('horasAlvo')
    const alvo = alvosCria(slTexto,ipHoras.value)
    localStorage.setItem('alvo', JSON.stringify(alvo))
    //atualizar no totais
    divCxDialogo.classList.remove('caixa-dialogo-aberta');
}