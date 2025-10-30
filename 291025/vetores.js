const listaNomes = ["Lucas", "Gabriel", "Victor"]

console.log('\nExibindo todos os elementos: ')
console.log(listaNomes)

console.log('\nExibindo apenas os elementos 1:')
console.log(listaNomes[0])

//Push - Adicionando um elemento
console.log('\nAdicionando apenas um elemento no verto: ')
listaNomes.push('Flavio')
console.log(listaNomes)

//Shift - Remove o primeiro elemento
console.log('\nRemovendo o primeiro elemento no vetor')
listaNomes.shift()
console.log(listaNomes)

//Pop - Remove o ultimo elemento
console.log('\nRemovendo o último elemento no vetor: ')
console.log(listaNomes)