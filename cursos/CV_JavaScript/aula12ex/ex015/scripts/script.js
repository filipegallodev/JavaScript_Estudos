function verificar() {
   var data = new Date()
   var ano = data.getFullYear()
   var form_ano = document.getElementById('txtano')
   var res = document.querySelector('div#res')
   if (form_ano.value.lenght == 0 || form_ano.value > ano) {
      window.alert('[ERRO] Verifique os dados e tente novamente!')
   } else {
      var form_sex = document.getElementsByName('radsex')
      var idade = ano - Number(form_ano.value)
      var genero = ''
      var img = document.getElementById('foto')
      if (form_sex[0].checked) {
         genero = 'Homem'
         if (idade >= 0 && idade < 10) {
            img.src = 'imagens/homem-criança.png'
         } else if (idade < 21) {
            img.src = 'imagens/homem-jovem.png'
         } else if (idade < 60) {
            img.src = 'imagens/homem-adulto.png'
         } else {
            img.src = 'imagens/homem-idoso.png'
         }
      } else if (form_sex[1].checked) {
         genero = 'Mulher'
         if (idade >= 0 && idade < 10) {
            img.src = 'imagens/mulher-criança.png'
         } else if (idade < 21) {
            img.src = 'imagens/mulher-jovem.png'
         } else if (idade < 60) {
            img.src = 'imagens/mulher-adulta.png'
         } else {
            img.src = 'imagens/mulher-idosa.png'
         }
      }
      res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
   }
}