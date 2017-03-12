
import { Injectable, EventEmitter } from '@angular/core';


import { RequestOptions, Headers, Http } from "@angular/http";
import { AppConstants } from "../const/app.constants";
import { ROUTE_NAMES } from "../const/route.names.const.js'";

@Injectable()
export class AppService {

  constructor(private _http: Http) { }
  // public pageLinks:any[]  = [];
  public pageLinks: any[] = [
    {
    id: 0,
    parent: [ROUTE_NAMES.ROOT, ROUTE_NAMES.HOME, ROUTE_NAMES.LOGIN],
    links: [
      {
        label: "Home",
        url: ROUTE_NAMES.HOME,
        icon: "",
        show: true,
        isRoute: true,
        id: 0
      }, {

        label: "Listings",
        url: ROUTE_NAMES.LISTINGS,
        icon: "",
        isRoute: true,
        show: true,
        id: 1
      }]
    },
      {
        id: 1,
        parent: [ROUTE_NAMES.LISTINGS ,ROUTE_NAMES.ADD_LISTING+"/:id"],
        links: [
          {
            label: "Home",
            url: ROUTE_NAMES.HOME,
            icon: "",
            show: true,
            isRoute: true,
            id: 0
          },
          {
            label: "Listings",
            url: ROUTE_NAMES.LISTINGS,
            icon: "",
            show: true,
            isRoute: true,
            id: 1
          },{
            label: "Edit",
            url: ROUTE_NAMES.EDIT_LISTING,
            icon: "",
            show: true,
            isRoute: true,
            id: 2
          }, {

            label: "Add",
            url: ROUTE_NAMES.ADD_LISTING,
            icon: "",
            isRoute: true,
            show: true,
            id: 3
          }
        ]
      }
        // }, {
        //   id: 1,
        //   parent:[ROUTE_NAMES.HOME,ROUTE_NAMES.LISTINGS],
        //   links: [{
        //     label: "Save",
        //     url: ROUTE_NAMES.SAVE,
        //     icon:"glyphicon-floppy-disk",
        //     isRoute:false,
        //     show:false,
        //     id: 0
        //   },
        //   {
        //       label: "Project",
        //       url: ROUTE_NAMES.PROJECT,
        //       icon:"glyphicon-folder-open",
        //       isRoute:false,
        //       show:true,
        //       id: 1
        //   },
        //   {
        //     label: "Logout",
        //     url: ROUTE_NAMES.LOGOUT,
        //     icon:"glyphicon-log-out",
        //     isRoute:false,
        //     show:true,
        //     id: 2
        //   }]
      ];

    public appTitle: string = AppConstants.APP_NAME;



    public getLinksByURL(url: string): any[] {
      var items: any[] = this.pageLinks.filter((item, index) =>
        item.parent.indexOf(url) > -1);
      return items.length ? items[0].links : [];

    }

  public routeChangeEmitter: EventEmitter < any > = new EventEmitter();
    public globalChangeEmitter: EventEmitter < any > = new EventEmitter();

    public getPageLinksById(id: number): any[] {
      return this.pageLinks.filter((item: any, index: number) => item.id === id)[0];
    }

  public getRequestOptions(): RequestOptions {
      return new RequestOptions({ headers: new Headers({ 'Content-Type': 'application/json' }) });
    }

    //   public getReleasedVersion(): Observable<any> {
    //     let options       = this.getRequestOptions();
    //     return this._http.get(URL_CONST.APP_VERSION_JSON, options)
    //       .map(
    //         res => res.json()
    //       )
    //       .catch((error:any) => Observable.throw(error.json().error || 'Server error')); //...errors if any

    //   }

  }

// export class URL_CONST {
//   public static  APP_VERSION_JSON:string = "/releasedVersion.json"
// }

export class ILink {
  label: string;
  url: string;
  id: number;
}

