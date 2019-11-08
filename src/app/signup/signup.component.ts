import { Component, OnInit } from '@angular/core';
import {FormBuilder,FormGroup,FormControl,Validators} from '@angular/forms';
import {AuthService} from '../auth.service';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  myform: FormGroup;
  message: string = "";
  userError : any;
  constructor(public fb: FormBuilder,public authService:AuthService) {
    this.myform=this.fb.group({
      'firstname':['',[ Validators.required]],
      'lastname':['',[ Validators.required]],
      'email':['',[ Validators.required]],
      'password':['',[ Validators.required , Validators.minLength(8)]],
      'confirmpassword': ['',[ Validators.required]]})
  }

 onsubmit(signupform){
   let email : string =signupform.value.email;
   let password : string = signupform.value.password;
   let firstname : string = signupform.value.firstname;
   let lastname : string = signupform.value.lastname;
   let randomnumber = Math.floor(Math.random());
   
   
   this.authService.signup(email, password,firstname,lastname).then(()=>{
     this.message="You have been signed up successfully ! Now login";
     }).catch((error)=>{
     console.log(error);
     this.userError=error;
   })

 }

  ngOnInit() {
  }

}