let nome = "Matheus"
let xp = 10002
let nivel

switch(true){
    case (xp <= 1000):
    nivel = "Ferro";
    console.log("O herói de nome",nome,"está no nivel",nivel,)
    break;
    case (xp <= 2000):
    nivel = "Bronze";
    console.log("O herói de nome",nome,"está no nivel",nivel,)
    break;
    case ( xp <= 5000):
    nivel = "Prata";
    console.log("O herói de nome",nome,"está no nivel",nivel,)
    break;
    case (xp <= 7000):
    nivel = "Ouro"
    console.log("O herói de nome",nome,"está no nivel",nivel,)
    break;
    case (xp <= 8000):
    nivel = "Platina"
    console.log("O herói de nome",nome,"está no nivel",nivel,)
    break;
    case (xp <= 9000):
    nivel = "Ascendente"
    console.log("O herói de nome",nome,"está no nivel",nivel,)
    break;
    case (xp <= 10000):
    nivel = "Imortal"
    console.log("O herói de nome",nome,"está no nivel",nivel,)
    break;
    case (xp > 10000):
    nivel = "Radiante"
    console.log("O herói de nome",nome,"está no nivel",nivel,)
    break;
}