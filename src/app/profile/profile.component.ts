import { DatasharedService } from './../datashared.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  loggedUsedData: any;
  constructor(private dataService: DatasharedService) {
    this.loggedUsedData = this.dataService.datafromLogin;
   }

  ngOnInit() {
  }

}
