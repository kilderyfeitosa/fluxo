import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { Tela1Page } from '../pages/tela1/tela1';
import { Tela2Page } from '../pages/tela2/tela2';
import { Tela3Page } from '../pages/tela3/tela3';
import { Tela4Page } from '../pages/tela4/tela4';


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    Tela1Page,
    Tela2Page,
    Tela3Page,
    Tela4Page
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    Tela1Page,
    Tela2Page,
    Tela3Page,
    Tela4Page
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
