import { Component } from '@angular/core';

import { MenuController, Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  constructor(
    private platform: Platform, //infos sur le smartphone
    private splashScreen: SplashScreen, //au lancement, image de fond
    private statusBar: StatusBar, //petite barre en haut de l'écran (heure, batterie...)
    private menu: MenuController, //permet de contrôler le menu
    private storage: Storage,
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();

      
      //Vérifie si dark mode coché dans settings au lancement de l'appli
      this.storage.get('settings').then(settings => {
        if (settings !== null && settings.darkMode) {
          document.body.classList.toggle('dark');
        }
      })
    });  
  }

  //Permet de fermer le menu
  closeMenu() {
    this.menu.close();
  }

}
