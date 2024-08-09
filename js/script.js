//Criando um array de objetos de Alunos
let alunos = [
    {id:1, nome:"Vanessa", rm:123456},
    {id:2, nome:"Nicolas", rm:728438},
    {id:3, nome:"Jonas", rm:658756},
    {id:4, nome:"Giulia", rm:342334},
    {id:5, nome:"Fraderico", rm:788955},
];

const nomesAlunos = alunos.map(nome => nome.nome);
console.log(nomesAlunos);

let notas = [
    {id:1, nota:2},
    {id:2, nota:9.5},
    {id:3, nota:6},
    {id:4, nota:8},
    {id:5, nota:4.3},
];
/* 
const notasAlunos = alunos.map(aluno => {
    const nota = notas.find(n => n.id === aluno.id)
    return {id:aluno.id, nome:aluno.nome, rm:aluno.rm, nota:nota.nota}
});
*/

const notasAlunos = alunos.map(aluno => {
    const nota = notas.find(n => n.id === aluno.id)
    return {...aluno, nota:nota.nota}
});

console.log(notasAlunos);


const somaNotas = notasAlunos.reduce( (acumulador,notasAlunos)=>{
    return acumulador + notasAlunos.nota;
},0)

console.log(somaNotas);