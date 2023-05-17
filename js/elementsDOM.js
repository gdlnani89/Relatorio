document.addEventListener('click', (event) => {
    if(event.target.className === 'caixa-dialogo caixa-dialogo-aberta')divCxDialogo.classList.remove('caixa-dialogo-aberta');      
}
)
//header mes e setas
const btnVoltaMes = $id('voltarMes')
btnVoltaMes.addEventListener('click', function(){
    btnAnimation(this)
    countMes = meses[--mesAtualNumero]
    avancaVolta(countMes)
})
const btnAvancaMes = $id('avancarMes')
btnAvancaMes.addEventListener('click', function(){
    btnAnimation(this)
    countMes = meses[++mesAtualNumero]
    avancaVolta(countMes)
})
const spMesRelatorio = $id('mesRelatorio')
spMesRelatorio.innerText = mesAtualString
//relatório-totais
const spHorasTotal = $id('horasTotal')
spHorasTotal.innerText = calculaHorasTotal
    (relatorioAnoAtual.mes[mesAtualString.toLowerCase()])
const spRevTotal = $id('revisitasTotal')
spRevTotal.innerText = calculaRevisitasTotal
    (relatorioAnoAtual.mes[mesAtualString.toLowerCase()])
const spVideosTotal = $id('videosTotal')
spVideosTotal.innerText = calculaVideosTotal
    (relatorioAnoAtual.mes[mesAtualString.toLowerCase()])
const spPubTotal = $id('pubTotal')
spPubTotal.innerText = calculaPublicacoesTotal
    (relatorioAnoAtual.mes[mesAtualString.toLowerCase()])
const spEstudosTotal = $id('estudosTotal')
estudos.lenght === 0 ? spEstudosTotal.innerText = '00' : atualiza.estudosSpan()
const btnQtdEstudos = $id('qtdEstudos')
btnQtdEstudos.addEventListener('click',function () {
    divCxDialogo.classList.add('caixa-dialogo-aberta');
    modalTitulo('Estudos')
    modalCorpo(bodyEstudos())
    modalFooter([])
})
const divAlvoTempo = $id('alvoDiv')
const iconRocket = $id('rocket')
const spHorasFalta = $id('horasFalta')
const spAlvoHoras = $id('alvoHoras')
// alvo ? divAlvoTempo.innerHTML = `${setAlvoDiv()}<ion-icon name="rocket" style="font-size: 24px;color: #4A148C;"></ion-icon>` : ''
if(alvo){
    spHorasFalta.innerText = setAlvoDiv()
    spAlvoHoras.innerText = alvo.horas+'h'
}else{
    divAlvoTempo.classList.add('invisivel')
    spHorasFalta.innerText = ''
}
//tabela relatorio
const tBody = $id('tbody')
relatorioAnoAtual.mes[mesAtualString.toLowerCase()]
    .sort((a,b)=> a.dia - b.dia)
    .forEach((item,i) => tBody.appendChild(tBodyCreate(item,i)))
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
const h3Tempo = $id('resultado-calc')
const btnAddCalc = $id('add-calc-tempo')
const btnAddCron = $id('add-cron-relatorio')
const spCronTempo = $id('cron-tempo')
const ipInicioFim = $all('.c-calc-horas input')

ipInicioFim.forEach((item,indice) =>{
    item.addEventListener('input', function(){
        console.log(indice);
       if(item.value.length === 2){
        if(indice<=2){
            ipInicioFim[indice+1].focus()
        }else{
            resultadoElem()
        }
       }
    })
})
btnSend.addEventListener('click', function(){
    btnAnimation(this)
    btnSend.setAttribute('href', `whatsapp://send?text=${atualiza.mensagemWhats(countMes,relatorioAnoAtual.mes[countMes.toLowerCase()])}`)
})

btnAdd.addEventListener('click', function() {
    btnAnimation(this)
    divCxDialogo.classList.add('caixa-dialogo-aberta');
    modalTitulo('Adicionar atividade')
    modalCorpo(bodyRelatorio(),'addRelatorio')
    modalFooter([btnCancel(),btnSalvar(addAtividade,'fechar-incluirAtividade')])
    }
)
btnAddCalc.addEventListener('click', function(){
    btnAnimation(this)
    divCxDialogo.classList.add('caixa-dialogo-aberta');
    modalTitulo('Adicionar atividade')
    let tempo = h3Tempo.innerText.split(':')
    modalCorpo(bodyRelatorio(tempo),'addRelatorio')
    modalFooter([btnCancel(),btnSalvar(addAtividade,'fechar-incluirAtividade')])
    }
)
btnAddCron.addEventListener('click', function(){
    btnAnimation(this)
    divCxDialogo.classList.add('caixa-dialogo-aberta');
    modalTitulo('Adicionar atividade')
    let tempo = spCronTempo.innerText.split(':')
    modalCorpo(bodyRelatorio(tempo),'addRelatorio')
    modalFooter([btnCancel(),btnSalvar(addAtividade,'fechar-incluirAtividade')])
    }
)
btnAlvos.addEventListener('click', function() {
    btnAnimation(this)
    divCxDialogo.classList.add('caixa-dialogo-aberta');
    modalTitulo('Alvos')
    modalCorpo(bodyAlvo())
    modalFooter([btnCancel(),btnSalvar(addAlvo,'sair-incluirAlvo')])
    }
);
