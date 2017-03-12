import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import {AppService} from "../../services/app.service";
import {STATUS_CODES} from "http";
import {ROUTE_NAMES} from "../../const/route.names.const.js'";
import {AngularFire} from "angularfire2"
import {FlashMessagesService } from "angular2-flash-messages";

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})


export class NavComponent implements OnInit {

  public currentRoute:string = ROUTE_NAMES.ROOT;
  public links:any[] = [];
  public saveDisabled:boolean = true;

  @Input() appTitle:string ;
  @Input() appSubTitle:string;

  constructor(
    private _fm:FlashMessagesService,
    private _af:AngularFire,
    private _router:Router, private _appService:AppService) {
    let self = this;
    this._router.events.subscribe((url:any)=> self.routeChange(url) );

  }

  public routeChange(url:any):void{
    this.currentRoute = this._router.url;
    this.links = this._appService.getLinksByURL(this.currentRoute);
  }

  public linkClick(link:string):void{
    
    this._appService.routeChangeEmitter.emit(link);
  }

  login(){
    this._af.auth.login();
  }

  logout(){
    this._af.auth.logout();
    this._fm.show("YOU ARE LOGGED OUT",{cssClass:"alert-success",timeout:3000});
  }
  

  ngOnInit() {
    // this._appService.globalChangeEmitter.subscribe( (args)=>{
    //   if(args.name === "projectStatus" && (
    //     args.data===PROJECT_STATUS.STATUS_COMPLETE || args.data===PROJECT_STATUS.STATUS_BEGIN) ){
    //     this.saveDisabled = true;
    //   }else{
    //     this.saveDisabled = false;
    //   }
    // })



  }
 
}
