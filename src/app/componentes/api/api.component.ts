import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { Imagem } from 'src/models/api';

@Component({
  selector: 'app-api',
  templateUrl: './api.component.html',
  styleUrls: ['./api.component.css']
})
export class ApiComponent implements OnInit {

  imagens: Imagem;
  erro: any;

  constructor(private apiService: ApiService) {
    this.pegarImagem();
   }

  ngOnInit(): void {
  }

  pegarImagem(){
    this.apiService.getImg().subscribe(
      (data: Imagem) => {
      this.imagens = data;
      console.log(data);
      console.log(this.imagens);
    },
    (error: any) => {
      this.erro = error;
    }
    );
  }

}
