import { Component, OnInit } from '@angular/core';
import { FirebaseService } from '../../../services/firebase/firebase.service';
import { Router, ActivatedRoute, Params } from "@angular/router";
import {ROUTE_NAMES} from "../../../const/route.names.const.js'";
@Component({
  selector: 'app-listing',
  templateUrl: './listing.component.html',
  styleUrls: ['./listing.component.scss']
})
export class ListingComponent implements OnInit {
  id:any;
  listing:any;
  imageUrl:string;
  routerListing:string = ROUTE_NAMES.LISTINGS;

  constructor(
    private _fbService: FirebaseService,
    private _router: Router,
    private _route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.id = this._route.snapshot.params['id'];

    this._fbService.getListingDetails(this.id).subscribe((resp) => {
      console.log("Listing  ", resp);
       this.listing = resp;
       this._fbService.getImageUrl(resp.path,(imageUrl)=>{
        this.imageUrl = imageUrl;
       }) 
    })
  }

 

}
