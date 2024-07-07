let userName = getFirstName("Matheus Matias-Ferreira-Martins")
console.log("Seja bem vindo",userName)


function getFirstName(name){
    let firstName = name.split("-")[0]
    return firstName
}