import { ProfileService } from './../shared/profile.service';
import { DatasharedService } from './../datashared.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
profileData: any;
today: number = Date.now();

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
