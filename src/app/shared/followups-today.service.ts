import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class FollowupsTodayService {

  constructor(private http: HttpClient) { }


getFOllowUpsTodayData(): any {
  return this.http.get('assets/marketingData.json');
}
}
