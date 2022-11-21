import { Component, OnInit } from '@angular/core';

import { NgForm } from '@angular/forms';
import { LoginService } from './login.service';

@Component({
  selector: 'app-registered-user',
  templateUrl: './registered-user.component.html',
  styleUrls: ['./registered-user.component.css']
})
export class RegisteredUserComponent implements OnInit {



  constructor(public loginPensioner : LoginService) { }

  ngOnInit(): void {
  }



onSubmit(form: NgForm) {
  if (form.invalid) {
    return
  }this.loginPensioner.login(form.value.Aadhaar, form.value.email,
                                    form.value.password,)
  
  }

  display(details: any) {
    console.log(details)
  }}