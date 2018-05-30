import { DatasharedService } from './../datashared.service';
import { AutheticationProfileServiceService } from '../AutheticationProfileService.service';
import { Component, OnInit} from '@angular/core';
import { Observable } from 'rxjs/Observable';

import {
  AuthService,
  FacebookLoginProvider,
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
  emialId: any;
  firstName: any;
  lastName: any;
  dob: any;
  constructor( private socialAuthService: AuthService,
              private autheticationProfileServiceService: AutheticationProfileServiceService,
              private router: Router,
              private dataService: DatasharedService ) {}

  ngOnInit() {
  }


  public socialSignIn(socialPlatform: string) {
    let socialPlatformProvider;
    if (socialPlatform === 'facebook') {
      socialPlatformProvider = FacebookLoginProvider.PROVIDER_ID;
    } else if (socialPlatform === 'google') {
      socialPlatformProvider = GoogleLoginProvider.PROVIDER_ID;
    }

    this.socialAuthService.signIn(socialPlatformProvider).then(
      (userData) => {
        this.name = userData.name;
        this.email = userData.email;
        this.autheticationProfileServiceService.getLoggedUserData()
        .subscribe(
          (loggeddata: any) => {
            this.data = loggeddata,
            this.dataService.datafromLogin = loggeddata;
            this.router.navigate(['/home']);
          }
        );
      }
    );
  }

}
