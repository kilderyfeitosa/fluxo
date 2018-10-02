import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import {Tela4Page} from '../tela4/tela4';

/**
 * Generated class for the Tela3Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-tela3',
  templateUrl: 'tela3.html',
})
export class Tela3Page {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  pushTela(){
    this.navCtrl.push(Tela4Page);
  }

  popTela(){
    this.navCtrl.pop();
  }

  popRoot(){
    this.navCtrl.popToRoot();
  }


  ionViewDidLoad() {
    console.log('ionViewDidLoad Tela3Page');
  }

}
