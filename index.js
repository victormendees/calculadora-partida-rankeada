function calcularSaldoRankeadas (vitorias,derrotas) {
    let saldo = vitorias - derrotas
    let nivelRankeadas;

switch(true) {
    case vitorias <= 10:
        nivelRankeadas = "Ferro"
        break
    case vitorias >= 11 && vitorias <= 20:
        nivelRankeadas = "Bronze"
        break
    case vitorias >= 21 && vitorias <= 50:
        nivelRankeadas = "Prata"
        break
    case vitorias >= 51 && vitorias <= 80:
        nivelRankeadas = "Ouro"
        break                  
     case vitorias >= 81 && vitorias <= 90:
        nivelRankeadas = "Diamante"
        break
    case vitorias >= 91 && vitorias <= 100:
        nivelRankeadas = "Lendário"   
        break                     
    case vitorias >= 101:
        nivelRankeadas = "Imortal"
        break    
}

    return{ 
        saldo: saldo,
        nivelRankeadas: nivelRankeadas
}
}

let vitorias = 130
let derrotas = 0
let resultado = calcularSaldoRankeadas(vitorias, derrotas)
console.log("Seu herói tem um saldo de: " +resultado.saldo)
console.log("Seu nivel de rank é: "+resultado.nivelRankeadas)
