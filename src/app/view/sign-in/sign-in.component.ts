import { Component, OnInit, ViewChild } from '@angular/core';
import { User } from '../../model/user';
import { UserService } from '../../service/user.service';
import {FormBuilder, FormGroup, NgForm} from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnInit {

  @ViewChild('cform') userFormDirective!: NgForm;
  userForm!: FormGroup;
  user!: User;

  constructor(private userService: UserService,
              private fb: FormBuilder,
              private router: Router) {
    // this.createForm();
  }

  ngOnInit(): void {
    this.createForm();
  }

  createForm(){
    this.userForm = this.fb.group({
      username: '',
      password: ''
    });
  }

  onSubmit(){
    this.user = this.userForm.value;
    console.log(this.user);

    /*this.userService
      .postUser(this.user)
      .subscribe(user => { this.user = user; this.router.navigateByUrl('/dashboard'); });*/   // todo: uncomment when connecting to backend

    this.router.navigateByUrl('/dashboard');
    this.userForm.reset({
      username: '',
      password: ''
    });
    this.userFormDirective.resetForm();
  }

}
