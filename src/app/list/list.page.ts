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
  skeletons= [0,1,2,3,4,5,6,7,8,9]

  constructor(
    private userService: UserService,
    private router: Router) { }

  //Cette méthode s'exécute au 1er chargement du composant dans l'application
  ngOnInit() {
    console.log("une seule fois au chargement de la page...");
  }

  //cette méthode s'exécute à chaque fois qu'on se rend sur la page
  ionViewWillEnter() {
    this.listUsers = []; //on remet la liste à zéro à chaque fois qu'on vient sur la page

    this.userService.getUsers().then(users => {
      console.log(users);
      //le setTimeout permet de tester le skeleton
      setTimeout(() => this.listUsers = users['results'], 5000);
    });
  }

  //Permet d'ouvrir une page user
  openUser(user) {

    //J'ouvre une nouvelle fenêtre sur la route user-detail
    //en 2eme paramètre, on passe le user dont on veut voir les infos

    this.router.navigate(['/user-detail'], {state: {keyUser: user}});
  }

}
