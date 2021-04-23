let nomeUno = prompt("Digite o nome da primera pessoa")
let sobrenomeUno = prompt("Digite o sobrenome da primera pessoa")
let idadeUno = Number(prompt("Digite a idade da primera pessoa"))
let nacionalidadeUno = prompt("Digite o pais de origem da primera pessoa")

let nomeDos = prompt("Digite o nome da segunda pessoa")
let sobrenomeDos = prompt("Digite o sobrenome da segunda pessoa")
let idadeDos = Number(prompt("Digite a idade da segunda pessoa"))
let nacionalidadeDos = prompt("Digite o pais de origem da segunda pessoa")

let dadosPessoaUno = { 
    nomeUno : nomeUno,
    sobrenomeUno:sobrenomeUno,
    idadeUno:idadeUno, 
    nacionalidadeUno:nacionalidadeUno
}

let dadosPessoaDos = { 
    nomeDos : nomeDos,
    sobrenomeDos:sobrenomeDos,
    idadeDos:idadeDos, 
    nacionalidadeDos:nacionalidadeDos
}

if(dadosPessoaUno.idadeUno>dadosPessoaDos.idadeDos){
    console.log(`${dadosPessoaUno.nomeUno} es mais velho que ${dadosPessoaDos.nomeDos}`)
} else if(dadosPessoaUno.idadeUno<dadosPessoaDos.idadeDos){
    console.log(`${dadosPessoaUno.nomeUno} es mais novo que ${dadosPessoaDos.nomeDos}`)
}else{
    console.log(`${dadosPessoaUno.nomeUno} y ${dadosPessoaDos.nomeDos} tem a misma idade`)
}

if(dadosPessoaUno.nacionalidadeUno===dadosPessoaDos.nacionalidadeDos){
    console.log(`${dadosPessoaUno.nomeUno} e ${dadosPessoaDos.nomeDos} são do mismo pais ${dadosPessoaDos.nacionalidadeDos} `)
}else{
    console.log(`Eles são de diferentes paises, ${dadosPessoaUno.nomeUno} é do pais ${dadosPessoaUno.nacionalidadeUno} e ${dadosPessoaDos.nomeDos} é do pais ${dadosPessoaDos.nacionalidadeDos}  `)
}
