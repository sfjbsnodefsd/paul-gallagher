import { Component, OnInit } from '@angular/core';
import * as bodyParser from 'body-parser';
import { request, response } from 'express';

import { UserService } from "src/app/Services/user.service"
import { WebRequestService } from 'src/app/web-request.service';
import { HttpClientModule } from '@angular/common/http';
import { RegisterService } from 'src/app/register.service';


export class Pensioner {
  constructor(
    id: Number,
    Aadhaar: Number, 
    Name: String,
    Dob: String,
    Pan: Number,
    Salary: Number,
    Allowances: Number,
    SelfOrFamily: String, 
    BankName: String,
    BankNumber: Number,
    PublicOrPrivate: String


  ) {

  }
}




@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css'],
})
export class UserFormComponent implements OnInit {
[x: string]: any;
  title = 'Fill out the form below';
  // to access the data of this variable in out html file use {{variable name}}
 
pensioner: Pensioner[];
  constructor(private service: WebRequestService )
  {}
  ngOnInit() {

}
 
  
  
  registerUser() {
    this.service.getPensioners().subscribe((res) => {
      console.log(res)
      this.service.Pensioner_Detail_URL
    })
    
  }
}
