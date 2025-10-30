const usuarios = [
    {nome:'Lucas', idade: 20},
    {nome:'Gabriel', idade: 20},
    {nome:'Victor', idade: 30},
    {nome:'Joaõ', idade: 17},
    {nome:'adalberto', idade: 43}
]
console.log('Percorrendo vetor:')
usuarios.forEach( u =>
    console.log(`Nome: ${u.nome} tem a idade ${u.idade} anos. `)
)
console.log('\nFiltrando por idade menor que 18 anos')
const menorIdade = usuarios.filter(u => u.idade < 18)
menorIdade.forEach(u => 
console.log(`Nome: ${u.nome} tem ${u.idade} anos`)

)

console.log('\nRetornando apenas nomes da lista')
const listaDeNomes = usuarios.map(u => u.nome)
listaDeNomes.forEach((nome, index ) =>
console.log(`${++index}º nome: ${nome}`)
)

console.log('\nEncontrar um usuario na lista: ')
const usuarioEncontrado = usuarios.find(u => u.nome === 'Lucas')

console.log(usuarioEncontrado)
console.log(`Nome: ${usuarioEncontrado.nome}, idade: ${usuarioEncontrado.idade}`)


console.log('\nSomando todas as idades da lista: ')
const somaIdades = usuarios.reduce((soma, u) => soma + u.idade, 0)
console.log(`Soma: ${somaIdades}`)