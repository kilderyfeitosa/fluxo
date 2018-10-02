import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import {Tela1Page} from '../tela1/tela1';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }

  pushTela(){
    this.navCtrl.push(Tela1Page);
  }

}
