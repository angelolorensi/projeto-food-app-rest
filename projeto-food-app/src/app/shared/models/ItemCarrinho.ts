import { Comida } from 'src/app/shared/models/Comida';

export class ItemCarrinho {

  constructor(comida: Comida) {
    this.comida = comida;
  }

  comida: Comida;
  quantidade: number = 1;

  getPreco(): number{
    return this.comida.preco * this.quantidade;
  }
}
