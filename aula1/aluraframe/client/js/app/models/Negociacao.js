class Negociacao{
    
    constructor(data, quantidade, valor) {

        //o _ é uma convenção para o programador
        //para dizer que as propriedades com essa notação
        //não devem ser usadas fora da classe
        this._data = data;
        this._quantidade = quantidade;
        this._valor = valor;    
    }

    getVolume() {
        return this.getQuantidade() * this.getValor();
    }

    getData() {
        return this._data;
    }

    getQuantidade() {
        return this._quantidade;
    }

    getValor() {
        return this._valor;
    }
}