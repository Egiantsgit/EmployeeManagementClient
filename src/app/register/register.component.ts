import { FormGroup, FormControl, FormBuilder, FormArray } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

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

    constructor(private _fb: FormBuilder, private http: HttpClient) {
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
      userPersonalDetails: new FormGroup({
      		firstName: new FormControl(),
      		middleName: new FormControl(),
      		lastName: new FormControl(),
      		gender: new FormControl(),
      		dateOfBirth: new FormControl(),
            nationality: new FormControl(),
            ssn: new FormControl(),
            maritalStatus: new FormControl(),
            primary: new FormGroup({
                contactAddress: new FormControl(),
                city: new FormControl(),
                state: new FormControl(),
                zipCode: new FormControl(),
                landMark: new FormControl(),
                phone: new FormControl(),
                alternatePhone: new FormControl(),
            }),
            secondary: new FormGroup({
                contactAddress: new FormControl(),
                city: new FormControl(),
                state: new FormControl(),
                zipCode: new FormControl(),
                landMark: new FormControl(),
                phone: new FormControl(),
                alternatePhone: new FormControl(),
            }),
            mobileNumber: new FormControl(),
            landLine: new FormControl(),
            email: new FormControl(),
      }),
      userEducationDetails: new FormGroup({
            masters: new FormGroup({
                gradYM: new FormControl(),
                majorDegree: new FormControl(),
                university: new FormControl(),
                universityAddress: new FormControl(),
                gpa: new FormControl(),
                startYM: new FormControl(),
            }),
            bachelors: new FormGroup({
                gradYM: new FormControl(),
                majorDegree: new FormControl(),
                university: new FormControl(),
                universityAddress: new FormControl(),
                gpa: new FormControl(),
                startYM: new FormControl(),
            }),
            intermediate: new FormGroup({
                collegeName: new FormControl(),
                startYM: new FormControl(),
                endYM: new FormControl(),
                collegeAddress: new FormControl(),
                zipCode: new FormControl(),
                landMark: new FormControl(),
            }),
        }),
        userImmigrationDetails: new FormGroup({
            countryOfBirth: new FormControl(),
            ppExpiryDate: new FormControl(),
            ppIssuedCountry: new FormControl(),
            i94Number: new FormControl(),
            currentStatus: new FormControl(),
            currentStatusValidity: new FormControl(),
            optStartDt: new FormControl(),
            optEndDt: new FormControl(),
            h1bStartDt: new FormControl(),
            h1bEndDt: new FormControl(),
        }),
        userWorkExperience: new FormGroup({
            totalExp: new FormControl(),
            previousFieldOfExp: new FormControl(),
        }),
    });
  }
  
  saveUserInfo(input) {
    let url = `/users/user/bravindra240@gmail.com`;
  	this.http.post(url, JSON.stringify(this.user.value),{headers: new HttpHeaders().set('Content-Type', 'application/json')})
  			.subscribe(
  					res => console.log(res)
  	);
  }
  
}