import { Comida } from 'src/app/shared/models/Comida';
import { Injectable } from '@angular/core';
import { Carrinho } from 'src/app/shared/models/Carrinho';
import { ItemCarrinho } from 'src/app/shared/models/ItemCarrinho';

@Injectable({
  providedIn: 'root'
})
export class CarrinhoService {

  private carrinho: Carrinho = new Carrinho();

  adicionarAoCarrinho(comida:Comida):void {
    let itemCarrinho = this.carrinho.itens.find(item => item.comida.id === comida.id);
    if (itemCarrinho) {
      this.mudarQuantidade(comida.id, itemCarrinho.quantidade + 1);
      return;
    }
    this.carrinho.itens.push(new ItemCarrinho(comida));
  }

  removerDoCarrinho(idComida: number): void{
    this.carrinho.itens = this.carrinho.itens.filter(item => item.comida.id != idComida);
  }

  mudarQuantidade(idComida: number, quantidade: number) {
    let itemCarrinho = this.carrinho.itens.find(item => item.comida.id === idComida);
    if (!itemCarrinho) return;
    itemCarrinho.quantidade = quantidade;
  }

  getCarrinho():Carrinho {
    return this.carrinho;
  }
}
