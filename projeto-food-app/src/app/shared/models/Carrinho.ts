import { ItemCarrinho } from './ItemCarrinho';

export class Carrinho{
  itens: ItemCarrinho[] = [];

  getPrecoTotal(): number{
    let precoTotal = 0;
    this.itens.forEach(item => {
      precoTotal += item.getPreco();
    })
    return precoTotal;
  }
}
