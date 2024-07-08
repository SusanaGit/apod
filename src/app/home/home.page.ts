import { Component } from '@angular/core';
import {IonHeader, IonToolbar, IonTitle, IonContent, IonImg} from '@ionic/angular/standalone';
import { CapacitorHttp } from "@capacitor/core";

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [IonHeader, IonToolbar, IonTitle, IonContent, IonImg],
})
export class HomePage {

  private urlapi: string;
  public urlPhoto: string;

  constructor() {
    this.urlapi = 'https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY';
    this.getUrlImage().then((urlPhoto) => {
      this.urlPhoto = urlPhoto;
    });
  }

  async getUrlImage(): Promise<string> {

    const url = this.urlapi;

    if (url) {

      const options = {
        url,
        headers: {},
        params: {}
      };

      try {
        const response = await CapacitorHttp.get(options);
        console.log(response.data.url);
        return response.data.url;
      } catch (e) {
        console.error('Error with URL image', e);
      }
    }
    return '';
  }
}
