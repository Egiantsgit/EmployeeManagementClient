import { DatasharedService } from './../datashared.service';
import { Component, OnInit } from '@angular/core';
import { ProfileService } from './../shared/profile.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  loggedUsedData: any;
  constructor(private profile: ProfileService){

  }
  

  ngOnInit() {
    this.profile.getUserProfileData().subscribe(
      (data: any) => {
       this.loggedUsedData = data;
      },
      (err: any) => {
        console.log('Could not find the user profile data');
      }
     );
  }
    
  }


