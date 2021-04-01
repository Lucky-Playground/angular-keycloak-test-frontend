import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, NgForm} from '@angular/forms';
import { Router } from '@angular/router';
import { Customer } from '../../model/customer';
import {CustomerService} from '../../service/customer.service';

@Component({
  selector: 'app-manage-customer',
  templateUrl: './manage-customer.component.html',
  styleUrls: ['./manage-customer.component.scss']
})
export class ManageCustomerComponent implements OnInit {

  @ViewChild('cform') customerFormDirective!: NgForm;
  customerForm!: FormGroup;
  customer!: Customer;

  constructor(private customerService: CustomerService,
              private fb: FormBuilder) { }

  ngOnInit(): void {
    this.createForm();
  }
  createForm(): void{
    this.customerForm = this.fb.group({
      id: '',
      name: '',
      address: ''
    });
  }
  onSave(): void{
    this.customer = this.customerForm.value;
    console.log(this.customer);
    // todo: call customer services
    this.customerForm.reset({
      id: '',
      name: '',
      address: ''
    });
    this.customerFormDirective.resetForm();
  }
}
