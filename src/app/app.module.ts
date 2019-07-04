import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import * as firebase from 'firebase/app';
import 'firebase/auth';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { AuthService } from './auth.service';
import { HomeComponent } from './home/home.component';
import { CapitalizePipe } from './capitalize.pipe';
import { AmazingPipePipe } from './amazing-pipe.pipe';
  
   
 let config = {
    apiKey: "AIzaSyBPuYcRwYGbR9OGRGSewJVz6cKM_vpqwyo",
    authDomain: "scribe-2894e.firebaseapp.com",
    databaseURL: "https://scribe-2894e.firebaseio.com",
    projectId: "scribe-2894e",
    storageBucket: "",
    messagingSenderId: "210446709727",
    appId: "1:210446709727:web:bfa31e70022e60b8"
  };
firebase.initializeApp(config)

@NgModule({
  imports:      [ BrowserModule, FormsModule ,ReactiveFormsModule],
  declarations: [ AppComponent, HelloComponent, SignupComponent, LoginComponent, HomeComponent, CapitalizePipe, AmazingPipePipe ],
  bootstrap:    [ AppComponent ],
  providers: [AuthService]
})
export class AppModule { }
