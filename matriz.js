class Matriz{


    
    
    cirarMatrizPersonalizada(nLinhas, nColunas){
        var matriz = [];
        for(let i=0; i<nLinhas; i++){
            matriz[i] = [];
            for(let j=0; j<nColunas; j++){
                var i1 = i+1;
                var j1 = j+1;
                matriz[i][j] = prompt("Informe um valor para a posição " + i1 + " x " + j1);
            }
        }
    }


    criarMatriz(nLinhas, nColunas){
        var matriz =[];
        for(let i=0; i<nLinhas; i++){
            matriz[i] = [];
            for(let j=0; j<nColunas; j++){
                matriz[i][j] = Math.floor(Math.random()*10);
            }
        }
        console.log(matriz);
    }

    somarMatriz(matrizA, matrizB){
        
    }



}