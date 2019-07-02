import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import * as firebase from 'firebase/app';
import 'firebase/auth';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { SignupComponent } from './signup/signup.component';
  
   

@NgModule({
  imports:      [ BrowserModule, FormsModule ,ReactiveFormsModule],
  declarations: [ AppComponent, HelloComponent, SignupComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
