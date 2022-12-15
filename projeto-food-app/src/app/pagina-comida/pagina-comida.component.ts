import { ActivatedRoute, Router } from '@angular/router';
import { CarrinhoService } from './../services/carrinho/carrinho.service';
import { FoodService } from './../services/food/food.service';

import { Comida } from './../shared/models/Comida';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pagina-comida',
  templateUrl: './pagina-comida.component.html',
  styleUrls: ['./pagina-comida.component.css']
})
export class PaginaComidaComponent implements OnInit {

  comida!: Comida;
  constructor(private activatedRoute:ActivatedRoute, private foodService:FoodService, private carrinhoService:CarrinhoService, private router:Router) {
    activatedRoute.params.subscribe((params) => {
      if(params.id){
        foodService.buscarComidaPorId(params.id).subscribe(comida => this.comida = comida);
      }
    })
  }

  ngOnInit(): void {
  }

  adicionarAoCarrinho() {
    this.carrinhoService.adicionarAoCarrinho(this.comida);
    this.router.navigateByUrl('/carrinho');
  }

}
