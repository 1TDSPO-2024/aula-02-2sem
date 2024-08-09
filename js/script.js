
//Criando um array de objeto de alunos
let alunos = [
    {id:1,nome:"Vanessa",rm:12345},
    {id:2,nome:"Nicolas",rm:78901},
    {id:3,nome:"Jonas",rm:12567},
    {id:4,nome:"Giulia",rm:75434},
    {id:5,nome:"Frederico",rm:92345},
];

const nomesAlunos = alunos.map( nome => nome.nome);
console.log(nomesAlunos);

let notas = [
    {id:1,nota:8},
    {id:2,nota:7.5},
    {id:3,nota:6.7},
    {id:4,nota:4},
    {id:5,nota:2},
];

// const notasAlunos = alunos.map(aluno =>{
//     const nota = notas.find( n => n.id === aluno.id )
//     return {id:aluno.id,nome:aluno.nome,rm:aluno.rm,nota:nota.nota};
// })

const notasAlunos = alunos.map(aluno =>{
    const nota = notas.find( n => n.id === aluno.id )
    return {...aluno,nota:nota.nota};
})

console.log(notasAlunos);


const somaNotas = notasAlunos.reduce( (acumulador,notasAlunos)=>{
    return acumulador + notasAlunos.nota;
},0)

console.log(somaNotas);