import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.page.html',
  styleUrls: ['./list.page.scss'],
})
export class ListPage implements OnInit {
  listUsers = [];

  constructor(
    private userService: UserService,
    private router: Router) { }

  //Cette méthode s'exécute au 1er chargement du composant dans l'application
  ngOnInit() {
    console.log("une seule fois au chargement de la page...");
  }

  //cette méthode s'exécute à chaque fois qu'on se rend sur la page
  ionViewWillEnter() {
    this.userService.getUsers().then(users => {
      console.log(users);
      this.listUsers = users['results'];
    });
  }

  //Permet d'ouvrir une page user
  openUser(user) {

    //J'ouvre une nouvelle fenêtre sur la route user-detail
    //en 2eme paramètre, on passe le user dont on veut voir les infos

    this.router.navigate(['/user-detail'], {state: {keyUser: user}});
  }

}
