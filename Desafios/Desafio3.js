// Definição da classe Heroi
class Heroi {
    constructor(nome, idade, tipo) {
        this.nome = nome;
        this.idade = idade;
        this.tipo = tipo;
    }
    
    atacar() {
        let ataque;
        switch(this.tipo) {
            case 'mago':
                ataque = 'usou magia';
                break;
            case 'guerreiro':
                ataque = 'usou espada';
                break;
            case 'monge':
                ataque = 'usou artes marciais';
                break;
            case 'ninja':
                ataque = 'usou shuriken';
                break;
            default:
                ataque = 'usou um ataque indefinido';
        }
        
        console.log(`O ${this.tipo} atacou usando ${ataque}`);
    }
}

// Exemplo de utilização da classe Heroi
let heroi1 = new Heroi("Gandalf", 1000, "mago");
heroi1.atacar();  // Saída: O mago atacou usando usou magia

let heroi2 = new Heroi("Aragorn", 35, "guerreiro");
heroi2.atacar();  // Saída: O guerreiro atacou usando usou espada

let heroi3 = new Heroi("Bruce Lee", 33, "monge");
heroi3.atacar();  // Saída: O monge atacou usando usou artes marciais

let heroi4 = new Heroi("Frederik", 23, "ninja");
heroi4.atacar();  // Saída: O ninja atacou usando shurikens
