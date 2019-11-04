function sigmoid(x){
    return 1 / (1 + Math.exp(-x));
}

class RedeNeural{
    constructor(i_nodes, h_nodes, o_nodes){
        this.i_nodes = i_nodes;
        this.h_nodes = h_nodes;
        this.o_nodes = o_nodes;

        var matrizBias_ih = new Matriz();
        this.bias_ih = matrizBias_ih.criarMatriz(h_nodes, 1);
        this.bias_ih = matrizBias_ih.randomizar(this.bias_ih);
        
        
        var matrizBias_ho = new Matriz();
        this.bias_ho = matrizBias_ho.criarMatriz(o_nodes, 1);
        this.bias_ho = matrizBias_ho.randomizar(this.bias_ho);

        var matrizPeso_ih = new Matriz();
        this.weight_ih = matrizPeso_ih.criarMatriz(h_nodes, i_nodes);
        this.weight_ih = matrizPeso_ih.randomizar(this.weight_ih);

        var matrizPeso_ho = new Matriz();
        this.weight_ho = matrizPeso_ho.criarMatriz(o_nodes, h_nodes);
        this.weight_ho = matrizPeso_ho.randomizar(this.weight_ho);


    }

    feedforwad(input1){
          let input = Matriz.converterColunas(input1);
          let m = new Matriz();
        
          // INPUT -> HIDDEN

          let hidden = Matriz.multiplicarMatriz(this.weight_ih, input, this.weight_ih.length,this.weight_ih[0].length, input.length, input[0].length);
          hidden = Matriz.somarMatriz(hidden, this.bias_ih, hidden.length, hidden[0].length);
          
          console.table(hidden);
          for(let i=0; i<hidden.length; i++){
              for(let j=0; j<hidden[0].length; j++){
                  hidden[i][j] = sigmoid(hidden[i][j]);
              }
          }
          console.table(hidden);

          // HIDDEN -> OUTPUT

        let output = Matriz.multiplicarMatriz(this.weight_ho, hidden, this.weight_ho.length, this.weight_ho[0].length, hidden.length, hidden[0].length);
        output = Matriz.somarMatriz(output, this.bias_ho, output.length, output[0].length);
        
          console.table(output);
          for(let i=0; i<output.length; i++){
              for(let j=0; j<output[0].length; j++){
                  output[i][j] = sigmoid(output[i][j]);
              }
          }
          console.table(output);

            
    }

}