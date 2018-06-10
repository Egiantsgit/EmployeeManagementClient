import { DatasharedService } from './../datashared.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  loggedUsedData: any;
  constructor(private dataService: DatasharedService) {
    this.loggedUsedData = this.dataService.datafromLogin;
  }

  ngOnInit() {
  }

}
