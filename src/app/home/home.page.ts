import { Component } from '@angular/core';
import { Camera } from '@ionic-native/camera/ngx';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  listImages = [];

  constructor(
    private camera: Camera,
    private alert: AlertController
    ) {}

  //faire appel au service camera pour utiliser l'appareil photo
  takePicture() {
    //on dit que l'on veut l'image au format base 64 au lieu d'un fichier
    let options = {
      destinationType : this.camera.DestinationType.DATA_URL
    };
    this.camera.getPicture(options).then(image => {
      //on récupère la photo dans image
      this.listImages.push('data:image/png;base64,'+image);

      //on crée une alerte pour débugger l'image
      this.alert.create({ //retourne une promesse
        message: 'Salut! '+image
      }).then(alert => alert.present()); //affiche l'alerte
    });
  }

}
