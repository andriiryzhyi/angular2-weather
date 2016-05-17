import {Component, Input} from "angular2/core";
import {WeatherItem} from "./weather-item";

@Component({
  selector: 'weather-item',
  template: `
    <article class="weather-element">
      <div class="col-1">
        <h3>{{weatherItem.cityName}}</h3>
        <p class="info">{{weatherItem.description}}</p>
        <img src="//openweathermap.org/img/w/{{weatherItem.icon}}.png">
      </div>
      <div class="col-2">
        <span class="temperature">{{weatherItem.temperature}}&#8451;</span>
      </div>
    </article>
  `,
  styleUrls: ['src/css/weather-item.css'],
  inputs: ['weatherItem: item']
})
export class WeatherItemComponent {
  // @Input('item') weatherItem: WeatherItem;
}
