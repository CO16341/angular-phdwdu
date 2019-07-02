import { Component, OnInit } from '@angular/core';
import {FormBuilder,FormGroup,FormControl,Validators}from '@angular/forms';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
myForm: FormGroup;
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
firebase.auth().createUserWithEmailAndPassword(email, password).then((response) => {
  console.log(response);
}).catch((error)=>{
  console.log(error);
})
  }
  ngOnInit() {
  }

}
