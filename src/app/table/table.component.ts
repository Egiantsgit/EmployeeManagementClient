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
        {headerName: 'Call ID', field: 'callId', width: 130, editable: true},
        {headerName: 'Date', field: 'Date', width: 130, editable: true},
        {headerName: 'Vendor Name', field: 'vendorName', width: 130, editable: true},
        {headerName: 'Vendor Contact', field: 'vendorContact', width: 130, editable: true},
        {headerName: 'Vendor PhoneNumber', field: 'vendorPhoneNumber', width: 130, editable: true},
        {headerName: 'Client', field: 'client', width: 130, editable: true},
        {headerName: 'Status', field: 'status', width: 130, editable: true},
        {headerName: 'Edit', field: 'edit', width: 130, cellRenderer: this.editFunction }
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
        });
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
