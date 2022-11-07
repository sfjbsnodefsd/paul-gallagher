import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RegisterService } from './register.service';
import * as bodyParser from 'body-parser';
@Injectable({
  providedIn: 'root'
})
export class WebRequestService {

  readonly ROOT_URL;

  constructor(private http: HttpClient) { 
    this.ROOT_URL = 'http://localhost:5000';
    const pensioner = {Aadhaar:Number,

      Name:String,
      Dob:String,
      Pan: Number,
      Salary:Number,
      Allowances: Number,
      SelfOrFamily: String,
      BankName: String,
      BankNumber:Number,
      PublicOrPrivate: String}

  }
registerUser( uri : string, pensioner : any) {
  console.log("user Registered")
    return this.http.post(`${this.ROOT_URL}/${uri}`, pensioner)
   
  }
}
