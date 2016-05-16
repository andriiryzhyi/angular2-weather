import {WeatherItemComponent} from "./weather-item.component";
import {Component} from "angular2/core";

@Component({
  selector: 'weather-list',
  template: `
    <section>
      <weather-item></weather-item>
    </section>
  `,
  directives: [WeatherItemComponent]
})
export class WeatherListComponent {

}
