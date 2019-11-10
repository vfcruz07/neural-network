function sigmoid(x){
    return 1 / (1 + Math.exp(-x));
}

function dSigmoid(x){
    /**
         * Derivada da Sigmoid = d(Sigmoid) = Sigmoid(x) * (1 - Sigmoid(x))
         */
    return (sigmoid(x) * (1- sigmoid(x)));
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

        this.learning_rate  = 0.1;


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

   train(arr, target){
        let input = Matriz.converterColunas(arr);
        let m = new Matriz();
    
        // INPUT -> HIDDEN

        let hidden = Matriz.multiplicarMatriz(this.weight_ih, input, this.weight_ih.length,this.weight_ih[0].length, input.length, input[0].length);
        hidden = Matriz.somarMatriz(hidden, this.bias_ih, hidden.length, hidden[0].length);
        
        
        for(let i=0; i<hidden.length; i++){
            for(let j=0; j<hidden[0].length; j++){
                hidden[i][j] = sigmoid(hidden[i][j]);
            }
        }
        

        // HIDDEN -> OUTPUT

    let output = Matriz.multiplicarMatriz(this.weight_ho, hidden, this.weight_ho.length, this.weight_ho[0].length, hidden.length, hidden[0].length);
    output = Matriz.somarMatriz(output, this.bias_ho, output.length, output[0].length);
    
        
        for(let i=0; i<output.length; i++){
            for(let j=0; j<output[0].length; j++){
                output[i][j] = sigmoid(output[i][j]);
            }
        }
        
   
        // BACKPROPAGATION

        
        //OUTPUT -> HIDDEN
        let expected = Matriz.converterColunas(target);
        let output_error = Matriz.subtrairMatriz(expected, output);
        

        //derivada da saida
        let d_output = [];
        for(let i=0; i<output.length; i++){
            d_output[i] = [];
            for(let j=0; j<output[i].length;j++){
                d_output[i][j] = dSigmoid(output[i][j]);
            }
        }

        //gradiente (erro*derivada(sigmoid))
        let gradient = Matriz.hadamard(output_error,d_output);
        gradient = Matriz.mult_escalar(gradient, this.learning_rate);

        //Ajustar bias
        this.bias_ho = Matriz.somarMatriz(this.bias_ho, gradient, gradient.length, gradient[0].length);


        let hidden_T = Matriz.transpose(hidden);
        
        //matriz de valores para correções dos pesos

        let weights_ho_deltas = Matriz.multiplicarMatriz(gradient, hidden_T, gradient.length, gradient[0].length, hidden_T.length, hidden_T[0].length);
        
        //Correção dos pesos
        this.weight_ho = Matriz.somarMatriz(this.weight_ho, weights_ho_deltas, this.weight_ho.length, this.weight_ho[0].length);

        

        // HIDDEN -> INPUT
        let weight_ho_T = Matriz.transpose(this.weight_ho);        
        let hidden_error = Matriz.multiplicarMatriz(weight_ho_T, output_error, weight_ho_T.length, weight_ho_T[0].length, output_error.length, output_error[0].length);
        //derivada da oculta
        let d_hidden = [];
        for(let i=0; i<hidden.length; i++){
            d_hidden[i] = [];
            for(let j=0; j<hidden[i].length;j++){
                d_hidden[i][j] = dSigmoid(hidden[i][j]);
            }
        }
        //gradiente (erro*derivada(sigmoid))
        let gradient_H = Matriz.hadamard(hidden_error, d_hidden);
        gradient_H = Matriz.mult_escalar(gradient_H, this.learning_rate);
        let input_T = Matriz.transpose(input);

        //matriz de valores para correções dos pesos
        let weights_ih_deltas = Matriz.multiplicarMatriz(gradient_H, input_T, gradient_H.length, gradient_H[0].length, input_T.length, input_T[0].length);
        
        //Ajuste de bias
        this.bias_ih = Matriz.somarMatriz(this.bias_ih, gradient_H, this.bias_ih.length, this.bias_ih[0].length);

        //Correção dos pesos
        this.weight_ih = Matriz.somarMatriz(this.weight_ih, weights_ih_deltas, this.weight_ih.length, this.weight_ih[0].length);
        
    }

    predict(arr){
        let input = Matriz.converterColunas(arr);
        let m = new Matriz();
    
        // INPUT -> HIDDEN

        let hidden = Matriz.multiplicarMatriz(this.weight_ih, input, this.weight_ih.length,this.weight_ih[0].length, input.length, input[0].length);
        hidden = Matriz.somarMatriz(hidden, this.bias_ih, hidden.length, hidden[0].length);
        
        
        for(let i=0; i<hidden.length; i++){
            for(let j=0; j<hidden[0].length; j++){
                hidden[i][j] = sigmoid(hidden[i][j]);
            }
        }
        

        // HIDDEN -> OUTPUT

        let output = Matriz.multiplicarMatriz(this.weight_ho, hidden, this.weight_ho.length, this.weight_ho[0].length, hidden.length, hidden[0].length);
        output = Matriz.somarMatriz(output, this.bias_ho, output.length, output[0].length);
    
        
        for(let i=0; i<output.length; i++){
            for(let j=0; j<output[0].length; j++){
                output[i][j] = sigmoid(output[i][j]);
            }
        }
        
        output = Matriz.converterLinhas(output);
        return(output);

    }

    



}