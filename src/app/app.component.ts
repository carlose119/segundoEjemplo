import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { BuscarPage } from '../pages/buscar/buscar';
import { AcercaPage } from '../pages/acerca/acerca';
import { PerfilesPage } from '../pages/perfiles/perfiles';
import { PaginaBitcointravelPage } from '../pages/pagina-bitcointravel/pagina-bitcointravel';
import { PaginaTuagencia24Page } from '../pages/pagina-tuagencia24/pagina-tuagencia24';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = HomePage;

  pages: Array<{title: string, component: any, icon: string }>;

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Inicio', component: HomePage, icon: 'home' },
      { title: 'Lista', component: ListPage, icon: 'list' },
      { title: 'Buscar', component: BuscarPage, icon: 'mail' },
      { title: 'Deezer', component: PerfilesPage, icon: 'person' },
      { title: 'Acerca de', component: AcercaPage, icon: 'information-circle' },
      { title: 'http://bitcointravel.mobi/', component: PaginaBitcointravelPage, icon: 'cloud' },
      { title: 'http://dev.tuagencia24.com/web/', component: PaginaTuagencia24Page, icon: 'cloud' }
    ];

  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
}
