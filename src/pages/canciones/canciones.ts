import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';

import { DeezerServiceProvider } from '../../providers/deezer-service/deezer-service';

@IonicPage()
@Component({
  selector: 'page-canciones',
  templateUrl: 'canciones.html',
  providers: [ DeezerServiceProvider ]
})
export class CancionesPage {

  public playlist: any;
  public songs: any;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public ds:          DeezerServiceProvider,
    public loadingCtrl: LoadingController,
  ) {
    this.playlist = this.navParams.get('playlist')
    this.songs    = []; 
  }

  ionViewDidLoad() {
    let loader= this.loadingCtrl.create();
    loader.present();
    this.ds.getPlaylistSongs(this.playlist.id).subscribe( data => {
      this.songs = data.data;
      loader.dismiss();
    })
  }

}
