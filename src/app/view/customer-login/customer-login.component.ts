import { Component, OnInit, ViewChild } from '@angular/core';
import { Customer } from '../../model/customer';
import { CustomerService } from '../../service/customer.service';
import {FormBuilder, FormGroup, NgForm} from '@angular/forms';

@Component({
  selector: 'app-customer-login',
  templateUrl: './customer-login.component.html',
  styleUrls: ['./customer-login.component.scss']
})
export class CustomerLoginComponent implements OnInit {

  @ViewChild('cform') customerFormDirective!: NgForm;
  customerForm!: FormGroup;
  customer!: Customer;

  constructor(private customerService: CustomerService,
              private fb: FormBuilder) {
    // this.createForm();
  }

  ngOnInit(): void {
    this.createForm();
  }

  createForm(){
    this.customerForm = this.fb.group({
      username: '',
      password: ''
    });
  }

  onSubmit(){
    this.customer = this.customerForm.value;
    console.log(this.customer);

    this.customerService
      .postCustomer(this.customer)
      .subscribe(customer => { this.customer = customer; });

    this.customerForm.reset({
      username: '',
      password: ''
    });
    this.customerFormDirective.resetForm();
  }

}
