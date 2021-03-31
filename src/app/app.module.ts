import { APP_INITIALIZER, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { KeycloakAngularModule , KeycloakService } from 'keycloak-angular';

import { AppComponent } from './app.component';
import { SignInComponent } from './view/sign-in/sign-in.component';

import { UserService } from './service/user.service';
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
    SignInComponent
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
    UserService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
