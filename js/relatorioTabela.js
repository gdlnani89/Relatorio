function tBodyCreate(inclusao, indice=''){
    const tempo = minuHoras(inclusao.tempo)
    const tr = $cria('tr')
    const tdDia = $cria('td')
    const tdHoras = $cria('td')
    const tdVideo = $cria('td')
    const tdPub = $cria('td')
    const tdRev = $cria('td')
    const tdEdit = $cria('td')
    tdDia.innerText = inclusao.dia
    tdHoras.innerText = `${tempo.horas}:${tempo.minutosRestantes}`
    tdVideo.innerText = inclusao.videos
    tdPub.innerText = inclusao.publicacoes
    tdRev.innerText = inclusao.revisitas

    const btnEditExc = $cria('button')
    btnEditExc.innerHTML = '<ion-icon name="trash" style="font-size: 20px; color: red"></ion-icon>'
    btnEditExc.addEventListener('click', function(){
        this.parentNode.parentNode.remove()
        relatorio.mes[mesAtualString.toLowerCase()].splice(indice,1)
        atualiza.relatorioLS()
        atualiza.relatorioTotais()
    })
    const btnEditEdita = $cria('button')
    btnEditEdita.innerHTML = '<ion-icon name="create" style="font-size: 20px; color: #4A148C"></ion-icon>'

    tdEdit.appendChild(btnEditExc)
    tdEdit.appendChild(btnEditEdita)
    tr.appendChild(tdDia)
    tr.appendChild(tdHoras)
    tr.appendChild(tdVideo)
    tr.appendChild(tdPub)
    tr.appendChild(tdRev)
    tr.appendChild(tdEdit)
    
    return tr
}