import { FormGroup, FormBuilder } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-work-experience',
  templateUrl: './work-experience.component.html',
  styleUrls: ['./work-experience.component.css']
})
export class WorkExperienceComponent implements OnInit {
WorkExperienceForm: FormGroup;
  constructor(private fb: FormBuilder) { }

  ngOnInit() {
  this.WorkExperienceForm = this.fb.group({
    title: '',
    company: '',
    location: '',
    fromDate: '',
    toDate: '',
    currentWorkingStatus: false
  });
  }

  saveEmployementDetails() {
    console.log(this.WorkExperienceForm.value);
  }

}
