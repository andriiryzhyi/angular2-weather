import {WeatherItem} from "./weather-item";
import {Http} from "angular2/http";
import {Observable} from "rxjs/Observable";
import {Injectable} from "angular2/core";
import {WEATHER_ITEMS} from "./weather.data";
import 'rxjs/Rx';
@Injectable()
export class WeatherService {

  constructor(private _http: Http) {

  }

  getWeatherItems() {
    return WEATHER_ITEMS;
  }

  addWeatherItem(weatherItem: WeatherItem) {
    WEATHER_ITEMS.push(weatherItem);
  }

  searchWeatherData(cityName: string): Observable<any> {
    return this._http.get('//api.openweathermap.org/data/2.5/weather?q=' + cityName + '&APPID=10b6909f93442b41be1f1aea1619cf98&units=metric')
            .map(response => response.json())
            .catch(error => {
                console.error(error);
                return Observable.throw(error.json())
            });
  }
}
