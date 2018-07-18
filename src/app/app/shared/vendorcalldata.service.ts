import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class VendorcalldataService {

constructor(private http: HttpClient) { }

getVendorCallData(): any {
  return this.http.get('assets/vendorcalldata.json');
}


}
