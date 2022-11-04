import { Injectable } from '@angular/core';
import { WebRequestService } from './web-request.service';
import { HttpClientModule } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class RegisterService {
  http: any;

  constructor(private service: WebRequestService) { }

  registerUser(Pensioner: {Aadhaar:Number,

  Name:String,
  Dob:String,
  Pan: Number,
  Salary:Number,
  Allowances: Number,
  SelfOrFamily: String,
  BankName: String,
  BankNumber:Number,
  PublicOrPrivate: String}) {
   return  this.http.service('auth/reg', { Pensioner });

  }
}
