var data_atual = "10/12/2021"
var data = "09/12/2021"
let idade = 18
let qtd = 100
if (data_atual <= data) {
    console.log("Pode realizar sua inscrição")    
}else {
    console.log("Data Atual já ultrapassou dia da Palestra")
}

if(idade >= 18){
    console.log("Pode se increver idade dentro da permitida!!")
}else{
    console.log("Menor de idade")
}

if(qtd > 100){
    console.log("Pode realizar Incrição ainda há vaga!!!")
    qtd++
}else{
    console.log("Limite de Vagas Atigindo!!!!")
}

let nomes = ["Professora Jessica", "Professor Paulo Henrique","Professor Ronei"]
console.log("Lista de Palestrante")
for (let index = 0; index <= 2; index++) {
    console.log(nomes[index])    
}