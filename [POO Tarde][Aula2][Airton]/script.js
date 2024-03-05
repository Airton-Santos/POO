let alunos = ["Joao", "Mari", "Jose", "Pedro", "Paulo"] // vetor com elementos alunos

alert(alunos[3]) // mostrando no alert quem é o elemento 3 no vetor
alunos[alunos.length-1] = "Gerson" // verificando quem é o 4 elemento do vetor e substituindo por Gerson
alunos.push("Joaquim") //colocando nome joaquim no final do vetor alunos
let notas = ["10", "8", "5", "7", "9", "6"] //vetor com elemento notas

for(let i = 0; i < alunos.length; i++) {
    console.log("Aluno: " + alunos[i] + " Nota: " + notas[i])
}

//Criação de objetos

let aluno1 = {
    nome: 'Pedro',
    cpf: '123.654.789-08',
    nota: 10
}

let aluno2 = {
    nome: 'Tiago',
    cpf: '236.874.748-00',
    nota: 6
}

let aluno3 = {
    nome: 'joão',
    cpf: '238.235.780-76',
    nota: 5
}

let aluno4 = {
    nome: 'Irineu',
    cpf: '230.857.532-75',
    nota: 2
}

let aluno5 = {
    nome: 'Caio',
    cpf: '245.753.864-66',
    nota: 7
}


console.log(aluno4.nome)
console.log(aluno4.cpf)
console.log(aluno4.nota)