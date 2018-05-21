import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-painel',
  templateUrl: 'painel.html'
})
export class PainelPage {

  constructor(public navCtrl: NavController) {

  }

  doRefresh(refresher) {
    console.log('Sincronização iniciada', refresher);

    setTimeout(() => {
      console.log('Sincronização concluida');
      refresher.complete();
    }, 3000);
  }

}
