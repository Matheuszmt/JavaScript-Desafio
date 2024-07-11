function winAndLosses(wins, losses){
    let somatorio = wins - losses
    return somatorio
}
let nivel
console.log("Digite o numero de Vitórias e depois o numero de Derrotas!")
let saldoVitorias = winAndLosses(90,11)
switch(true){
    case saldoVitorias <= 10:
        nivel = "Ferro";
        console.log("O Herói tem de saldo de",saldoVitorias,"vitórias e está no nível de",nivel,)
    break;
    case saldoVitorias <=20:
        nivel = "Bronze";
        console.log("O Herói tem de saldo de",saldoVitorias,"vitórias e está no nível de",nivel,)
    break;
    case saldoVitorias <= 50:
        nivel = "Prata";
    console.log("O Herói tem de saldo de",saldoVitorias,"vitórias e está no nível de",nivel,)
    break;
    case saldoVitorias <= 80:
        nivel = "Ouro";
    console.log("O Herói tem de saldo de",saldoVitorias,"vitórias e está no nível de",nivel,)
    break;
    case saldoVitorias <= 90:
        nivel = "Diamante";
    console.log("O Herói tem de saldo de",saldoVitorias,"vitórias e está no nível de",nivel,)
    break;
    case saldoVitorias <= 100:
        nivel = "Lendario";
    console.log("O Herói tem de saldo de",saldoVitorias,"vitórias e está no nível de",nivel,)
    break;
    case saldoVitorias > 101:
        nivel = "Imortal";
    console.log("O Herói tem de saldo de",saldoVitorias,"vitórias está no nível de",nivel,)
    break;
}
