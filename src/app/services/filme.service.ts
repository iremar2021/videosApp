
import { IListaFilmes } from './../models/IFilmeAPI.model';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ToastController } from '@ionic/angular';
import { Observable } from 'rxjs';
import { map, catchError } from 'rxjs/operators';




@Injectable({
  providedIn: 'root'
})
export class FilmeService {

  lingua = 'pt-BR';
  regiao = 'BR';

private apiURL = 'https://api.themoviedb.org/3/';
private key = '?api_key=092ac3b557fd572ecbafc1c46e30dab4';


  constructor(private http: HttpClient, public toastController: ToastController) { }

  buscarFilmes(buscar: string): Observable<IListaFilmes>{
    const url = `${this.apiURL}search/movie${this.key}&language=${this.lingua}&region=${this.regiao}&query=${buscar}`;

     return this.http.get<IListaFilmes>(url).pipe(
       map(retorno => retorno),
       catchError(erro => this.exibirError(erro))

     );
  }

  async exibirError(erro) {
    const toast = await this.toastController.create({
      message: 'Erro ao consultar a API!',
      duration: 2000,
      color: 'danger',
      position: 'middle'
    });
    toast.present();
    return null;
  }
}
