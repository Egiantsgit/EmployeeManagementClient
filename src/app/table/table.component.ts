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
        {headerName: 'Call ID', field: 'callerId'},
        {headerName: 'Date', field: 'date'},
        {headerName: 'Vendor Name', field: 'vendorOrganizationName'},
        {headerName: 'Vendor Contact', field: 'vendorContactPerson'},
        {headerName: 'Vendor PhoneNumber', field: 'contactNumber'},
        {headerName: 'Client', field: 'client'},
        {headerName: 'Status', field: 'status'}
        
    ];
    }
     onGridReady(params) {
       this.gridApi = params.api;
       this.gridColumnApi = params.ColumnApi;
       this.martketingData.getMarketingData().subscribe(
          (data: any) => {
            const rowData = data.marketingData;
            params.api.setRowData(rowData);
          },
          msg => {
      console.error(`Error: ${msg.status} ${msg.statusText}`);
    }
        );



     }
     editFunc() {
       window.alert('cell is double clicked');

      // this.martketingData.getMarketingData().subscribe(
      //   (data: any) => {
      //     this.gridApi.setRowData([]);
      //     const newData = data;
      //     this.gridApi.updateRowData({add: newData});
      //   }
      // );
     }

  ngOnInit() {
  }
}
