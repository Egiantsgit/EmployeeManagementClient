import { Component, OnInit } from '@angular/core';
  import { ProfileService } from './../../shared/profile.service';
  import { DatasharedService } from './../../datashared.service';
  
  @Component({
    selector: 'app-marketingnav',
    templateUrl: './marketingnav.component.html',
    styleUrls: ['./marketingnav.component.css']
  })
  export class MarketingnavComponent implements OnInit {
    profileData: any;

  constructor(private profile: ProfileService) {
   }

  ngOnInit() {
    this.profile.getUserProfileData().subscribe(
     (data: any) => {
      this.profileData = data;
     },
     (err: any) => {
       console.log('Could not find the user profile data');
     }
    );


  }

}
  