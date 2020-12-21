import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.page.html',
  styleUrls: ['./list.page.scss'],
})
export class ListPage implements OnInit {
  listUsers = [];

  constructor(private userService: UserService) { }

  //Petit souci à vérifier au niveau du chargement
  ngOnInit() {
    this.userService.getUsers().then(users => {
      console.log(users);
      this.listUsers = users.['results'];
    });
  }

}
