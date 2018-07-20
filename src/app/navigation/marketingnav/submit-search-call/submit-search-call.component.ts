import { Component, OnInit } from '@angular/core';
import { VendorCallDetailsService } from '../share/vendor-call-details.service';
import { NgForm } from '../../../../../node_modules/@angular/forms';

@Component({
  selector: 'app-submit-search-call',
  templateUrl: './submit-search-call.component.html',
  styleUrls: ['./submit-search-call.component.css'],
  providers:[VendorCallDetailsService]
})
export class SubmitSearchCallComponent implements OnInit {

  constructor(private vendorService: VendorCallDetailsService) {

   }

  ngOnInit() {
    this.resetForm();
  }
  resetForm(form? : NgForm){
    if(form != null)
      form.reset();
    this.vendorService.selectedVendor = {
      date: null,
      vendorOrganization: '',
      vendorContactName: '',
      phone: null,
      contactEmail: '',
      implementationPartner: '',
      status: 'Submitted',
      client: '',
      comments: ''

    }
  }
  onSubmit(form: NgForm){
    window.alert("form submitted");
    this.vendorService.postVendorCall(form.value)
    .subscribe(data =>{
      this.resetForm(form);
    })
  }

}
