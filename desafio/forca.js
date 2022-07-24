const readline = require('readline-sync');
class Forca {
 
  dados = {
   letrasChutadas : [],
   vidas : 6,
   palavra :  [],
  }

  constructor(palavraSecreta) {
    this.palavraSecreta = palavraSecreta;
  
    this.vitoria = false;
    this.montarVisualizacao();

  }
 

  montarVisualizacao() {
    let retorno = [];
    for (let i = 0; i < this.palavraSecreta.length; i++) {
        /*retorno += this.dados.letrasChutadas.includes(this.palavraSecreta[i]) ? this.palavraSecreta[i]  : "_ ";*/
        this.dados.letrasChutadas.includes(this.palavraSecreta[i]) ? retorno.push(this.palavraSecreta[i]): retorno.push("_")
    }
    this.dados['palavra'] = retorno;
    this.ContarVitoria();
  }
 

  vidaatual(){
    let validadorvida = 0
    for (let i = 0; i < this.palavraSecreta.length; i++) {
      if(!this.dados.letrasChutadas.includes(this.palavraSecreta[i])){
        validadorvida++;
      }
        }
            if(validadorvida == this.palavraSecreta.length){
            this.dados.vidas = this.dados.vidas - 1
          }
   }

   ContarVitoria() {
    let cont = 0;
        if(!this.dados.palavra.includes("_")){
          this.vitoria = true
        }
    }


 
   chutar(letra) { 
    if(letra.length > 1 || this.dados.letrasChutadas.includes(letra)){
      console.log("Letra inválida, tente novamente!") 
       /* const chute = readline.question("Aguardando chute: \n"); */
      return 
    }

    let letraChutada = letra
    console.log(`Chutou ${letraChutada}\n`, letra.length);
    if (!this.dados.letrasChutadas.includes(letra)) {
      this.dados.letrasChutadas.push(letra);
    }
  this.vidaatual();
  }

   

  
  buscarEstado(){
      let resultado = "aguardando chute";
    if(this.dados.vidas == 0){
      return resultado = "perdeu";
    }
    if(this.vitoria == true){
      return resultado = "ganhou";
    }
    return resultado;
  } // Possiveis valores: "perdeu", "aguardando chute" ou "ganhou"
 
  buscarDadosDoJogo() {
      this.montarVisualizacao();
      return this.dados; 
      /*return {
          letrasChutadas: [], // Deve conter todas as letras chutadas
          vidas: 6, // Quantidade de vidas restantes
          palavra: [] // Deve ser um array com as letras que já foram acertadas ou o valor "_" para as letras não identificadas
      }*/
  }
}
 
module.exports = Forca;
 