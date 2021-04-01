import { Injectable } from '@angular/core';
import { Customer } from '../model/customer';
import {Observable} from 'rxjs';
import {HttpHeaders, HttpClient } from '@angular/common/http';
import {KeycloakService} from 'keycloak-angular';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  constructor(private http: HttpClient,
              private keycloakService: KeycloakService) { }

  saveCustomer(customer: Customer): Observable<Customer>{
    const  httpOptions = {
      headers: new HttpHeaders()
    };
    let headers: HttpHeaders = new HttpHeaders();
    headers = headers.append('Content-Type', 'application/json');
    headers = headers.append('Authorization', 'Bearer ' + this.keycloakService.getKeycloakInstance().token);
    httpOptions.headers = headers;
    return this.http.post<Customer>('http://localhost:8080/api/v1/customers', customer , httpOptions);
  }

  // headers = headers.append('Content-Type', 'application/json');
  // headers = headers.append('Authorization', 'Bearer ' + this.keycloakService.getKeycloakInstance().token);
}
