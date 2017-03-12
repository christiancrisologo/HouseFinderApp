import { Component, OnInit } from '@angular/core';
import { FirebaseService, ListingVO } from '../../../services/firebase/firebase.service';
import { ROUTE_NAMES } from "../../../const/route.names.const.js'";
import { Router, ActivatedRoute, Params } from "@angular/router";
@Component({
  selector: 'app-add-listing',
  templateUrl: './add-listing.component.html',
  styleUrls: ['./add-listing.component.scss']
})
export class AddListingComponent implements OnInit {
  backRoute: string = ROUTE_NAMES.LISTINGS;
  listingData: ListingVO = new ListingVO();
 

  constructor(private _fbService: FirebaseService,
    private router: Router) { }

  ngOnInit() {

  }

  onSubmit(e) {
    e.preventDefault();
    console.log('listing data ', this.listingData);
    this._fbService.addListing(this.listingData).subscribe(resp => {
      this.router.navigate([ROUTE_NAMES.LISTINGS.substr(1)]);
    });



  }
}
