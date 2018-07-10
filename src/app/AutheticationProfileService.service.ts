import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';

/**
 * 
  This class is used to Authenticate the logged in user.
  And we follow Google Mechanism
 * 
 */
@Injectable({
  providedIn: 'root'
})
export class AutheticationProfileServiceService {

  constructor(private http: HttpClient) {
    //Empty Constructor
  }

  //get Service to fetch the logged in user data using emailId as key.
  getLoggedUserData(emailId): any {
    return this.http.get('/users/user/'+emailId);
  }
  
}
