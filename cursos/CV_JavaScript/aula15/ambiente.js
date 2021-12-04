let num = [5, 8 , 41, 2 , 22, 9, 3]
num[3] = 6
num.push(7)
console.log(num)
console.log(`O vetor tem ${num.length} posições.`)
console.log(`O primeiro valor do vetor é ${num[0]}`)
console.log(`Organizando o vetor... ${num.sort()}`)
console.log(`O index de 9 é: ${num.indexOf(7)}`)
console.log(`O index de 10 é: ${num.indexOf(10)}`)  // A resposta -1 é porque o valor não foi encontrado no vetor. Uma maneira legal de verificar a seguir:
var pos = num.indexOf(11)
if (pos == -1) {
   console.log('O valor não foi encontrado!')
} else {
   console.log(`O valor está na posição ${pos}`)
}