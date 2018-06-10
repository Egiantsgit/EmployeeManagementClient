import { VendordataService } from './../shared/vendordata.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-vendor-sheet',
  templateUrl: './vendor-sheet.component.html',
  styleUrls: ['./vendor-sheet.component.css']
})
export class VendorSheetComponent implements OnInit {
vendorlist: any = [];
vendorToggelClicked: boolean;
selectedVendor: any;

  constructor(private vendorList: VendordataService) {
   }

  ngOnInit() {
    this.vendorlist = this.vendorList.getVendorList();
  }

  toggleVendorForm() {
  if (this.vendorToggelClicked === false) {
    this.vendorToggelClicked = true;
  } else {
    this.vendorToggelClicked = false;
  }
  }

  editVendorForm(id: number) {
    this.vendorToggelClicked = true;
    this.selectedVendor = id;
  }

}
