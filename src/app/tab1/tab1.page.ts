import { IFilme } from './../models/IFilme.model';
import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { ToastController } from '@ionic/angular';


@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

   titulo = 'Videos';

  listaVideos: IFilme[] = [

       // Para adicionar novos filmes, é só copiar com os colchetes o conteúdo entre eles e separa cada filme com uma virgula( , ).

        {
      nome: 'A Guerra do Amanhã (2021)',
      lancamento: '02/07/2021',
      duracao: '2h:18m',
      classificacao: '91',
      cartaz: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/bLnJld3yWPB6KGS2uxhmGMhww8x.jpg',
      generos: ['Ação', 'Ficção científica']

    },

    {
      nome: 'Liga da Justiça de Zack Snyder (2021)',
      lancamento: '18/03/2021',
      duracao: '4h 2m',
      classificacao: '76',
      cartaz: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/ArWn6gCi61b3b3hclD2L0LOk66k.jpg',
      generos: ['Ação', 'Aventura', 'Fantasia', 'Ficção científica']

    },


    {
      nome: 'Céu Vermelho-Sangue (2021)',
      lancamento: '23/07/2021',
      duracao: '2h 1m',
      classificacao: '82',
      cartaz: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/zacyfceQWlgA1PbL7PCs8bRTPsI.jpg',
      generos: ['Ação', 'Terror']

    }



  ];


  constructor(public alertController: AlertController, public toastController: ToastController) {  }

  async exibirAlertaFavorito() {
    const alert = await this.alertController.create({

      header: 'Alerta!',
      message: 'Deseja realmente favoritar o filme?',
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          handler: (blah) => {
            console.log('Confirm Cancel: blah');
          }
        }, {
          text: 'SIM, favoritar',
          handler: () => {
            this.apresentarToast();
          }
        }
      ]
    });

    await alert.present();
  }

  async apresentarToast() {
    const toast = await this.toastController.create({
      message: 'Filme adicionado aos favoritos.',
      duration: 2000,
      color: 'success'
    });
    toast.present();
  }

}
