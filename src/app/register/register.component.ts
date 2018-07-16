import { FormGroup, FormControl, FormBuilder, FormArray } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { DatasharedService } from './../datashared.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  id: any = 1;
  personalNextBtn: any = true;
  eduNextBtn: any = true;
  immigNextBtn: any = true;

  user: FormGroup;
  addForm: FormGroup;
  employeeForm: FormGroup;

    constructor(private _fb: FormBuilder, private http: HttpClient, private dataService: DatasharedService) {
      
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
      userPersonalDetails: new FormGroup({
      		firstName: new FormControl(),
      		middleName: new FormControl(),
      		lastName: new FormControl(),
      		gender: new FormControl(),
      		dateOfBirth: new FormControl(),
            nationality: new FormControl(),
            ssn: new FormControl(),
            maritalStatus: new FormControl(),
            primaryAddress: new FormGroup({
                line1: new FormControl(),
                line2: new FormControl(),
                line3: new FormControl(),
                city: new FormControl(),
                state: new FormControl(),
                postalCode: new FormControl(),
                phoneNo: new FormControl(),
                alternatePhoneNo: new FormControl(),
            }),
            secondaryAddress: new FormGroup({
                line1: new FormControl(),
                line2: new FormControl(),
                line3: new FormControl(),
                city: new FormControl(),
                state: new FormControl(),
                postalCode: new FormControl(),
                phoneNo: new FormControl(),
                alternatePhoneNo: new FormControl(),
            }),
            personalPhoneNo: new FormControl(),
            workPhoneNo: new FormControl(),
            emailId: new FormControl(),
      }),
      userEducationDetails: new FormGroup({
            masters: new FormGroup({
                gradYearMonth: new FormControl(),
                majorDegree: new FormControl(),
                university: new FormControl(),
                universityAddress: new FormControl(),
                gpa: new FormControl(),
                startYearMonth: new FormControl(),
            }),
            bachelors: new FormGroup({
                gradYearMonth: new FormControl(),
                majorDegree: new FormControl(),
                university: new FormControl(),
                universityAddress: new FormControl(),
                gpa: new FormControl(),
                startYearMonth: new FormControl(),
            }),
            intermediate: new FormGroup({
                collegeName: new FormControl(),
                startYearMonth: new FormControl(),
                endYearMonth: new FormControl(),
                collegeAddress: new FormControl(),
                postalCode: new FormControl(),
                landMark: new FormControl(),
            }),
        }),
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
  
  saveUserInfo(input) {
 	console.log(input);
 	let data:string = "";
 	if(input == 1){
 		this.personalNextBtn = false;
 		data = this.user.value.userPersonalDetails;
 	}else if(input == 2){
 		this.eduNextBtn = false;
 		data = this.user.value.userEducationDetails;
 	}else if(input == 3){
 		this.immigNextBtn = false;
 		data = this.user.value.userImmigrationDetails;
 	}else if(input == 4){
 		data = this.user.value.userWorkExperience;
    }
    let url = `/users/user/{{emailId}}`;
  	this.http.post(url, JSON.stringify(data),{headers: new HttpHeaders().set('Content-Type', 'application/json')})
  			.subscribe(
  					res => console.log(res)
  	);
  }
  
}