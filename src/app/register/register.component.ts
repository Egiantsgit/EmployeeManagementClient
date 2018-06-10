import { FormGroup, FormControl, FormBuilder } from '@angular/forms';
import { User } from './../shared/User';

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
userPersonalInfo: User = new User();
countries: any[] = ['UK', 'USA'];
personalInfoSaved: boolean;
navigateToNext: boolean;
personalInfo: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.personalInfo = this.fb.group({
      fullName: '',
      dateOfBirth: '',
      gender: '',
      maritalStatus: '',
      nationality: '',
      currentAddress: '',
      perminentAddress: '',

    });
  }

  savePersonalInfo() {
    this.personalInfoSaved = true;
    console.log(this.personalInfo);
    console.log('Personal Information:' + JSON.stringify(this.personalInfo.value));
  }

  nextClicked() {
this.navigateToNext = true;
  }



}
