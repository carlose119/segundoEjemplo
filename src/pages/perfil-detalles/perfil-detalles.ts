import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';

/**
 * Generated class for the PerfilDetallesPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-perfil-detalles',
  templateUrl: 'perfil-detalles.html',
})
export class PerfilDetallesPage {

  user:           any;
  playlists:      any;
  totalCanciones:   number;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public viewCtrl:  ViewController
  ) {
    this.user      = this.navParams.get('user');
    this.playlists = this.navParams.get('playlists');

    this.totalCanciones = 0;
    this.playlists.map( playlist => this.totalCanciones += playlist.nb_tracks);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PerfilDetallesPage');
  }

  close(){
    this.viewCtrl.dismiss({ retornar: "parametros al padre" });
  }

}
