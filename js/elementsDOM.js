document.addEventListener('click', (event) => {
    if(event.target.className === 'caixa-dialogo caixa-dialogo-aberta')divCxDialogo.classList.remove('caixa-dialogo-aberta');      
}
)
//header mes e setas
const btnVoltaMes = $id('voltarMes')
btnVoltaMes.addEventListener('click', function(){
    countMes = meses[--mesAtualNumero]
    console.log(countMes);
    spMesRelatorio.innerText = countMes
    if(relatorioAnoAtual.mes[countMes.toLowerCase()]){
        tBody.innerHTML = ''
        relatorioAnoAtual.mes[countMes.toLowerCase()].forEach((item,i) => tBody.appendChild(tBodyCreate(item,i)))
        spHorasTotal.innerText = calculaHorasTotal(relatorioAnoAtual.mes[countMes.toLowerCase()])
        spRevTotal.innerText = calculaRevisitasTotal(relatorioAnoAtual.mes[countMes.toLowerCase()])
        spVideosTotal.innerText = calculaVideosTotal(relatorioAnoAtual.mes[countMes.toLowerCase()])
        spPubTotal.innerText = calculaPublicacoesTotal(relatorioAnoAtual.mes[countMes.toLowerCase()])
    }else{
        tBody.innerHTML = ''
        spHorasTotal.innerText = 0
        spRevTotal.innerText = 0
        spVideosTotal.innerText = 0
        spPubTotal.innerText = 0
    }

})
const btnAvancaMes = $id('avancarMes')
btnAvancaMes.addEventListener('click', function(){
    countMes = meses[++mesAtualNumero]
    console.log(countMes);
    spMesRelatorio.innerText = countMes
    if(relatorioAnoAtual.mes[countMes.toLowerCase()]){
        tBody.innerHTML = ''
        relatorioAnoAtual.mes[countMes.toLowerCase()].forEach((item,i) => tBody.appendChild(tBodyCreate(item,i)))
        spHorasTotal.innerText = calculaHorasTotal(relatorioAnoAtual.mes[countMes.toLowerCase()])
        spRevTotal.innerText = calculaRevisitasTotal(relatorioAnoAtual.mes[countMes.toLowerCase()])
        spVideosTotal.innerText = calculaVideosTotal(relatorioAnoAtual.mes[countMes.toLowerCase()])
        spPubTotal.innerText = calculaPublicacoesTotal(relatorioAnoAtual.mes[countMes.toLowerCase()])
    }else{
        tBody.innerHTML = ''
        spHorasTotal.innerText = 00
        spRevTotal.innerText = 00
        spVideosTotal.innerText = 00
        spPubTotal.innerText = 00
    }

})
const spMesRelatorio = $id('mesRelatorio')
spMesRelatorio.innerText = mesAtualString
//relatório totais
const spHorasTotal = $id('horasTotal')
spHorasTotal.innerText = calculaHorasTotal(relatorioAnoAtual.mes[mesAtualString.toLowerCase()])
const spRevTotal = $id('revisitasTotal')
spRevTotal.innerText = calculaRevisitasTotal(relatorioAnoAtual.mes[mesAtualString.toLowerCase()])
const spVideosTotal = $id('videosTotal')
spVideosTotal.innerText = calculaVideosTotal(relatorioAnoAtual.mes[mesAtualString.toLowerCase()])
const spPubTotal = $id('pubTotal')
spPubTotal.innerText = calculaPublicacoesTotal(relatorioAnoAtual.mes[mesAtualString.toLowerCase()])
const spEstudosTotal = $id('estudosTotal')
estudos.lenght === 0 ? spEstudosTotal.innerText = '00' : atualiza.estudosSpan()
const btnQtdEstudos = $id('qtdEstudos')
btnQtdEstudos.addEventListener('click',function () {
    divCxDialogo.classList.add('caixa-dialogo-aberta');
    modalTitulo('Estudos')
    modalCorpo(bodyEstudos())
    modalFooter(btnsEstudantes())
})
//tabela relatorio
const tBody = $id('tbody')
relatorioAnoAtual.mes[mesAtualString.toLowerCase()].forEach((item,i) => tBody.appendChild(tBodyCreate(item,i)))
//modal elementos
const h2Title = $id('titleModal')
const divBodyModal = $id('corpoModal')
const divBtnsFooter = $id('btnsFooter')
const btnDialogo = $id('add')
const divCxDialogo = $id('minha-caixa-dialogo')
const btnFecharDialogo = $id('fechar-dialogo')
const inpForm = document.querySelectorAll('.form-adiciona input')
//footer elementos
const btnAlvos = $id('alvo')
const btnAdd = $id('add')
const btnSend = $id('send')

btnSend.addEventListener('click', function(){
    // event.preventDefault()
    btnSend.setAttribute('href', `whatsapp://send?text=${atualiza.mensagemWhats()}`)
    // this.onclick = window.open(`whatsapp://send?text=${atualiza.mensagemWhats()}`)
})

btnAdd.addEventListener('click', function() {
    divCxDialogo.classList.add('caixa-dialogo-aberta');
    modalTitulo('Adicionar atividade')
    modalCorpo(bodyRelatorio())
    modalFooter([btnCancel(),btnSalvar(addAtividade)])
    }
);
btnAlvos.addEventListener('click', function() {
    divCxDialogo.classList.add('caixa-dialogo-aberta');
    modalTitulo('Alvos')
    modalCorpo([])
    modalFooter([btnCancel(),btnSalvar(addAlvo)])
    }
);

// btnFecharDialogo.addEventListener('click', function() {
//     divCxDialogo.classList.remove('caixa-dialogo-aberta');
// });
