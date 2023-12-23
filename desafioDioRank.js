const nomeDoHeroi = prompt("Informe o Nome do Heroi: ")

 function saldoDeVitorias(vitorias,derrotas) {
     return vitorias - derrotas
 }
var ranqued = saldoDeVitorias (prompt("Informe a quantidade de vitórias: "),prompt("Informe a quantidade de derrotas: "))

 if (ranqued >= 0 && ranqued <= 10) {
     console.log("Você está com o Saldo de: " + ranqued + " Vitórias!"+ ("\n") + "O seu heroi " + nomeDoHeroi + " está no nível: Ferro.")
  }
  else if (ranqued >= 11 && ranqued <= 20) {
     console.log("Você está com o Saldo de: " + ranqued + " Vitórias!"+ ("\n") + "O seu heroi " + nomeDoHeroi + " está no nível: Bronze.")
   }
   else if (ranqued >= 21 && ranqued <= 50) {
     console.log("Você está com o Saldo de: " + ranqued + " Vitórias!"+ ("\n") + "O seu heroi " + nomeDoHeroi + " está no nível: Prata.")
   }
   else if (ranqued >= 51 && ranqued <= 80) {
     console.log("Você está com o Saldo de: " + ranqued + " Vitórias!"+ ("\n") + "O seu heroi " + nomeDoHeroi + " está no nível: Ouro.")
   }
   else if (ranqued >= 81 && ranqued <= 90) {
     console.log("Você está com o Saldo de: " + ranqued + " Vitórias!"+ ("\n") + "O seu heroi " + nomeDoHeroi + " está no nível: Diamante.")
   }
   else if (ranqued >= 91 && ranqued <= 100) {
     console.log("Você está com o Saldo de: " + ranqued + " Vitórias!"+ ("\n") + "O seu heroi " + nomeDoHeroi + " está no nível: Lendário.")
   }
   else if (ranqued >= 101) {
     console.log("Você está com o Saldo de: " + ranqued + " Vitórias!"+ ("\n") + "O seu heroi " + nomeDoHeroi + " está no nível: Imortal.")
   }
 