import { FormGroup, FormControl, FormBuilder, FormArray } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { DatasharedService } from '../../datashared.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-personal-details',
  templateUrl: './personal-details.component.html',
  styleUrls: ['./personal-details.component.css']
})
export class PersonalDetailsComponent implements OnInit {
  personalNextBtn: any = true;
  eduNextBtn: any = true;
  immigNextBtn: any = true;

  user: FormGroup
  addForm: FormGroup;
  employeeForm: FormGroup;

  constructor(private _fb: FormBuilder, private http: HttpClient, private dataService: DatasharedService, private routes : Router){ }
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
  
});
if(this.dataService.datafromLogin != null){
  this.user.setValue(this.dataService.datafromLogin);
  console.log(this.user)
}   
}

saveUserInfo(input) {
console.log(input);
 let data:string = "";

 this.personalNextBtn = false;
     data = this.user.value;
     //.userPersonalDetails
     this.routes.navigate(['/EducationDetails']);

     

let url = `/users/user/vikmunn@gmail.com`; //{{emailId}}
this.http.post(url, JSON.stringify(data),{headers: new HttpHeaders().set('Content-Type', 'application/json')})
    .subscribe(
        res => console.log(res)
);
}
onNext(){
  this.routes.navigate(['/EducationDetails']);
}

}