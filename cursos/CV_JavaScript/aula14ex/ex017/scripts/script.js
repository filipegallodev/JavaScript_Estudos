function gerarTabuada() {
   var num = document.getElementById('txtnum')
   var res = document.getElementById('res')
   if (num.value != '') {
      res.innerHTML = `Tabuada do ${num.value}:`
      for(c = 1; c <= 10; c++) {
         res.innerHTML += `<p class="juntinho">${num.value} x ${c} = ${num.value * c}</p>`
      }
   } else {
      alert('[ERRO] Insira um valor válido!')
   }
}