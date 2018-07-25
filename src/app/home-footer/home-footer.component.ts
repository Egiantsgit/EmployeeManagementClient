import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http'; 
import {FormControl, FormGroup, Validators,FormBuilder} from '@angular/forms';
import { Observable } from 'rxjs/Observable';
import {NgForm} from '@angular/forms';
import {Http} from '@angular/http';

@Component({
  selector: 'app-home-footer',
  templateUrl: './home-footer.component.html',
  styleUrls: ['./home-footer.component.css']
})     
export class HomeFooterComponent implements OnInit {

  formErrors={'email':''};
  form = new FormGroup({
    email: new FormControl(),
  });

   constructor(private http: Http) {
   }   
 
   ngOnInit() {
     
    }
    
  EmailSubscribe(){
    this.formErrors['email']= '';
    let post:any={title:this.form.value.email};
    
      if((this.form.value.email==null) ||( this.form.value.email.untouched && this.form.value.email.dirty)|| (this.form.value.email=="")){
        this.formErrors['email']= 'email is required';
        return;
      }
  
      this.http.post('  ', JSON.stringify(post))
      .subscribe(response=>{
        console.log(this.form.value.email);
          console.log(response.json());
         },
      err => {
        console.log("Error occured");
      }
           );
         
     }

    }
