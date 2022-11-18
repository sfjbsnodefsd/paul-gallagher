import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { AddPensionerService } from 'src/app/Services/add-pensioner.service';
import NewPensioner from "src/app/Entity/Model";
import { AuthService } from './auth.service';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css'],
})


export class UserFormComponent implements OnInit {
 
 

  

  constructor(public newPensioner: AuthService) {}
  ngOnInit() {
   
  }



  onSubmit(form: NgForm) {
    if (form.invalid) {
      return
    }this.newPensioner.createPensioner(form.value.Aadhaar, form.value.Name,form.value.email,
                                      form.value.password,form.value.Dob,
                                      form.value.Pan,form.value.Salary,form.value.Allowances,form.value.SelfOrFamily,
                                      form.value.BankName,form.value.BankNumber,form.value.PublicOrPrivate,)
    
  
   
      }


  onAddnewPensioner() {
    console.log(this.newPensioner)
  }

  display(details: any) {
    console.log(details)
  }}