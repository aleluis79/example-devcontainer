import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  http = inject(HttpClient)

  getTemperatures() : Observable<Temperature[]> {
    return this.http.get<Temperature[]>(`http://${window.location.hostname}:5000/WeatherForecast`)
  }

}

export interface Temperature {
  date:         Date;
  temperatureC: number;
  temperatureF: number;
  summary:      string;
}
