import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ToastController } from 'ionic-angular';
import { LoadingController } from 'ionic-angular';
import { MinhaSenhaPage } from '../minhaSenha/minhaSenha';

@Component({
  selector: 'page-gerarSenha',
  templateUrl: 'gerarSenha.html'
})
export class GerarSenhaPage {

  constructor(public navCtrl: NavController, private toastCtrl: ToastController, public loadingCtrl: LoadingController) {
  }


  gerarSenha() {

    //GERAR SENHA AQUI DENTRO





    //colocar código de gerar senh AQUI não mexer lá embaixo//




    //FIM


    let toast = this.toastCtrl.create({
      message: 'Senha gerada com sucesso! Visualize-a em Minha Senha.',
      position: 'top',
      showCloseButton: true,
      closeButtonText: 'Entendi',
      cssClass: 'toastcontainer',

    });

    toast.onDidDismiss(() => {
      console.log('Dismissed toast');

    });

    toast.present();


    let loader = this.loadingCtrl.create({
      content: "Gerando senha...",
      duration: 100
    });
    loader.present();
  }

}

