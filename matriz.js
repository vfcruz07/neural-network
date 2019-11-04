class Matriz{

    criarMatriz(nLinhas, nColunas){
        var matriz = [];
        for(let i=0; i<nLinhas; i++){
            matriz[i] = [];
            for(let j=0; j<nColunas; j++){
                var i1 = i+1;
                var j1 = j+1;
                matriz[i][j] = Math.floor(Math.random()*10);
            }
        }
        return matriz;
    }

    randomizar(matriz){
        for(let i=0; i<matriz.length; i++){
            for(let j=0; j<matriz[0].length; j++){
                matriz[i][j] = Math.random()*2 -1;
            }
        }
        return matriz;
    }

    imprimir(matriz){
        console.log(matriz);
    }

    static converterColunas(arr){
        let matriz = new Matriz();
        let m = matriz.criarMatriz(arr.length, 1);
        for(let j=0; j<arr.length; j++){
            m[j][0] = arr[j];
        }
        
        return(m);
    }

    static somarMatriz(matrizA, matrizB, nLinhas, nColunas){
        var matrizSoma = [];
        for(let i=0; i<nLinhas; i++){
            matrizSoma[i] = [];
            for(let j=0; j<nColunas; j++){
                matrizSoma[i][j] = matrizA[i][j] + matrizB[i][j];
            }
        }
        return matrizSoma;
    }

    
    static multiplicarMatriz(matrizA, matrizB, nLinhasA, nColunasA, nLinhasB, nColunasB){
        var matrizMult = [];
        for(let i=0; i<nLinhasA; i++){
            matrizMult[i] = [];
            for(let j=0; j<nColunasB; j++){
                let result = 0;
                for(let n=0; n<nLinhasB; n++){
                    result = result + (matrizA[i][n]*matrizB[n][j]);
                    console.log(result);
                }
                matrizMult[i][j] = result;
            }
        }
        return(matrizMult);
    }



}