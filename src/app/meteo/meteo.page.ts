import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage';
import { MeteoService } from '../services/meteo.service';

@Component({
  selector: 'app-meteo',
  templateUrl: './meteo.page.html',
  styleUrls: ['./meteo.page.scss'],
})
export class MeteoPage implements OnInit {
  lat: number;
  long: number;
  settingsM: any = {};
  meteo: any = {}; //objet où on va stocker la météo de la ville choisie

  constructor(
    private storage: Storage,
    private meteoService: MeteoService
  ) { }

  ngOnInit() {
  }

  //settingsM, de la page météo
  //settingsP, de la promesse
  //settings, de la page settings et du storage

  ionViewWillEnter() {
    // On récupère les settings définis auparavant dans le téléphone
    this.storage.get('settings').then(settingsP => {
      if (settingsP === null || !settingsP.city) {
        // Ville par défaut si jamais il n'a pas fait ses réglages
        this.settingsM.city = 'Paris';
      } else {
        //si on a bien des settings dans le phone, on les récupère
        this.settingsM = settingsP;
      }

      // Ok, on a la ville. On peut chercher sa météo
      this.meteoService.getMeteo(this.settingsM.city).then(meteoP => {
        this.meteo = meteoP;

        this.lat = (this.meteo.city_info.latitude * 100);
        this.lat = Math.round(this.lat) /100;

        this.long = (this.meteo.city_info.longitude * 100);
        this.long = Math.round(this.long) /100;
      });
    });
  }

}
