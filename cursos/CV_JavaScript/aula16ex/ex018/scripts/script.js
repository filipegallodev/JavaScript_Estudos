let num = document.querySelector("input#txtnum")
let lista = document.querySelector("select#flista")
let res = document.querySelector("div#res")
let valores = []

function isNumero(n) {
   if (Number(n) >= 1 && Number(n) <= 100) {
      return true
   } else {
      return false
   }
}

function inLista(n, l) {
   if (l.indexOf(n) != -1) {
      return true
   } else {
      return false
   }
}

function somaTotal(vetor) {
   soma = 0;
   for (i in vetor) {
      soma += Number(vetor[i])
   }
   return soma;
}

function adicionar() {
   if (isNumero(num.value) && !inLista(num.value, valores)) {
      valores.push(num.value)
      let item = document.createElement("option")
      item.text = `Valor ${num.value} adicionado`
      lista.appendChild(item)
   } else {
      window.alert("Valor inválido ou já encontrado na lista.")
   }
   num.value = ""
   num.focus()
}

function finalizar() {
   if (valores.length == 0) {
      window.alert("Adicione valores antes de finalizar!")
   } else {
      valores.sort(function(a, b) {return a - b;}).reverse()
      res.innerHTML = `<p>Ao todo, temos ${valores.length} números cadastrados.</p>`
      res.innerHTML += `<p>O maior valor informado foi ${valores[0]}.</p>`
      valores.reverse()
      res.innerHTML += `<p>O menor valor informado foi ${valores[0]}.</p>`
      res.innerHTML += `<p>Somando todos os valores, temos ${somaTotal(valores)}.</p>`
      res.innerHTML += `<p>A média dos valores digitados é ${somaTotal(valores) / valores.length}.</p>`
   }
}
