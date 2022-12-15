import { Injectable } from '@angular/core';
import { Comida } from 'src/app/shared/models/Comida';
import { Tag } from 'src/app/shared/models/Tag';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class FoodService {

  enderecoAPI = 'http://localhost:8080/api/'

  constructor(private httpClient: HttpClient ) {}

  buscarTodos(): Observable<Comida[]> {
    return this.httpClient.get<Comida[]>(this.enderecoAPI + 'comida/');
  }

  buscarComidaPeloBuscador(buscador:string) {
    return  this.httpClient.get<Comida[]>(this.enderecoAPI + 'comida?nome=' + buscador);
  }

  buscarComidaPorId(id:number): Observable<Comida>{
    return this.httpClient.get<Comida>(this.enderecoAPI + 'comida/' + id);
  }

  buscarTodasTags():Tag[]{
    return [
      { nome: 'All', contagem: '7' },
      { nome: 'FastFood', contagem: '4' },
      { nome: 'Frito', contagem: '2' },
      { nome: 'Xis', contagem: '1' },
      { nome: 'Pizza', contagem: '1' },
      { nome: 'Hamburguer', contagem: '1' },
      { nome: 'Pastel', contagem: '1' },
      { nome: 'Saudavel', contagem: '1' },
    ];
  }

  // buscarComidaPelaTag(tag: string): Comida[] {
  //   return tag == 'All' ? this.buscarTodos() : this.buscarTodos().filter((comida) => comida.tags?.includes(tag));
  // }
}
