import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormArray, FormControl } from '@angular/forms';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { DatasharedService } from '../../datashared.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-immigration-details',
  templateUrl: './immigration-details.component.html',
  styleUrls: ['./immigration-details.component.css']
})
export class ImmigrationDetailsComponent implements OnInit {
  personalNextBtn: any = true;
  eduNextBtn: any = true;
  immigNextBtn: any = true;

  user: FormGroup;
  addForm: FormGroup;
  employeeForm: FormGroup;

    constructor(private _fb: FormBuilder, private http: HttpClient, private dataService: DatasharedService, private routes : Router) {
      
    }
   
    
    initItemRows() {
        return this._fb.group({
            companyName:'',startYear:'',companyLocation:'',offerLetter:''
        });
    }

    

    employeeExpDetails(){  
            alert(JSON.stringify(this.employeeForm.value));
    }

    addNewRow() {
        const control = <FormArray>this.employeeForm.controls['itemRows'];
        control.push(this.initItemRows());
    }

    deleteRow(index: number) {
        const control = <FormArray>this.employeeForm.controls['itemRows'];
        control.removeAt(index);
    }

  ngOnInit() {

    this.employeeForm = this._fb.group({
        itemRows: this._fb.array([this.initItemRows()]) 
      });

   

    this.user = new FormGroup({
      uuid : new FormControl(),
      userImmigrationDetails: new FormGroup({
        countryOfBirth: new FormControl(),
        passportExpiryDate: new FormControl(),
        passportIssuedCountry: new FormControl(),
        i94Number: new FormControl(),
        currentStatus: new FormControl(),
        currentStatusValidity: new FormControl(),
        optStartDate: new FormControl(),
        optEndDate: new FormControl(),
        h1bStartDate: new FormControl(),
        h1bEndDate: new FormControl(),
   
        }),
    });
    if(this.dataService.datafromLogin != null){
      this.user.setValue(this.dataService.datafromLogin);
      console.log(this.user)
    }   
  }
  
  saveUserInfo() {
     window.alert("submit saved");
     
     let data:string = "";
     data = this.user.value.userImmigrationDetails
     let url = `/users/user/vikmunn@gmail.com`; //{{emailId}}
  	 this.http.post(url, JSON.stringify(data),{headers: new HttpHeaders().set('Content-Type', 'application/json')})
  		.subscribe(
                       res => console.log(res)
                       
                       
       );
      }
      onNext(){
        this.routes.navigate(['/WorkExperience'])
    }
       
    
    //  let data:string = "";
 	// if(input == 1){
 	// 	this.personalNextBtn = false;
    //      data = this.user.value;
    //      //.userPersonalDetails
 	// }else if(input == 2){
 	// 	this.eduNextBtn = false;
 	// 	data = this.user.value.userEducationDetails;
 	// }else if(input == 3){
 	// 	this.immigNextBtn = false;
 	// 	data = this.user.value.userImmigrationDetails;
 	// }else if(input == 4){
    //      data = this.user.value.userWorkExperience;
    //      window.alert("Form is Submitted Successfully")
    //      this.routes.navigate(['/home']);

         
    // }
    // let url = `/users/user/vikmunn@gmail.com`; //{{emailId}}
  	// this.http.post(url, JSON.stringify(data),{headers: new HttpHeaders().set('Content-Type', 'application/json')})
  	// 		.subscribe(
  	// 				res => console.log(res)
  	// );
  }

  

  
  
