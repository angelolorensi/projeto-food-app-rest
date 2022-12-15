import { ItemCarrinho } from './../shared/models/ItemCarrinho';
import { CarrinhoService } from './../services/carrinho/carrinho.service';
import { Component, OnInit } from '@angular/core';
import { Carrinho } from '../shared/models/Carrinho';

@Component({
  selector: 'app-pagina-carrinho',
  templateUrl: './pagina-carrinho.component.html',
  styleUrls: ['./pagina-carrinho.component.css']
})
export class PaginaCarrinhoComponent implements OnInit {

  carrinho!: Carrinho;

  constructor(private carrinhoService: CarrinhoService) {
    this.setCarrinho();
  }

  setCarrinho() {
    this.carrinho = this.carrinhoService.getCarrinho();
  }

  removerDoCarrinho(itemCarrinho:ItemCarrinho) {
    this.carrinhoService.removerDoCarrinho(itemCarrinho.comida.id);
    this.setCarrinho();
  }

  mudarQuantidade(itemCarrinho: ItemCarrinho, quantidadeEmString: string) {
    const quantidade = parseInt(quantidadeEmString);
    this.carrinhoService.mudarQuantidade(itemCarrinho.comida.id, quantidade);
    this.setCarrinho();
  }

  ngOnInit(): void {
  }

}
