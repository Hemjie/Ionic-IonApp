import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.page.html',
  styleUrls: ['./settings.page.scss'],
})
export class SettingsPage implements OnInit {
  //objet qui va stocker toutes les infos
  settings = {
    username: '',
    city: '',
    darkMode: false,
  };

  //Booléen pour savoir si on affiche une icône de chargement
  saving = false;

  //Booléen quand enregistrement terminé
  success = false;

  constructor(private storage: Storage) { }

  //quand on arrive sur la page Settings, on va récupérer les données du téléphone
  ngOnInit() {
    this.storage.get('settings').then(settings => {
      //on vérifie bien qu'il y a des settings dans le storage
      if (settings !== null) {
        this.settings = settings;
      }
    } );
  }

  // Active ou non le dark mode sur l'application
  toggleDarkMode() {
    //on ajout ou on supprime la classe dark de body
    document.body.classList.toggle('dark');
  }

  // Enregistre les données du formulaire 
  save() {
    console.log(this.settings);
    //on va utiliser le service storage pout stocker les valeurs dans le téléphone
    this.saving = true; //chargement en cours...
    this.storage.set('settings', this.settings).then(() => {
      setTimeout(() => this.saving = false, 2000); //chargement terminé, promesse tenue
      setTimeout(() => this.success = true, 2000);
      setTimeout(() => this.success = false, 10000);
    });
  }

  //suppression des données sur le téléphone
  removeData() {
    this.storage.remove('settings');
    // on doit faire un reset de l'objet settings
    this.settings = {
      username: '',
      city: '',
      darkMode: false,
    }
  }

}
