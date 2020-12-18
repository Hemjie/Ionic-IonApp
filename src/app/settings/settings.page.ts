import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.page.html',
  styleUrls: ['./settings.page.scss'],
})
export class SettingsPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  // Active ou non le dark mode sur l'application
  toggleDarkMode() {
    //on ajout ou on supprime la classe dark de body
    document.body.classList.toggle('dark');
  }

}
