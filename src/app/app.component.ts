import {Component} from '@angular/core';
import {locationPresets} from "./mock/location.mock";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = locationPresets['Sydney'];
}
