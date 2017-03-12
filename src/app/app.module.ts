import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/pages/home/home.component';
import { ListingsComponent } from './components/pages/listings/listings.component';
import { AddListingComponent } from './components/pages/add-listing/add-listing.component';
import { EditListingComponent } from './components/pages/edit-listing/edit-listing.component';
import { NavComponent } from './components/nav/nav.component';
import { ListingComponent } from './components/pages/listing/listing.component';

import { AppService } from './services/app.service';
import { AlertModule } from 'ng2-bootstrap';
import { AngularFireModule } from 'angularfire2';
import { FirebaseConfig , FirebaseAuthConfig} from "./services/firebase/firebase.config";
import { FirebaseService } from "./services/firebase/firebase.service"
import {FlashMessagesModule } from "angular2-flash-messages";

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ListingsComponent,
    AddListingComponent,
    EditListingComponent,
    NavComponent,
    ListingComponent,

  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    AlertModule.forRoot(),
    AngularFireModule.initializeApp(FirebaseConfig,FirebaseAuthConfig),
    FlashMessagesModule
  ],
  providers: [AppService,
    AngularFireModule,
    FirebaseService],
  bootstrap: [AppComponent]
})
export class AppModule { }
