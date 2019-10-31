

function setup() {
    createCanvas(400, 400);
    background(220);


    /*var m1 = new Matrix(2,2);
    var m2 = new Matrix(2,2);
    Matrix.add(m1,m2);
    console.log(m1);
    console.log(m2);
    */
   //nLinhas = prompt("Informe o número de linhas");
   //nColunas = prompt("Informe o número de colunas");

   //var m = new Matriz();
   //m.cirarMatrizPersonalizada(nLinhas,  nColunas);

   matrizA = [
       [1,2],[3,4]
   ];

   matrizB = [
    [5,6],[7,8]
];


var m = new Matriz();

var A = m.criarMatriz(2,3);
var B = m.criarMatriz(3,4);

//var C = m.somarMatriz(A,B, A.length,A[0].length);
var M = m.multiplicarMatriz(A,B,A.length,A[0].length,B.length,B[0].length);


  }
  
  function draw() {
    
  }


