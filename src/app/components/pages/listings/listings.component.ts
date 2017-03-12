import { Component, OnInit } from '@angular/core';
import {FirebaseService} from '../../../services/firebase/firebase.service';
import {ROUTE_NAMES} from "../../../const/route.names.const.js'";
@Component({
  selector: 'app-listings',
  templateUrl: './listings.component.html',
  styleUrls: ['./listings.component.scss']
})
export class ListingsComponent implements OnInit {

  constructor(private _fbService:FirebaseService) { }
  listings:any[];
  routerListing = ROUTE_NAMES.LISTINGS;

  ngOnInit() {
    
    this._fbService.getListings().subscribe( (resp)=>{
      console.log("LISTINGS ", resp);
      this.listings = resp
    })
  }

}
