function somaA(NumberA, NumberB){
    let somatorio = NumberA * NumberB
    return somatorio
}


function somaB(NumberC, NumberD){
    let somatoriob = NumberC + NumberD
    return somatoriob
}

let resultado = somaA(20, 2) + somaB(4, 4)
console.log("O resultado guardado da função é "+resultado,)

let divisaoelo = resultado / 4
console.log("Após análises e correções o valor final é",divisaoelo,)
    
    switch (true){
        case (divisaoelo >= 15):
        let Positivo = ("O campeão está apto")
        console.log("O campeão está apto")
            break;
        case(divisaoelo <=15):
        let Negativo = ("O campeão não está apto")
        console.log("O campeão não está apto")
        break;

    }
