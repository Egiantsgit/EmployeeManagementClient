import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, FormArray } from '@angular/forms';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css']
})
export class EducationComponent implements OnInit {
educationalInfo: FormGroup;
  constructor(private fb: FormBuilder) { }

  get educationArray(): FormArray {
    return <FormArray>this.educationalInfo.get('education');
  }
  ngOnInit() {
    this.educationalInfo = this.fb.group({
      education: this.fb.array([this.buildEducation()])
    });
  }

  addEducation(): void {
    this.educationArray.push(this.buildEducation());
  }

  buildEducation(): FormGroup {
    return this.fb.group({
      degree: '',
      collegeName: '',
      major: '',
      startDate: '',
      endDate: '',
      cummulativeGPA: ''
    });
  }

  saveEducationalInfo() {
    console.log('Personal Information:' + JSON.stringify(this.educationalInfo.get('education')[0]));
  }
}
