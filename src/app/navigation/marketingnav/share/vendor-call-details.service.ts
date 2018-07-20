import { Injectable } from '@angular/core';
import { VendorClass } from './vendor-class.model';
import { Http, Response, Headers, ResponseOptions, RequestMethod, RequestOptions} from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
@Injectable({
  providedIn: 'root'
})
export class VendorCallDetailsService {
  selectedVendor: VendorClass;

  constructor(private http: Http) { }
  postVendorCall(vendorCall: VendorClass){
    var body = JSON.stringify(vendorCall);
    var headerOptions = new Headers({'Content-Type':'application/json'});
    var requestOptions = new RequestOptions({method : RequestMethod.Post, headers : headerOptions});
    return this.http.post('url', body, requestOptions).map(x => x.json());
  }
}
