import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Imagem } from 'src/models/api';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  public getImg(): Observable<any>{
    return this.http.get("https://jsonplaceholder.typicode.com/albums/1/photos");
  }
}
