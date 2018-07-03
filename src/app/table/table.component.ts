import { Component, OnInit } from '@angular/core';
import { MarketingService } from './../shared/marketing.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

  private gridApi;
  private gridColumnApi;
  private columnDefs;
  private sortingOrder;
    constructor(private martketingData: MarketingService) {
      this.columnDefs = [
        {headerName: 'Call ID', field: 'callId', width: 100, editable: true},
        {headerName: 'Date', field: 'Date', width: 100, editable: true},
        {headerName: 'Vendor Name', field: 'vendorName', width: 120, editable: true},
        {headerName: 'Vendor Contact', field: 'vendorContact', width: 100, editable: true},
        {headerName: 'Vendor PhoneNumber', field: 'vendorPhoneNumber', width: 100, editable: true},
        {headerName: 'Client', field: 'client', width: 100, editable: true},
        {headerName: 'Status', field: 'status', width: 100, editable: true},
        {headerName: 'Edit', field: 'edit', width: 100, cellRenderer: this.editFunction }
    ];
    }
     onGridReady(params) {
       this.gridApi = params.api;
       this.gridColumnApi = params.ColumnApi;
       this.martketingData.getMarketingData().subscribe(
          (data: any) => {
            const rowData = data.marketingData;
            params.api.setRowData(rowData);
          }
        );



     }
     editFunction() {
      return `<a class="btn" (click)="editFunc()">
              <i class="fa fa-pencil-square-o"></i>
              </a>
              <a class="btn text-danger">
              <i class="fa fa-trash-o"></i>
              </a>`;

     }
     editFunc() {
      window.alert('hi');
     }

  ngOnInit() {
  }
}
