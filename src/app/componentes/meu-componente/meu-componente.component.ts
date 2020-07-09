import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-meu-componente',
  templateUrl: './meu-componente.component.html',
  styleUrls: ['./meu-componente.component.css']
})
export class MeuComponenteComponent implements OnInit {

  nome: string;

  constructor() { }

  ngOnInit(): void {
   // this.nome = 'João pedro';
  }
  recuperarTexto(nome: string) {
    this.nome = nome;
  }
}
