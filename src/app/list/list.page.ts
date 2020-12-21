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
  skeletons= [0,1,2,3,4,5,6,7,8,9];
  //on utilisera this.page pour se situer dans la pagination
  page = 1;

  constructor(
    private userService: UserService,
    private router: Router) { }

  //Cette méthode s'exécute au 1er chargement du composant dans l'application
  ngOnInit() {}

  //cette méthode s'exécute à chaque fois qu'on se rend sur la page
  ionViewWillEnter() {
    this.listUsers = []; //on remet la liste à zéro à chaque fois qu'on vient sur la page

    this.userService.getUsers(this.page).then(users => {
      //le setTimeout permet de tester le skeleton
      setTimeout(() => this.listUsers = users['results'], 2000);
    });
  }

  //Permet d'ouvrir une page user
  openUser(user) {

    //J'ouvre une nouvelle fenêtre sur la route user-detail
    //en 2eme paramètre, on passe le user dont on veut voir les infos

    this.router.navigate(['/user-detail'], {state: {keyUser: user}});
  }

  //permet de charger les users suivant lors du scroll infini
  loadData(event) {
    console.log(event);
    //Appel du service sur la prochaine page
    this.page++; //page 2 si on est sur la page 1 etc...
    this.userService.getUsers(this.page).then(users => {
      //on doit ajouter les users récupérés (users) dans le tableau existant (this.users)
      //on veut bien 40 utiliseurs sur la page 2
      //on doit donc avoir 40 users dans this.users (concat...)
      //on doit appeler la méthode complete() du ion infinite pour "arrêter" le chargement
      //idéalement, on s'arrête quand on a 100 users (voir disabled du ion infinite)
      console.log(users);



    });
  }

}
