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
  nextbtn: any = true;
  nextbtn2: any = true;
  nextbtn3: any = true;

  user: FormGroup;
  addForm: FormGroup;

    constructor(private _fb: FormBuilder, private http: HttpClient, private dataService: DatasharedService) {
        this.createForm();
    }

    addNewEntry() {
        const control = <FormArray>this.addForm.controls['itemRows'];
        control.push(this.initItemRows());
    }
    
    initItemRows() {
        return this._fb.group({
            itemname: ['']
        });
    }

    createForm() {
        this.addForm = this._fb.group({
            itemRows: this._fb.array([])
        });
        this.addForm.setControl('itemRows', this._fb.array([]));
        this.addNewEntry();
    }

    deleteRow(index: number) {
        const control = <FormArray>this.addForm.controls['itemRows'];
        control.removeAt(index);
    }

  ngOnInit() {
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
        }),
    });
    if(this.dataService.datafromLogin != null){
      this.user.setValue(this.dataService.datafromLogin);
      console.log(this.user)
    }
  }
  
  saveUserInfo(input) {
    let url = `/users/user/bravindra240@gmail.com`;
  	this.http.post(url, JSON.stringify(this.user.value),{headers: new HttpHeaders().set('Content-Type', 'application/json')})
  			.subscribe(
  					res => console.log(res)
  	);
  }
  
}