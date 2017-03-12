import { Component, OnInit } from '@angular/core';
import { AngularFire } from "angularfire2"
import { FlashMessagesService } from "angular2-flash-messages";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(
    private _fm: FlashMessagesService,
    private _af: AngularFire ) { }

  ngOnInit() {
  }

  login() {
    this._af.auth.login();
  }

}
