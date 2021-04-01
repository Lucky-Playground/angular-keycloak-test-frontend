import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router';
import {KeycloakService} from 'keycloak-angular';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  user = '';

  constructor(private router: Router,
              private keycloakService: KeycloakService ) { }

  ngOnInit(): void {
    this.initializeUserOptions();
  }

  private initializeUserOptions(): void {
    this.user = this.keycloakService.getUsername();
  }

  logout(): void{
    this.keycloakService.logout('http://localhost:4200/sign-in');
  }
}
