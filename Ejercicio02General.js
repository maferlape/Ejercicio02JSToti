let pessoas = []

let cantPessoas = Number(prompt("Digite a cantidade de pessoas que deseja comparar"))

for(i=0; i<cantPessoas; i++){
    alert(`Iniciando o registro da pessoa ${i+1}`)
    pessoas.push(registoPessoas())
}

ordenarPessoas(pessoas)

console.log(pessoas)


function registoPessoas(){

    let nome = prompt("Digite o nome da pessoa")
    let sobrenome = prompt("Digite o sobrenome da pessoa")
    let idade = Number(prompt("Digite a idade da pessoa"))
    let nacionalidade = prompt("Digite o pais de origem da pessoa")

    let registro = { 
        nome,
        sobrenome,
        idade, 
        nacionalidade
    }

    return registro
}

function ordenarPessoas(pessoas){
    pessoas.sort((a,b)=>{

        if(a.idade > b.idade){
            return 1
        }else if(a.idade < b.idade){
            return -1
        }else{
            return 0
        }

    })
}




