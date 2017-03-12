import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/pages/home/home.component';
import { AppComponent } from './app.component';
import { ListingsComponent } from './components/pages/listings/listings.component';
import { AddListingComponent } from './components/pages/add-listing/add-listing.component';
import { EditListingComponent } from './components/pages/edit-listing/edit-listing.component';

import { ListingComponent } from './components/pages/listing/listing.component';

import {ROUTE_NAMES} from "./const/route.names.const.js'";


const routes: Routes = [
  {
    path: '',
    children: []
  },
  {path:'',component:HomeComponent},
  {path:ROUTE_NAMES.HOME.substr(1),component:HomeComponent},
  {path:ROUTE_NAMES.LISTINGS.substr(1), component:ListingsComponent},
  {path:ROUTE_NAMES.LISTING.substr(1)+"/:id", component:ListingComponent},
  {path:ROUTE_NAMES.EDIT_LISTING.substr(1), component:EditListingComponent},
  {path:ROUTE_NAMES.ADD_LISTING.substr(1), component:AddListingComponent}
  
];
 
// const appRoutes: Routes = [
//   {path:'',component:HomeComponent},
//   {path:'Listings',component:ListingsComponent}
// ]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})

export class AppRoutingModule { }

