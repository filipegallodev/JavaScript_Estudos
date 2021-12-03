function contar() {
   var inicioTxt = document.getElementById('txtinicio')
   var fimTxt = document.getElementById('txtfim')
   var passoTxt = document.getElementById('txtpasso')
   var res = document.getElementById('res')
   var inicio = Number(inicioTxt.value)
   var fim = Number(fimTxt.value)
   var passo = Number(passoTxt.value)
   if (inicioTxt.value != '' && fimTxt.value != '') {
      res.innerHTML = `<p class="resultado">Contando de <strong>${inicio}</strong> até <strong>${fim}</strong> de <strong>${passo}</strong> em <strong>${passo}</strong>:</p>`
      if (inicio <= fim && passo != '') {
         for (inicio; inicio <= fim; inicio += passo) {
            res.innerHTML += `${inicio} &#x1F449; `  
         }
         res.innerHTML += `&#x1F3C1;`
      } else if (inicio >= fim && passo != '') {
         for (inicio; inicio >= fim; inicio -= passo) {
            res.innerHTML += `${inicio} &#x1F449; `  
         }
         res.innerHTML += `&#x1F3C1;`
      } else {
         res.innerHTML = 'Por favor, confira se os campos estão preenchidos corretamente.'
      }
   } else {   
      res.innerHTML = 'Por favor, confira se os campos estão preenchidos corretamente.'
   }
}