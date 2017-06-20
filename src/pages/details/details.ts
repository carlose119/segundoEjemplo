import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { GithubProvider } from '../../providers/github/github';

/**
 * Generated class for the DetailsPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-details',
  templateUrl: 'details.html',
  providers: [GithubProvider]
})
export class DetailsPage {

  public readme = '';
  public repo;

  constructor(public navCtrl: NavController, public navParams: NavParams, private github: GithubProvider) {

    this.repo = navParams.get('repo');
        
        this.github.getDetails(this.repo).subscribe(
            data => this.readme = data.text(),
            err => {
                if (err.status == 404) {
                    this.readme = 'Este repo no tiene un README. :(';
                } else {
                    console.error(err);
                }
            },
            () => console.log('getDetails completed')
        );

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DetailsPage');
  }

}
