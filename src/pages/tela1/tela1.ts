import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Tela2Page } from '../tela2/tela2';

/**
 * Generated class for the Tela1Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-tela1',
  templateUrl: 'tela1.html',
})
export class Tela1Page {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Tela1Page');
  }

  pushTela(){
    this.navCtrl.push(Tela2Page);
  }

  popTela(){
    this.navCtrl.pop();
  }

  popRoot(){
    this.navCtrl.popToRoot();
  }

}
