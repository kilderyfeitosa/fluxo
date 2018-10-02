import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Tela3Page } from '../tela3/tela3';

/**
 * Generated class for the Tela2Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-tela2',
  templateUrl: 'tela2.html',
})
export class Tela2Page {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  pushTela(){
    this.navCtrl.push(Tela3Page);
  }

  popTela(){
    this.navCtrl.pop();
  }

  popRoot(){
    this.navCtrl.popToRoot();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Tela2Page');
  }

}
