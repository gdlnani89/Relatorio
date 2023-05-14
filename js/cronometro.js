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