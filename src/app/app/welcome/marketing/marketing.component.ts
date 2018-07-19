import { VendorcalldataService } from './../../shared/vendorcalldata.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-marketing',
  templateUrl: './marketing.component.html',
  styleUrls: ['./marketing.component.css']
})
export class MarketingComponent implements OnInit {
  vendorcalls: any;
  constructor(private vendorcallData: VendorcalldataService) { }

  ngOnInit() {
    this.vendorcallData.getVendorCallData().subscribe(
      (data: any) => {
        this.vendorcalls = data.calldata;
      }
    );
  }

}
