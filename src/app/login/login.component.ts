import { DatasharedService } from './../datashared.service';
import { AutheticationProfileServiceService } from '../AutheticationProfileService.service';
import { Component, OnInit} from '@angular/core';
import { Observable } from 'rxjs/Observable';
import {
  AuthService,
  GoogleLoginProvider
} from 'angular5-social-login';
import { DOCUMENT } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  name: any;
  email: any;
  data: any;
  emailId: any;
  firstName: any;
  lastName: any;
  dob: any;
  errres: any;
  errcode: any;
  isModelTrigger: boolean;
  isSignupTrigger: boolean;
  constructor( private socialAuthService: AuthService,
              private autheticationProfileServiceService: AutheticationProfileServiceService,
              private router: Router,
              private dataService: DatasharedService ) {}

  ngOnInit() {
  }

  closeClicked() {
    this.isModelTrigger = false;
  }

  signUpClicked() {
    this.isSignupTrigger = false;
  }
  
  
  /**
   * This function is triggered when Sign with Google button is clicked.
   * And, a get operation is done and based on the response from server, we handle on navigating to the user to other pages.
   * 
   */
  public socialSignIn(socialPlatform: string) {
    let socialPlatformProvider;
    if (socialPlatform === 'google') {
      socialPlatformProvider = GoogleLoginProvider.PROVIDER_ID;
    }
    
    this.socialAuthService.signIn(socialPlatformProvider).then(
      (userData) => {
        this.name = userData.name;
        this.email = userData.email;
        this.autheticationProfileServiceService.getLoggedUserData(this.email)
        .subscribe(
          (response: any) => {
            if (response.status === '200') {
            this.dataService.datafromLogin = response;
            this.router.navigate(['/home']);
           }else if (response.status === '205') {
            this.dataService.datafromLogin = response;
            this.router.navigate(['/register']);
           }else if (response.status === '401') {
            this.isModelTrigger = true;
            this.errres = 'Error Message: ' + response.message;
            this.errcode = 'Error Code: ' + response.status;
           }
          },
          error => { 
            //Error Handler
            this.isModelTrigger = true;
            this.errres = 'Error Message: ' + error.message;
            this.errcode = 'Error Code: ' + error.status;
          }
        );
      }
    );
  }
}
