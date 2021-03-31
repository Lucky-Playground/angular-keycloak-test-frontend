import { APP_INITIALIZER, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { KeycloakAngularModule , KeycloakService } from 'keycloak-angular';

import { AppComponent } from './app.component';
import { CustomerLoginComponent } from './view/customer-login/customer-login.component';

import { CustomerService } from './service/customer.service';
import { AppRoutingModule } from './app-routing.module';

function initializeKeycloak(keycloak: KeycloakService) {
  return () =>
    keycloak.init({
      config: {
        url: 'http://localhost:8180/auth',  // todo: edit these according to realm
        realm: 'demo1',
        clientId: 'spring-keycloak',
      }/*,
      initOptions: {                       // todo: comment these if html is not available
        onLoad: 'check-sso',
        silentCheckSsoRedirectUri:
          window.location.origin + '/assets/silent-check-sso.html',
      }*/
    });
}


@NgModule({
  declarations: [
    AppComponent,
    CustomerLoginComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    AppRoutingModule,
    KeycloakAngularModule
  ],
  providers: [
    {
      provide: APP_INITIALIZER,
      useFactory: initializeKeycloak,
      multi: true,
      deps: [KeycloakService]
    },
    CustomerService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
