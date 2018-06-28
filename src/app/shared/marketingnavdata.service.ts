import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MarketingnavdataService {
      
    constructor(private http: HttpClient) {}

getUserMaretingData(): any {
  return this.http.get('assets/marketingnavdata.json');
  
}
}
