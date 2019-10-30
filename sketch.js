

function setup() {
    createCanvas(400, 400);
    background(220);


    /*var m1 = new Matrix(2,2);
    var m2 = new Matrix(2,2);
    Matrix.add(m1,m2);
    console.log(m1);
    console.log(m2);
    */
   nLinhas = prompt("Informe o número de linhas");
   nColunas = prompt("Informe o número de colunas");

   var m = new Matriz();
   m.cirarMatrizPersonalizada(nLinhas,  nColunas);


  }
  
  function draw() {
    
  }


