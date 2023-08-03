import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  weatherUrl: string = "http://localhost:3000/api/weather"
  constructor(private httpClient: HttpClient) { }

  search(cityObj) {
    return this.httpClient.post <{ result: any }> (this.weatherUrl, cityObj);
  }




}
