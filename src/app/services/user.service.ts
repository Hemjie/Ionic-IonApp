import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  /**
   * Ici, je précise que j'ai besoin du service HttpClient pour 
   * pouvoir faire des requêtes sur une API
   */

  constructor(private http: HttpClient) { }

  // Permet de récupérer les users sur l'API
  getUsers(page: number = 1) {
    //le seed annule le random
    //on aura 20 résultats par page
    return this.http.get('https://randomuser.me/api/?results=20&page='+page+'&seed=m2i').toPromise();
  }
}
