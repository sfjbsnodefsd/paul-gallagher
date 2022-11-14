import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import * as bodyParser from 'body-parser';
import { request, response } from 'express';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, NgForm } from '@angular/forms';



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
  enteredDetails = "";
  registeredUser = "";
@Output() postCreated = new EventEmitter();

  onRegisterUser() {
    this.registeredUser = this.enteredDetails
  }

  onSubmit(form: NgForm) {
   const post = {
    Aadhaar: form.value.Aadhaar
   };
   this.postCreated.emit(post)

  }

  display(details: any) {
    console.log(details)
  }
  title = 'Fill out the form below';
  // to access the data of this variable in out html file use {{variable name}}
 
pensioner: Pensioner[];
  constructor()
  {}
  ngOnInit() {

}
}
  
// registerUser() {
//     this.service.getPensioners().subscribe((res) => {
//       console.log(res)
//       this.service.Pensioner_Detail_URL
//     })
//   }
//   }
// 
