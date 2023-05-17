function abrirCronometro(btn){
    btn.parentNode.classList.add('ativo')
    btn.classList.add('none')
    const btnDesab = $id('btn-cron-desab')
    btnDesab.classList.add('hab')
}
function fecharCronometro(btn){
    btn.parentNode.classList.remove('ativo')
    btn.classList.remove('hab')
    const btnDesab = $id('btn-cron-ativo')
    btnDesab.classList.remove('none')
}
let segundos = 0;
let minutos = 0;
let horas = 0;
let cronometroAtivo = false;
let intervalId;
const iconsCron = $all('.c-timer BUTTON')
const iconStart = $(`#start-cron ion-icon`)
const iconPause = $(`#pause-cron ion-icon`)
console.log(iconsCron);
function atualizarCronometro() {
  segundos++;
  if (segundos === 60) {
    segundos = 0;
    minutos++;
  }
  if (minutos === 60) {
    minutos = 0;
    horas++;
  }

  const tempoFormatado = `${horas.toString().padStart(2, '0')}:${minutos.toString().padStart(2, '0')}:${segundos.toString().padStart(2, '0')}`;
  $id('cron-tempo').textContent = tempoFormatado;
}

$id('start-cron').addEventListener('click', function() {
    let tempo = new Date()
    let hora = tempo.getHours()
    let min = tempo.getMinutes()
    console.log(hora+':'+min);
    iconStart.style.color = '#80bfff'
    iconPause.style.color = 'white'
    iconsCron.forEach(i => i.removeAttribute('disabled'))
  if (!cronometroAtivo) {
    intervalId = setInterval(atualizarCronometro, 1000);
    cronometroAtivo = true;
  }
});

$id('pause-cron').addEventListener('click', function() {
    iconPause.style.color = '#80bfff'
    iconStart.style.color = 'white'
  clearInterval(intervalId);
  cronometroAtivo = false;
});

$id('zerar-cron').addEventListener('click', function() {
    iconPause.style.color = 'white'
    iconStart.style.color = 'white'
    iconsCron.forEach(i => i.setAttribute('disabled', true))
    iconsCron[0].removeAttribute('disabled')
  clearInterval(intervalId);
  cronometroAtivo = false;
  segundos = 0;
  minutos = 0;
  horas = 0;
  $id('cron-tempo').textContent = '00:00:00';
});
function calculaIntervalo() {
    const horasInicio = parseInt($id('i-horas').value) * 60
    const somaInicio = horasInicio + parseInt($id('i-min').value)
    
    const horasFim = parseInt($id('f-horas').value) * 60
    const somaFim = horasFim + parseInt($id('f-min').value)

    const resultado = minutosParaHoras(somaFim - somaInicio)

    return resultado
}
function resultadoElem(){
    const total = isNaN(calculaIntervalo().split(':')[0]) ? '0:00' : calculaIntervalo()
    // horasMinTemp = total.split(':')
    const h3ResultadoCalc = $id('resultado-calc')
    h3ResultadoCalc.innerText = total
}