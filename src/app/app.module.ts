import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { SignInComponent } from './view/sign-in/sign-in.component';

import { UserService } from './service/user.service';
import { AppRoutingModule } from './app-routing.module';
import { SignUpComponent } from './view/sign-up/sign-up.component';

@NgModule({
  declarations: [
    AppComponent,
    SignInComponent,
    SignUpComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  providers: [UserService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
