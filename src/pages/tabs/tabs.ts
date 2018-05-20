import { Component } from '@angular/core';

import { MinhaSenhaPage } from '../minhaSenha/minhaSenha';
import { PainelPage } from '../painel/painel';
import { GerarSenhaPage } from '../gerarSenha/gerarSenha';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = GerarSenhaPage;
  tab2Root = MinhaSenhaPage;
  tab3Root = PainelPage;

  constructor() {

  }
}
