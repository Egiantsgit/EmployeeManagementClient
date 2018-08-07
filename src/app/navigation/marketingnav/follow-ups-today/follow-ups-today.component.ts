import { Component, OnInit, ViewChild } from '@angular/core';
import { MarketingService } from '../../../shared/marketing.service';
import { FollowupsTodayService } from '../../../shared/followups-today.service';
@Component({
  selector: 'app-follow-ups-today',
  templateUrl: './follow-ups-today.component.html',
  styleUrls: ['./follow-ups-today.component.css']
})
export class FollowUpsTodayComponent implements OnInit {
  private gridApi;
  private gridColumnApi;
  private columnDefs;
  private rowData: any[];
  private frameworkComponents;

  constructor(private followupsService : FollowupsTodayService) {
    this.columnDefs = [
      {
        headerName: 'Call ID',
        field: 'callId',
        width:100
      },
      {
        headerName: 'Date',
        field: 'Date', 
        width:100,
      },
      {
        headerName: 'Vendor Name',
        field: 'vendorName', 
        width:100
      },
      {
        headerName: 'Vendor Contact', 
        field: 'vendorContact', 
        width:100
      },
      {
        headerName: 'Vendor PhoneNumber', 
        field: 'vendorPhoneNumber', 
        width:100
      },
      {
        headerName: 'Client', 
        field: 'client', 
        width:100
      },
      {
        headerName: 'Status', 
        field: 'status', 
        width:100
      }
  ];
  }
   onGridReady(params) {
     this.gridApi = params.api;
     this.gridColumnApi = params.ColumnApi;
     this.followupsService.getFOllowUpsTodayData().subscribe(
        (data: any) => {
          const rowData = data.marketingData;
          params.api.setRowData(rowData);
        },
        msg => {
          console.error(`Error: ${msg.status} ${msg.statusText}`);
        });
   }

  ngOnInit() {
  }

}
