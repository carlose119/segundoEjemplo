import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { GithubProvider } from '../../providers/github/github';
import { Observable } from "rxjs/Rx";
import 'rxjs/add/observable/merge';

import { DetailsPage } from '../details/details';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
  providers: [GithubProvider]
})
export class HomePage {

  public foundRepos;
  public username;

  constructor(public navCtrl: NavController, private github: GithubProvider) {

  }

  getRepos(){
    this.github.getRepos(this.username).subscribe(
      data => {
        this.foundRepos = data.json();
      },
      err => console.error(err),
      () => console.log('getRepos Completed')
    );
  }

  goToDetails(repo) {
    this.navCtrl.push(DetailsPage, { repo: repo });
  }

}
