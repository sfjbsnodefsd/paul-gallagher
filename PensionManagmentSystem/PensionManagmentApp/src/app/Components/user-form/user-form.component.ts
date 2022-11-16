import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import * as bodyParser from 'body-parser';
import { request, response } from 'express';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, NgForm } from '@angular/forms';
import { Pensioner } from './user-form.model';
import { RegisterService } from 'src/app/Services/register.service';






@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css'],
})


export class UserFormComponent implements OnInit {
  enteredDetails = "";
  registeredUser = "";
  newUser: Pensioner[] = []

  constructor(public registerPensioner: RegisterService) {}
  ngOnInit() {
   
  }

  onRegisterUser(newUser) {
    this.newUser.push(newUser)
  }

  onSubmit(form: NgForm) {
    if (form.invalid) {
      return;
   };
   
   const newUser = {
   Aadhaar: undefined,
   Name: undefined,
   Dob: undefined,
   Pan: undefined,
   Salary: undefined,
   Allowances: undefined,
   SelfOrFamily: undefined,
   BankName: undefined,
   BankNumber: undefined,
   PublicOrPrivate: undefined }
   this.registerPensioner.addPensioner(newUser)
   form.resetForm();
  }

  display(details: any) {
    console.log(details)
  }}