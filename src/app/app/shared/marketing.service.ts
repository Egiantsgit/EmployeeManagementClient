import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MarketingService {

constructor(private http: HttpClient) { }


getMarketingData(): any {
  return this.http.get('assets/marketingData.json');
}
}
