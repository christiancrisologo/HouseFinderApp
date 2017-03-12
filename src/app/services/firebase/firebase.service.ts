import { Injectable } from '@angular/core';
import { AngularFire, FirebaseListObservable, FirebaseObjectObservable, AuthMethods } from 'angularfire2';
import * as firebase from 'firebase';
import {Observable} from "rxjs";

@Injectable()
export class FirebaseService {
  listings: FirebaseListObservable<any[]>;
  listing: FirebaseObjectObservable<any>;
  folder: any;

  constructor(private _af: AngularFire) {
    this.folder = 'imageFolder';
  }

  login() {
    this._af.auth.login();
  }

  logout() {
    this._af.auth.logout();
  }

  getListings() {

    this.listings = this._af.database.list('/tm/listings/') as FirebaseListObservable<Listing[]>;
    return this.listings;

  }

  getListingDetails(id: any) {
    this.listing = this._af.database.object('/tm/listings/' + id) as FirebaseObjectObservable<Listing>;
    return this.listing;

  }

  addListing(newListing) {
    // this.listings.push(newListing);   
    let storageRef = firebase.storage().ref();


    for (let selectedFile of [(<HTMLInputElement>document.getElementById('image')).files[0]]) {
      let path = `/${this.folder}/${selectedFile.name}`;
      let iRef = storageRef.child(path);
      iRef.put(selectedFile).then((snapshot) => {
        newListing.image = selectedFile.name;
        newListing.path = path;
        return this.listings.push(newListing);
      });
    }

    return this.listings;
  }

  getImageUrl(path,callback) {

    let storageRef = firebase.storage().ref();
    let spaceRef = storageRef.child(path);
    storageRef.child(path).getDownloadURL().then((url) => {
      // Set image url
      callback( url );
    }).catch((error) => {
      console.log(error);
    });

  }


}


export interface Listing {
  $key?: string;
  title?: string;
  type?: string;
  image?: string;
  city?: string;
  owner?: string;
  bedrooms?: string;
}

export class ListingVO {
  title: any;
  owner: any;
  city: any;
  bedrooms: any;
  price: any;
  type: any;
  image: any;
  constructor() {

  }

}