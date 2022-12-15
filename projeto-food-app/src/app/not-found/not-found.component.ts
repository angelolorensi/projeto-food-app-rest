import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-not-found',
  templateUrl: './not-found.component.html',
  styleUrls: ['./not-found.component.css'],
})
export class NotFoundComponent implements OnInit {

  @Input() visivel: boolean = false;
  @Input() mensagemNotFound: string = 'Não encontrado!';
  @Input() resetLink: string = 'Resetar';
  @Input() rotaDeReset: string = '/';

  constructor() {}

  ngOnInit(): void {}
}
