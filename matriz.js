class Matriz{

    criarMatriz(nLinhas, nColunas){
        var matriz = [];
        for(let i=0; i<nLinhas; i++){
            matriz[i] = [];
            for(let j=0; j<nColunas; j++){
                var i1 = i+1;
                var j1 = j+1;
                matriz[i][j] = parseInt(prompt("Informe um valor para a posição " + i1 + " x " + j1));
            }
        }
        console.log(matriz);
        return matriz;
    }

    somarMatriz(matrizA, matrizB, nLinhas, nColunas){
        var matrizSoma = [];
        for(let i=0; i<nLinhas; i++){
            matrizSoma[i] = [];
            for(let j=0; j<nColunas; j++){
                matrizSoma[i][j] = matrizA[i][j] + matrizB[i][j];
            }
        }
        console.log(matrizSoma);
        return matrizSoma;
    }

    
    multiplicarMatriz(matrizA, matrizB, nLinhasA, nColunasA, nLinhasB, nColunasB){
        var matrizMult = [];
        for(let i=0; i<nLinhasA; i++){
            matrizMult[i] = [];
            for(let j=0; j<nColunasB; j++){
                let result = 0;
                for(let n=0; n<nLinhasB; n++){
                    result = result + (matrizA[i][n]*matrizB[n][j]);
                }
                matrizMult[i][j] = result;
            }
        }
        console.log(matrizMult);
        return(matrizMult);
    }



}