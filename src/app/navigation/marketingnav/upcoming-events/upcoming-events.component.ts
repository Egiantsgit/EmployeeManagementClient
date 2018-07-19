import { MarketingnavdataService } from './../../../shared/marketingnavdata.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-upcoming-events',
  templateUrl: './upcoming-events.component.html',
  styleUrls: ['./upcoming-events.component.css']
})
export class UpcomingEventsComponent implements OnInit {
  upcomingevents: any;
  constructor(private upcomingeventsData: MarketingnavdataService) {}

  ngOnInit() {
    this.upcomingeventsData.getUserMaretingData().subscribe(
      (data: any) => {
        this.upcomingevents = data.eventdata;

      });
   }

}
