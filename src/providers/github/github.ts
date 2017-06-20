import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the GithubProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
@Injectable()
export class GithubProvider {

  public githutApi = '';

  constructor(public http: Http) {
    this.githutApi = "https://api.github.com";
    //this.githutApi = "/githutApi/";

    console.log('Hello GithubProvider Provider');
  }

  getRepos(username) {
    let repos = this.http.get(this.githutApi + '/users/' + username + '/repos');
    return repos;
  }

  getDetails(repo) {
    let headers = new Headers();
    headers.append('Accept', 'application/vnd.github.VERSION.html');

    return this.http.get(`${repo.url}/readme`, { headers: headers });
  }

}
