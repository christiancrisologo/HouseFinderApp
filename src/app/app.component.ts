import { Component } from '@angular/core';
import {AppConstants} from './const/app.constants';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app works!';

  public appName:string = AppConstants.APP_NAME;
  public appTitle: string = this.appName;

}
