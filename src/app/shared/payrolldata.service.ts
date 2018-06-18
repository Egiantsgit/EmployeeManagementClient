import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PayrolldataService {

constructor(private http: HttpClient) { }

getPayrollData(): any {
  return this.http.get('assets/payrolldata.json');
}

}
