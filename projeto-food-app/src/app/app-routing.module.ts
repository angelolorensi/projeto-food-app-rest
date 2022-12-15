import { PaginaCarrinhoComponent } from './pagina-carrinho/pagina-carrinho.component';
import { PaginaComidaComponent } from './pagina-comida/pagina-comida.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'buscar/:buscador', component: HomeComponent },
  { path: 'tag/:tag', component: HomeComponent },
  { path: 'comida/:id', component: PaginaComidaComponent },
  { path: 'carrinho', component: PaginaCarrinhoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
