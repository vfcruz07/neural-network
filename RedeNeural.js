class RedeNeural{
    constructor(l_nodes, h_nodes, o_nodes){
        this.l_nodes = l_nodes;
        this.h_nodes = h_nodes;
        this.o_nodes = o_nodes;

        this.bias_ih = new Matriz(h_nodes, 1);
        this.bias_ho = new Matriz(o_nodes, 1);

    }
}