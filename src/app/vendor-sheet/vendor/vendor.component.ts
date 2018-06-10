import { Vendor } from './../../shared/Vendor';
import { VendordataService } from './../../shared/vendordata.service';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-vendor',
  templateUrl: './vendor.component.html',
  styleUrls: ['./vendor.component.css']
})
export class VendorComponent implements OnInit {
@Input() vendorid: number;
vendor: Vendor;
closeClicked: boolean;
  constructor(private vendordataService: VendordataService) {
  }

  ngOnInit() {
    if (this.vendorid !== undefined) {
      this.vendor = this.vendordataService.getVendorById(this.vendorid);
    }
  }

  closeButtonClicked() {
  this.closeClicked = true;
  }
}
