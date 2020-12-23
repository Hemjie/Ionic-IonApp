import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MeteoService {

  constructor(private http: HttpClient) { }

  // Permet de récupérer la météo d'une ville sur l'API
  getMeteo(city: string) {
    return this.http.get('https://prevision-meteo.ch/services/json/'+city).toPromise();
  }
}
