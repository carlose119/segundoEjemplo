import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { BuscarPage } from '../pages/buscar/buscar';
import { DetailsPage } from '../pages/details/details';
import { AcercaPage } from '../pages/acerca/acerca';
import { PerfilesPage } from '../pages/perfiles/perfiles';
import { PlaylistsPage } from '../pages/playlists/playlists';
import { CancionesPage } from '../pages/canciones/canciones';
import { PerfilDetallesPage } from '../pages/perfil-detalles/perfil-detalles';
import { PaginaBitcointravelPage } from '../pages/pagina-bitcointravel/pagina-bitcointravel';
import { PaginaTuagencia24Page } from '../pages/pagina-tuagencia24/pagina-tuagencia24';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { GithubProvider } from '../providers/github/github';
import { DeezerServiceProvider } from '../providers/deezer-service/deezer-service';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    BuscarPage,
    DetailsPage,
    AcercaPage,
    PerfilesPage,
    PlaylistsPage,
    CancionesPage,
    PerfilDetallesPage,
    PaginaBitcointravelPage,
    PaginaTuagencia24Page
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    BuscarPage,
    DetailsPage,
    AcercaPage,
    PerfilesPage,
    PlaylistsPage,
    CancionesPage,
    PerfilDetallesPage,
    PaginaBitcointravelPage,
    PaginaTuagencia24Page
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    GithubProvider,
    DeezerServiceProvider
  ]
})
export class AppModule {}
