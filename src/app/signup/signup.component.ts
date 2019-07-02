import { Component, OnInit } from '@angular/core';
import {FormBuilder,FormGroup,FormControl,Validators}from '@angular/forms';
import * as firebase from 'firebase/app'
import 'firebase/auth'
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
myForm: FormGroup;
message: string ="" ;
userError: any;
  constructor(public fb: FormBuilder) {
    this.myForm=this.fb.group({
      firstName:['',[Validators.required]],
      lastName:['',[Validators.required]],  
      email:['',[Validators.required]],
       password:['',[Validators.required,Validators.min]],
      confirmPassword:['',[Validators.required]]
    },{
      validator:this.checkIfMatchingPassword("password","confirmPassword")
    })
   }
   checkIfMatchingPassword(passwordKey: string,confirmPasswordKey: string)
   {
     return (group: FormGroup)=>{
       let password=group.controls[passwordKey];
       let confirmPassword=group.controls[confirmPasswordKey];
       if(password.value==confirmPassword.value){
         return ;
       }else
       {
         confirmPassword.setErrors({
           notEqualToPassword: true
         })
       }
     }
   }
onSubmit(signupform)
{
let email : string=signupform.value.email;
let password : string=signupform.value.password;
let firstname : string = signupform.value.firstname;
let lastname : string = signupform.value.lastname;
let randomnumber = Math.floor(Math.random()*1000);
firebase.auth().createUserWithEmailAndPassword(email,password).then((response) => {
  console.log(response);
  response.user.updateProfile({
  displayName : firstname + " " + lastname,
  photoURL : "http://api.adorable.io/avatars/"+ randomnumber }).
  then(()=>{
    this.message="You have been signed up successfully .Please login."
  })
}).catch((error)=>{
  console.log(error);
  this.userError=error;
})
  }
  ngOnInit() {
  }

}
