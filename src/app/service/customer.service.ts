import { Injectable } from '@angular/core';
import { Customer } from '../model/customer';
import {Observable} from 'rxjs';
import {HttpHeaders, HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  constructor(private http: HttpClient) { }

  saveCustomer(customer: Customer): Observable<Customer>{
    const  httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };
    return this.http.post<Customer>('http://localhost:8080/api/v1/customers', customer , httpOptions);
  }
}
