import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RegisterService } from './register.service';
import * as bodyParser from 'body-parser';
import {PensionerDetailsSchema} from './Entity/Model'
@Injectable({
  providedIn: 'root'
})
export class WebRequestService {
  pensioners : PensionerDetailsSchema[] = []
  readonly AUTH_ROOT_URL;
  Pensioner_Detail_URL: string;
  Process_URL:string 
  
  constructor(private http: HttpClient) { 
    this.AUTH_ROOT_URL = 'http://localhost:5000';
    this.Pensioner_Detail_URL ='http://localhost:5001';
    this.Process_URL = 'http://localhost:5006/ProcessPension/:aadhaar'

  }
registerUser( uri : string, PensionerDetailsSchema : any) {
  console.log("user Registered")
    return this.http.get(`${this.AUTH_ROOT_URL}/${uri}`, PensionerDetailsSchema)
   
  }
  
  getPensioners() {
    return this.http.get(this.Pensioner_Detail_URL)   //get body response
    }

  pensionAmount(Aadharr: Number, PensionerDetailsSchema) {
    return this.http.get(this.Process_URL, PensionerDetailsSchema)
  }
    
}
