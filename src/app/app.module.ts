import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import * as firebase from 'firebase/app';
import 'firebase/auth';
import { AppComponent } from './app.component';
import {HomeComponent} from './home/home.component';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { AuthService } from './auth.service';
import {AppRoutingModule } from './approuting.module';
import { MenuComponent } from './menu/menu.component';
import { MyblogsComponent } from './myblogs/myblogs.component';
import { CreateComponent } from './create/create.component';

import {HttpClientModule} from '@angular/common/http';
import { PostComponent } from './post/post.component';
import { ViewComponent } from './view/view.component';
import { ProfileComponent } from './profile/profile.component'; 
let config = {
    apiKey: "AIzaSyATB_vE19LCfsmIfhf1feh1SsaZ8jtKwQE",
    authDomain: "blog8-48335.firebaseapp.com",
    databaseURL: "https://blog8-48335.firebaseio.com",
    projectId: "blog8-48335",
    storageBucket: "",
    messagingSenderId: "145145660654",
    appId: "1:145145660654:web:3d8e1576395fbf60"
  };
firebase.initializeApp(config)

@NgModule({
  imports:      [ BrowserModule, FormsModule,ReactiveFormsModule ,AppRoutingModule,,HttpClientModule],
  declarations: [ AppComponent,  SignupComponent, LoginComponent, HomeComponent, MenuComponent, MyblogsComponent, CreateComponent, PostComponent, ViewComponent, ProfileComponent ],
  bootstrap:    [ AppComponent ],
  providers: [AuthService]
})
export class AppModule { }
