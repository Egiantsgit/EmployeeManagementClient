import { Vendor } from './Vendor';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class VendordataService {
vendorList: any = [{
  id: 1,
  ClientName: 'Jhon',
  VendorName: 'Doe',
  EmailID: 'jhon@gmail.com',
  Location: 'Dallas, TX',
  ProjectDescription: 'Full stack Developer',
  comments: 'Interview Scheduled'
},
{
  id: 2,
  ClientName: 'Devid',
  VendorName: 'Doe',
  EmailID: 'jhon@gmail.com',
  Location: 'Dallas, TX',
  ProjectDescription: 'Full stack Developer',
  comments: 'Interview Scheduled'
},
{
  id: 3,
  ClientName: 'Dan',
  VendorName: 'Doe',
  EmailID: 'jhon@gmail.com',
  Location: 'Dallas, TX',
  ProjectDescription: 'Full stack Developer',
  comments: 'Interview Scheduled'
}];

selectedVendor: Vendor;

constructor() { }

getVendorList() {
  return this.vendorList;
}

getVendorById(id: number) {
console.log(id);
 for (const vendor of this.vendorList) {
   if (vendor.id === id) {
    this.selectedVendor = vendor;
   }
 }
 return this.selectedVendor;
}

}
