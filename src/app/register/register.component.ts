import { FormGroup, FormControl, FormBuilder, FormArray } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { DatasharedService } from './../datashared.service';
import { Router } from '../../../node_modules/@angular/router';
;
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
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
        userWorkExperience: new FormGroup({
            totalExp: new FormControl(),
            previousFieldOfExp: new FormControl(),
            companyDetails: this.employeeForm
        }),
    });
    if(this.dataService.datafromLogin != null){
      this.user.setValue(this.dataService.datafromLogin);
      console.log(this.user)
    }   
  }
  
  saveUserInfo() {
 	
     let data:string = "";
 	     data = this.user.value.userWorkExperience;
         window.alert("Form is Submitted Successfully")
         this.routes.navigate(['/home']);

         
    
    let url = `/users/user/vikmunn@gmail.com`; //{{emailId}}
  	this.http.post(url, JSON.stringify(data),{headers: new HttpHeaders().set('Content-Type', 'application/json')})
  			.subscribe(
  					res => console.log(res)
  	);
  }
  
}