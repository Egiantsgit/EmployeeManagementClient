import { Injectable } from '@angular/core';
import {Http,Response, Headers, RequestOptions} from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import { PersonalDetails } from './shared/personal-details';

@Injectable({
  providedIn: 'root'
})
export class DatasharedService {
datafromLogin: any;
private _baseUrl: string = 'http://localhost:8082/users/user';
private headers = new Headers({'Content-Type':'application/json'});
private options = new RequestOptions({headers:this.headers});
private personalDetails = new PersonalDetails;
constructor(private http: Http) { }
create(){
  return this.http.post(this._baseUrl,JSON.stringify(PersonalDetails),this.options).map((response:Response)=>response.json).catch(this.errorHandler)
}

errorHandler(error: Response){
  return Observable.throw(error || "SERVER ERROR");
}

setter(personalDetails:PersonalDetails ){
this.personalDetails = personalDetails;
}

getter(){
return this.personalDetails;
}

}
