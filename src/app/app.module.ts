import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { CustomerLoginComponent } from './view/customer-login/customer-login.component';

import { CustomerService } from './service/customer.service';

@NgModule({
  declarations: [
    AppComponent,
    CustomerLoginComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [CustomerService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
