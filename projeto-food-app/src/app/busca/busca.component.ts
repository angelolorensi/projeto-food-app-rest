import { ActivatedRoute,Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-busca',
  templateUrl: './busca.component.html',
  styleUrls: ['./busca.component.css']
})
export class BuscaComponent implements OnInit {

  buscador: String = '';

  constructor(private router:Router, private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.buscador = params.buscador;
    })
  }

  buscar(): void{
    if (this.buscador) {
      this.router.navigateByUrl('buscar/' + this.buscador)
    }
  }

}
